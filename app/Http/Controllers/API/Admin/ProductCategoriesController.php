<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductCategoryRequest;
use App\Http\Resources\Admin\ProductCategoryResource;
use App\Models\Admin\ProductCategoryModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class ProductCategoriesController extends Controller
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
        abort_if(Gate::denies('access_categories'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductCategoryResource::collection(ProductCategoryModel::where('shop_id', $this->shop_id)->paginate(10));

    }

//    public function allCategories(){
//        abort_if(Gate::denies('product_category_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');
//
//        return ProductCategoryResource::collection(ProductCategoryModel::where('shop_id', $this->shop_id)->get());
//
//    }

    public function fetchCategory(){
        abort_if(Gate::denies('access_categories'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $categories = ProductCategoryModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('slug','LIKE',"%$search%");
                })
                ->get();
        }else{
            $categories = ProductCategoryModel::where('shop_id', $this->shop_id)->get();
        }

        return ProductCategoryResource::collection($categories);

    }

    public function findCategory(){
        abort_if(Gate::denies('access_categories'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $categories = ProductCategoryModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('slug','LIKE',"%$search%");
                })
                ->paginate(10)->withQueryString();
        }

        return ProductCategoryResource::collection($categories);
    }

    public function store(ProductCategoryRequest $request)
    {
        abort_if(Gate::denies('create_categories'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductCategoryModel::create([
            'title'  =>  $request->category,
            'slug'  =>  Str::slug($request->category),
            'shop_id'   =>  $this->shop_id
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('access_categories'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $category = ProductCategoryModel::where('id', $id)->get();
        abort_if($this->shop_id !== $category[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductCategoryResource::collection($category);
    }

    public function update(ProductCategoryRequest $request, $id)
    {
        abort_if(Gate::denies('edit_categories'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $category = ProductCategoryModel::find($id);
        abort_if($this->shop_id !== $category->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $category->update([
            'title'  =>  $request->category,
            'slug'   =>  Str::slug($request->category)
        ]);
    }

    public function destroy($id)
    {
        abort_if(Gate::denies('delete_categories'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $category = ProductCategoryModel::find($id);
        abort_if($this->shop_id !== $category->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $category->forceDelete();
    }
}
