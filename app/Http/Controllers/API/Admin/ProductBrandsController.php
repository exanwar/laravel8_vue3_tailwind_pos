<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductBrandRequest;
use App\Http\Resources\Admin\ProductBrandResource;
use App\Models\Admin\ProductBrandModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;

class ProductBrandsController extends Controller
{
    private $shop_id;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->shop_id = Auth::user()->shop_id;
            return $next($request);
        });
    }

    public function index(){
        abort_if(Gate::denies('access_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductBrandResource::collection(ProductBrandModel::where('shop_id', $this->shop_id)->paginate(10));

    }

//    public function allBrands(){
//        abort_if(Gate::denies('access_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');
//
//        return ProductBrandResource::collection(ProductBrandModel::where('shop_id', $this->shop_id)->get());
//
//    }

    public function fetchBrand(){
        abort_if(Gate::denies('access_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $categories = ProductBrandModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('slug','LIKE',"%$search%");
                })
                ->get();
        }else{
            $categories = ProductBrandModel::where('shop_id', $this->shop_id)->get();
        }

        return ProductBrandResource::collection($categories);

    }

    public function findBrand(){
        abort_if(Gate::denies('access_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $brand = ProductBrandModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('slug','LIKE',"%$search%");
                })
                ->paginate(10)->withQueryString();
        }

        return ProductBrandResource::collection($brand);
    }

    public function store(ProductBrandRequest $request)
    {
        abort_if(Gate::denies('create_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if($request->brand_logo){
            if(strlen($request->brand_logo) <= 50){
                $imageUrl = $request->brand_logo;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->name)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->brand_logo, 0, strpos($request->brand_logo, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/brands/' . $this->shop_id);
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->brand_logo)->resize(300,300)->save(public_path('uploads/brands/'. $this->shop_id . '/').$image);
                $imageUrl = env('APP_URL') . '/uploads/brands/' . $this->shop_id . '/' . $image;
            }
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }


        return ProductBrandModel::create([
            'title'  =>  $request->name,
            'slug'  =>  Str::slug($request->name),
            'logo'  =>  $imageUrl,
            'shop_id'   =>  $this->shop_id
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('access_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $brand = ProductBrandModel::where('id', $id)->get();
        abort_if($this->shop_id !== $brand[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductBrandResource::collection($brand);
    }

    public function update(ProductBrandRequest $request, $id)
    {
        abort_if(Gate::denies('edit_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $brand = ProductBrandModel::find($id);
        abort_if($this->shop_id !== $brand->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $brand->update([
            'title'  =>  $request->name,
            'slug'   =>  Str::slug($request->name),
            'logo'   =>  $request->brand_logo
        ]);
    }

    public function destroy($id)
    {
        abort_if(Gate::denies('delete_brands'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $brand = ProductBrandModel::find($id);
        abort_if($this->shop_id !== $brand->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $image = substr($brand->logo, strlen(env('APP_URL'))+1);
        $file = public_path('/' . $image);

        if(file_exists($file)){
            unlink($image);
        }

        return $brand->forceDelete();
    }
}
