<?php

namespace App\Http\Controllers\API\Dev;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dev\PlanRequest;
use App\Http\Resources\Common\PlanResource;
use App\Models\Dev\PlanModel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PlansController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PlanResource::collection( PlanModel::with('features')->get());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlanRequest $request)
    {
        $package = PlanModel::create([
            'name'   =>  $request->package_title,
            'slug'   =>  Str::slug($request->package_title),
            'monthlyPrice'  =>  $request->per_month,
            'yearlyPrice'   =>  $request->per_year,
            'discount'      =>  $request->offer
        ]);

        return $package->features()->sync($request->input('features', []));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return PlanResource::collection(PlanModel::with('features')->where('id', $id)->get());
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PlanRequest $request, $id)
    {
        $package = PlanModel::find($id);
        $package->update([
            'name'   =>  $request->package_title,
            'slug'   =>  Str::slug($request->package_title),
            'monthlyPrice'  =>  $request->per_month,
            'yearlyPrice'   =>  $request->per_year,
            'discount'      =>  $request->offer
        ]);

        return $package->features()->sync($request->input('features', []));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $package = PlanModel::find($id);
        return $package->forceDelete();
    }
}
