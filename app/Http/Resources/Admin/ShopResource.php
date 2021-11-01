<?php

namespace App\Http\Resources\Admin;

use App\Http\Resources\Common\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'id'    => $this->id,
            'name' => $this->name,
            'owner' => UserResource::collection($this->whenLoaded('owner')),
            'logo'  => $this->logo,
            'shop_no'   => $this->shop_no,
            'road_no'   => $this->road_no,
            'area_name' => $this->area_name,
            'city'  => $this->city,
            'dist'  =>  $this->district,
            'division'  => $this->division,
            'zip'   => $this->division,
            'tax'   =>  $this->tax
        ];
    }
}
