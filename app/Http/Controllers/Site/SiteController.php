<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Resources\Common\PlanFeatureResource;
use App\Http\Resources\Common\PlanResource;
use App\Models\Dev\PlanFeatureModel;
use App\Models\Dev\PlanModel;
use Illuminate\Support\Facades\Http;

class SiteController extends Controller
{
    public function getPricingWithFeatures(){
        return PlanResource::collection( PlanModel::with('features')->get());
    }
    public function getFeaturesWithPricing(){
        return PlanFeatureResource::collection(PlanFeatureModel::with('pricing')->get());
    }
    public function getFeatures(){
        return PlanFeatureResource::collection(PlanFeatureModel::all());
    }

    public function test(){
        $response = Http::get('https://source.unsplash.com/random');
        $result = $response;
        $picture = $result;

        return response(['pic'  =>  $picture]);
    }
}
