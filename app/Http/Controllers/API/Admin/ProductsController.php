<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Http\Resources\Admin\ProductResource;
use App\Models\Admin\ProductModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;

class ProductsController extends Controller
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
        abort_if(Gate::denies('access_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product = ProductModel::with('lots', 'category', 'unit', 'brand')->where('shop_id', $this->shop_id)->get();
        return ProductResource::collection($product);
    }


    public function filterProduct() {
        abort_if(Gate::denies('access_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $products = ProductModel::with('category', 'unit', 'brand')
            ->withFilters()
            ->orderBy('id', 'desc')
            ->where('shop_id', $this->shop_id)
            ->paginate(9);
        return ProductResource::collection($products);
    }


    public function findProduct() {
        abort_if(Gate::denies('access_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $product = ProductModel::with('category', 'unit', 'brand')->withFilters()->where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('sku','LIKE',"%$search%")
                        ->orWhere('barcode','LIKE',"%$search%")
                    ;
                })
                ->paginate(10)->withQueryString();
        }

        return ProductResource::collection($product);
    }

    public function fetchProduct(){
        abort_if(Gate::denies('access_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $categories = ProductModel::with('category', 'unit', 'brand')->where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('sku','LIKE',"%$search%")
                        ->orWhere('barcode','LIKE',"%$search%")
                    ;
                })
                ->get();
        }else{
            $categories = ProductModel::where('shop_id', $this->shop_id)->get();
        }

        return ProductResource::collection($categories);
    }


    public function store(ProductRequest $request)
    {
        abort_if(Gate::denies('create_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if($request->product_image){
            if(strlen($request->product_image) <= 100){
                $imageUrl = $request->product_image;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->name)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->product_image, 0, strpos($request->product_image, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/products/' . $this->shop_id);
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->product_image)->resize(300,300)->save(public_path('uploads/products/' . $this->shop_id. '/').$image);
                $imageUrl = env('APP_URL') . '/uploads/products/'.$this->shop_id.'/'. $image;
            }
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }

        return ProductModel::create([
            'title'  =>  $request->name,
            'slug'  =>  Str::slug($request->name),
            'image'  =>  $imageUrl,
            'description'   =>  $request->details,
            'shop_id'   =>  $this->shop_id,
            'category_id'   =>  $request->category,
            'unit_id'   =>  $request->unit,
            'brand_id'   =>  $request->brand,
            'sku'       =>  $request->sku,
            'barcode'   =>  $request->barcode,
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('access_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product = ProductModel::with('category', 'unit', 'brand')->where('id', $id)->get();
        abort_if($this->shop_id !== $product[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductResource::collection($product);
    }

    public function update(Request $request, $id)
    {
        abort_if(Gate::denies('edit_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product = ProductModel::find($id);
        abort_if($this->shop_id !== $product->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $request->validate([
            'name'              =>  'required',
            'details'           =>  'required',
            'product_image'     =>  'required',
            'category'          =>  'required|int',
            'unit'              =>  'required|int',
            'brand'             =>  'required|int',
            'sku'   =>  'unique:products,sku,'.$id,
            'barcode'   =>  'unique:products,barcode,'.$id
        ]);


        if(strlen($request->product_image) <= 100){
            $imageUrl = $request->product_image;
        }else{
            $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->name)))), 0, 10);
            $imgExt = explode('/', explode(':', substr($request->product_image, 0, strpos($request->product_image, ';')))[1])[1];
            $image = $imageName.'.'.$imgExt;
            $path = public_path('uploads/products/' . $this->shop_id);
            if(!File::isDirectory($path)){
                File::makeDirectory($path, 0777, true, true);
            }
            Image::make($request->product_image)->resize(300,300)->save(public_path('uploads/products/' . $this->shop_id. '/').$image);
            $imageUrl = env('APP_URL') . '/uploads/products/'.$this->shop_id.'/'. $image;
        }

        return $product->update([
            'title'  =>  $request->name,
            'slug'  =>  Str::slug($request->name),
            'image'  =>  $imageUrl,
            'description'   =>  $request->details,
            'category_id'   =>  $request->category,
            'unit_id'   =>  $request->unit,
            'brand_id'   =>  $request->brand,
            'sku'       =>  $request->sku,
            'barcode'   =>  $request->barcode,
        ]);
    }

    public function destroy($id)
    {
        abort_if(Gate::denies('delete_products'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product = ProductModel::find($id);
        abort_if($this->shop_id !== $product->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product_image = substr($product->image, strlen(env('APP_URL'))+1);
        $file = public_path('/' . $product_image);
        if(file_exists($file)){
            unlink($product_image);
        }

        return $product->forceDelete();
    }
}
