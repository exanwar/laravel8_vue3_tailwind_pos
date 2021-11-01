<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ShopRequest;
use App\Models\Admin\Shop;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(ShopRequest $request)
    {
        abort_if(auth()->user()->shop_id !== null, Response::HTTP_FORBIDDEN, '403 Forbidden');
        $shopExist = Shop::where('owner_id', auth()->user()->id)->get()->count();
        abort_if($shopExist > 0, Response::HTTP_FORBIDDEN, '403 Forbidden');
        $data = $request->validated();

        if($data['avatar']){
            $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', $data['name']))), 0, 10);
            $imgExt = explode('/', explode(':', substr($data['avatar'], 0, strpos($data['avatar'], ';')))[1])[1];
            $image = $imageName.'.'.$imgExt;
            $path = public_path('uploads/shop');
            if(!File::isDirectory($path)){
                File::makeDirectory($path, 0777, true, true);
            }
            Image::make($data['avatar'])->resize(300,300)->save(public_path('uploads/shop/').$image);
            $imageUrl = env('APP_URL') . '/uploads/shop/' . $image;
        }else{
            $imageUrl = 'https://img.freepik.com/free-vector/online-shopping-logo-design-template_130382-9.jpg?size=338&ext=jpg';
        }

         $shop = Shop::create([
            'owner_id'      =>  auth()->user()->id,
            'logo'          =>  $imageUrl,
            'name'          =>  $data['name'],
            'shop_no'       =>  $data['shop'],
            'road_no'       =>  $data['road'],
            'area_name'     =>  $data['area'],
            'city'          =>  $data['city'],
            'district'      =>  $data['dist'],
            'division'      =>  $data['div'],
            'zip'           =>  $data['postCode'],
            'tax'           =>  $data['tax'],
        ]);

        return User::find(auth()->user()->id)->update([
            'shop_id'   =>  $shop->id
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
