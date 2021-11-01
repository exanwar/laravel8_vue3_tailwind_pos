<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductUnitRequest;
use App\Http\Resources\Admin\ProductUnitResource;
use App\Models\Admin\ProductUnitModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class ProductUnitsController extends Controller
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
        abort_if(Gate::denies('access_units'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductUnitResource::collection(ProductUnitModel::where('shop_id', $this->shop_id)->paginate(10));

    }

//    public function allUnits(){
//        abort_if(Gate::denies('product_unit_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');
//
//        return ProductUnitResource::collection(ProductUnitModel::where('shop_id', $this->shop_id)->get());
//
//    }

    public function findUnit(){
        abort_if(Gate::denies('access_units'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $units = ProductUnitModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('short_title','LIKE',"%$search%");
                })
                ->paginate(10)->withQueryString();
        }

        return ProductUnitResource::collection($units);
    }

    public function fetchUnit(){
        abort_if(Gate::denies('access_units'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $units = ProductUnitModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('title','LIKE',"%$search%")
                        ->orWhere('short_title','LIKE',"%$search%");
                })
                ->get();
        }else{
            $units = ProductUnitModel::where('shop_id', $this->shop_id)->get();
        }

        return ProductUnitResource::collection($units);
    }

    public function store(ProductUnitRequest $request)
    {
        abort_if(Gate::denies('create_units'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductUnitModel::create([
            'title'  =>  $request->name,
            'short_title'  =>  $request->symbol,
            'shop_id'   =>  $this->shop_id
        ]);
    }

    public function show($id)
    {
        abort_if(Gate::denies('access_units'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $unit = ProductUnitModel::where('id', $id)->get();
        abort_if($this->shop_id !== $unit[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return ProductUnitResource::collection($unit);
    }

    public function update(ProductUnitRequest $request, $id)
    {
        abort_if(Gate::denies('edit_units'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $unit = ProductUnitModel::find($id);
        abort_if($this->shop_id !== $unit->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $unit->update([
            'title'  =>  $request->name,
            'short_title'   =>  $request->symbol
        ]);
    }

    public function destroy($id)
    {
        abort_if(Gate::denies('delete_units'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $unit = ProductUnitModel::find($id);
        abort_if($this->shop_id !== $unit->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $unit->forceDelete();
    }
}
