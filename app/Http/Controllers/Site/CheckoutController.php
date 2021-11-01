<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\User;
use Cartalyst\Stripe\Exception\CardErrorException;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class CheckoutController extends Controller
{
    public function checkout(Request $request){
        $userData = $request->data['user'];
        $cardData = $request->data['card'];
        $planDetails = $request->data['plan'];

        if($planDetails['yearly'] == null){
            $amount = $planDetails['monthly'];
            $price = '$'.$amount.' /mo';
            $discount = 0 ;
        }
        else{
            $amount = $planDetails['yearly'];
            $price = '$'.$amount.' /year';
            $discount = (float) ((float) $planDetails['monthly'] * 12)  - (float) $amount;
        }

        try {
            $charge = Stripe::charges()->create([
                'amount' => $amount,
                'currency' => 'USD',
                'source' => $request->stripeToken,
                'description' => 'Description goes here',
                'receipt_email' => $userData['email'],
                'metadata' => [
                    'Plan id' => $planDetails['id'],
                    'Plan name' => $planDetails['pricingName'],
                    'Price' => $price ,
                    'discount'  =>  '$'.$discount
                ],
            ]);

            // save this info to your database

            if($charge){
                if($userData['image']){
                    $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', $userData['username']))), 0, 10);
                    $imgExt = explode('/', explode(':', substr($userData['image'], 0, strpos($userData['image'], ';')))[1])[1];
                    $image = $imageName.'.'.$imgExt;
                    Image::make($userData['image'])->resize(300,300)->save(public_path('uploads/avatar/').$image);
                    $imageUrl = env('APP_URL') . '/uploads/avatar/' . $image;
                }else{
                    $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
                }

                $user = User::create([
                    'shop_owner'        => true,
                    'profile_picture'   =>  $imageUrl,
                    'first_name'        =>  $userData['f_name'],
                    'last_name'         =>  $userData['l_name'],
                    'username'          =>  $userData['username'],
                    'street_address_1'  =>  $cardData['address'],
                    'mobile_number'     =>  $cardData['phone'],
                    'emergency_contact' =>  $cardData['emergency_contact'],
                    'nid_number'        =>  $userData['nid'],
                    'email'             =>  $userData['email'],
                    'pin_code'          =>  $cardData['postal_code'],
                    'city'              =>  $cardData['city'],
                    'password'          =>  Hash::make($userData['password']),
                ]);

                $user->roles()->sync([2]);
            }


            // SUCCESSFUL
            return back()->with('success_message', 'Thank you! Your payment has been accepted.');
        } catch (CardErrorException $e) {
            // save info to database for failed
            return back()->withErrors('Error! ' . $e->getMessage());
        }
//        return response(['user' => $userData['f_name'], 'plan' => $planDetails, 'card' => $cardData, 'token'=>$request->stripeToken]);
    }
}
