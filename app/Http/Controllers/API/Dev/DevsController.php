<?php

namespace App\Http\Controllers\API\Dev;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\AddUserRequest;
use App\Http\Resources\Dev\DevResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;
use function PHPUnit\Framework\matches;

class DevsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $devs = User::wherehas('roles', function($query){
            $query->where('title', 'Developer');
        })->with('roles')->paginate(10);
        return DevResource::collection($devs);
    }

    public function findDeveloper() {
        if ($search = \Request::get('q')) {
            $devs = User::with('roles')
                ->orderBy('id')
                ->wherehas('roles', function($query){
                    $query->where('title', 'Developer');
                })
                ->where(function($query) use ($search){
                    $query->where('email','LIKE',"%$search%")
                        ->orWhere('username','LIKE',"%$search%")
                        ->orWhere('first_name','LIKE',"%$search%")
                        ->orWhere('last_name','LIKE',"%$search%");
                })
                ->paginate(1)->withQueryString($search);
        }

        return DevResource::collection($devs);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddUserRequest $request)
    {
        $data = $request->validated();

        if($data['avatar']){
            $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', $data['username']))), 0, 10);
            $imgExt = explode('/', explode(':', substr($data['avatar'], 0, strpos($data['avatar'], ';')))[1])[1];
            $image = $imageName.'.'.$imgExt;
            $path = public_path('uploads/avatar');
            if(!File::isDirectory($path)){
                File::makeDirectory($path, 0777, true, true);
            }
            Image::make($data['avatar'])->resize(300,300)->save(public_path('uploads/avatar/').$image);
            $imageUrl = env('APP_URL') . '/uploads/avatar/' . $image;
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }

        $user = User::create([
            'shop_owner'        => false,
            'profile_picture'   =>  $imageUrl,
            'first_name'        =>  $data['first_name'],
            'last_name'         =>  $data['last_name'],
            'username'          =>  $data['username'],
            'street_address_1'  =>  $data['street_address_1'],
            'street_address_2'  =>  $data['street_address_2'],
            'mobile_number'     =>  $data['mobile_number'],
            'emergency_contact' =>  $data['emergency_contact'],
            'nid_number'        =>  $data['nid_number'],
            'email'             =>  $data['email'],
            'pin_code'          =>  $data['pin_code'],
            'city'              =>  $data['city'],
            'password'          =>  Hash::make($data['password']),
            'facebook_url'      =>  $data['facebook_url'],
            'twitter_url'       =>  $data['twitter_url'],
            'linkedin_url'      =>  $data['linkedin_url']
        ]);

        return $user->roles()->sync($request->input('roles', []));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $dev = User::with('roles')->where('id', $id)->get();
//        abort_if($this->shop_id !== $user[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return DevResource::collection($dev);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $request->validate([
            'first_name'        =>  'min:4',
            'last_name'         =>  'min:4',
            'street_address_1'  =>  'required|string',
            'street_address_2'  =>  'string',
            'mobile_number'     =>  ['required','numeric','digits_between:11,13','unique:users,mobile_number,'.$id],
            'emergency_contact' =>  'required|numeric|digits_between:11,13',
            'nid_number'        =>  'required|numeric|unique:users,nid_number,'.$id,
            'pin_code'          =>  'required|numeric|digits_between:4,4',
            'city'              =>  'required',
            'facebook_url'      =>  'string|url|unique:users,facebook_url,'.$id,
            'twitter_url'       =>  'string|url|unique:users,twitter_url,'.$id,
            'linkedin_url'      =>  'string|url|unique:users,linkedin_url,'.$id,
            'roles'             =>  'required|numeric'
        ]);

        $data = $request->all();

        $user->update([
            'first_name'        =>  $data['first_name'],
            'last_name'         =>  $data['last_name'],
            'street_address_1'  =>  $data['street_address_1'],
            'street_address_2'  =>  $data['street_address_2'],
            'mobile_number'     =>  $data['mobile_number'],
            'emergency_contact' =>  $data['emergency_contact'],
            'nid_number'        =>  $data['nid_number'],
            'pin_code'          =>  $data['pin_code'],
            'city'              =>  $data['city'],
            'facebook_url'      =>  $data['facebook_url'],
            'twitter_url'       =>  $data['twitter_url'],
            'linkedin_url'      =>  $data['linkedin_url']
        ]);

        return $user->roles()->sync($request->input('roles', []));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $dev = User::find($id);
        if($dev->id !== auth()->user()->id){
            return $dev->forceDelete();
        }else {
            return response()->json([
                'message' => 'You cant not delete yourself'
            ], 404);
        }
    }
}
