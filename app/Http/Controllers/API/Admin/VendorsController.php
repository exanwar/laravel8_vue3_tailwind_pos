<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\VendorRequest;
use App\Http\Resources\Admin\VendorResource;
use App\Models\Admin\VendorModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;

class VendorsController extends Controller
{
    private $shop_id;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->shop_id = Auth::user()->shop_id;
            return $next($request);
        });
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort_if(Gate::denies('access_vendors'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $vendors = VendorModel::where('shop_id', $this->shop_id)->paginate(10);
        return VendorResource::collection($vendors);
    }

//    public function allVendors()
//    {
//        abort_if(Gate::denies('product_brand_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');
//
//        $vendors = VendorModel::where('shop_id', $this->shop_id)->get();
//        return VendorResource::collection($vendors);
//    }

    public function findVendor() {
        abort_if(Gate::denies('access_vendors'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $vendors = VendorModel::where('shop_id', $this->shop_id)->orderBy('id', 'desc')->where(function($query) use ($search){
                $query->where('company_name','LIKE',"%$search%")
                    ->orWhere('company_address','LIKE',"%$search%")
                    ->orWhere('contact_person_name', 'LIKE', "%$search%")
                    ->orWhere('contact_person_email', 'LIKE', "%$search%")
                    ->orWhere('contact_person_phone', 'LIKE', "%$search%")
                ;
            })->paginate(10)->withQueryString();
        }

        return VendorResource::collection($vendors);
    }

    public function fetchVendor(){
        abort_if(Gate::denies('access_vendors'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $categories = VendorModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('company_name','LIKE',"%$search%")
                        ->orWhere('company_address','LIKE',"%$search%")
                        ->orWhere('contact_person_name', 'LIKE', "%$search%")
                        ->orWhere('contact_person_email', 'LIKE', "%$search%")
                        ->orWhere('contact_person_phone', 'LIKE', "%$search%")
                    ;
                })
                ->get();
        }else{
            $categories = VendorModel::where('shop_id', $this->shop_id)->get();
        }

        return VendorResource::collection($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VendorRequest $request)
    {
        abort_if(Gate::denies('create_vendors'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if($request->logo){
            if(strlen($request->logo) <= 50){
                $logoUrl = $request->logo;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->name)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->logo, 0, strpos($request->logo, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/vendors/'.$this->shop_id . '/company');
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->logo)->resize(300,300)->save(public_path('uploads/vendors/'. $this->shop_id .'/company/').$image);
                $logoUrl = env('APP_URL') . '/uploads/vendors/'. $this->shop_id .'/company/' . $image;
            }
        }else{
            $logoUrl = env('APP_URL') . '/uploads/vendors/company/default.jpg';
        }


        if($request->via_image){
            if(strlen($request->via_image) <= 50){
                $imageUrl = $request->via_image;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->via)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->via_image, 0, strpos($request->via_image, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/vendors/'.$this->shop_id . '/via');
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->via_image)->resize(300,300)->save(public_path('uploads/vendors/'. $this->shop_id .'/via/').$image);
                $imageUrl = env('APP_URL') . '/uploads/vendors/'. $this->shop_id .'/via/' . $image;
            }
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }

        return VendorModel::create([
            'company_logo'  =>  $logoUrl,
            'company_name'  =>  $request->name,
            'company_address'   =>  $request->address,
            'contact_person_image'   =>  $imageUrl,
            'contact_person_name'   =>  $request->via,
            'contact_person_position'   =>  $request->via_position,
            'contact_person_phone'   =>  $request->via_phone,
            'contact_person_email'   =>  $request->via_email,
            'shop_id'   =>  $this->shop_id
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
        abort_if(Gate::denies('access_vendors'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $vendor = VendorModel::where('id', $id)->get();
        abort_if($this->shop_id !== $vendor[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return VendorResource::collection($vendor);
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
    public function update(VendorRequest $request, $id)
    {
        abort_if(Gate::denies('edit_vendors'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $vendor = VendorModel::find($id);
        abort_if($this->shop_id !== $vendor[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        if($request->logo){
            if(strlen($request->logo) <= 100){
                $logoUrl = $request->logo;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->name)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->logo, 0, strpos($request->logo, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/vendors/'.$this->shop_id . '/company');
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->logo)->resize(300,300)->save(public_path('uploads/vendors/'. $this->shop_id .'/company/').$image);
                $logoUrl = env('APP_URL') . '/uploads/vendors/'. $this->shop_id .'/company/' . $image;
            }
        }else{
            $logoUrl = env('APP_URL') . '/uploads/vendors/company/default.jpg';
        }


        if($request->via_image){
            if(strlen($request->via_image) <= 100){
                $imageUrl = $request->via_image;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->via)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->via_image, 0, strpos($request->via_image, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/vendors/'.$this->shop_id . '/via');
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->via_image)->resize(300,300)->save(public_path('uploads/vendors/'. $this->shop_id .'/via/').$image);
                $imageUrl = env('APP_URL') . '/uploads/vendors/'. $this->shop_id .'/via/' . $image;
            }
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }

        return $vendor->update([
            'company_logo'  =>  $logoUrl,
            'company_name'  =>  $request->name,
            'company_address'   =>  $request->address,
            'contact_person_image'   =>  $imageUrl,
            'contact_person_name'   =>  $request->via,
            'contact_person_position'   =>  $request->via_position,
            'contact_person_phone'   =>  $request->via_phone,
            'contact_person_email'   =>  $request->via_email
        ]);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        abort_if(Gate::denies('delete_vendors'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $vendor = VendorModel::find($id);
        abort_if($this->shop_id !== $vendor->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $company_image = substr($vendor->company_logo, strlen(env('APP_URL'))+1);
        $file_one = public_path('/' . $company_image);
        if(file_exists($file_one)){
            unlink($company_image);
        }

        $via_image = substr($vendor->contact_person_image, strlen(env('APP_URL'))+1);
        $file_two = public_path('/' . $via_image);
        if(file_exists($file_two)){
            unlink($via_image);
        }

        return $vendor->forceDelete();
    }
}
