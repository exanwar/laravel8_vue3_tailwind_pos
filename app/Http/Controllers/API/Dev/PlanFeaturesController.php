<?php

namespace App\Http\Controllers\API\Dev;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dev\PlanFeatureRequest;
use App\Http\Resources\Common\PlanFeatureResource;
use App\Models\Dev\PlanFeatureModel;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PlanFeaturesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PlanFeatureResource::collection(PlanFeatureModel::all());
    }


    /**
     * Display a listing of the resource with relationship.
     *
     * @return \Illuminate\Http\Response
     */
    public function featureWithPackage(){
        return PlanFeatureResource::collection(PlanFeatureModel::with('plan')->get());
    }

    public function findFeature() {
        if ($search = \Request::get('q')) {
            $feature = PlanFeatureModel::where(function($query) use ($search){
                $query->where('name','LIKE',"%$search%")
                    ->orWhere('slug','LIKE',"%$search%");
            })
                ->get();
        }

        return PlanFeatureResource::collection($feature);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlanFeatureRequest $request)
    {
        return PlanFeatureModel::create([
            'name'  =>  $request->title,
            'slug'  =>  Str::slug($request->title)
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
        $feature = PlanFeatureModel::where('id', $id)->get();
        return PlanFeatureResource::collection($feature);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PlanFeatureRequest $request, $id)
    {
        $feature = PlanFeatureModel::find($id);
        return $feature->update([
            'name'  =>  $request->title,
            'slug'  =>  Str::slug($request->title)
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
        $feature = PlanFeatureModel::find($id);
        return $feature->forceDelete();
    }
}
