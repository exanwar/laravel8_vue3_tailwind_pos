<?php

namespace App\Http\Resources\Common;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'            =>  $this->id,
            'pricingName'   =>  $this->name,
            'pricingSlug'   =>  $this->slug,
            'monthly'       =>  $this->monthlyPrice,
            'offer'         =>  $this->discount,
            'yearly'        =>  $this->yearlyPrice,
            'features'      =>  PlanFeatureResource::collection($this->whenLoaded('features'))
        ];
    }
}
