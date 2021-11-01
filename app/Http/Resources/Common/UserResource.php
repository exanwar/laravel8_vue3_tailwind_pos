<?php

namespace App\Http\Resources\Common;

use App\Http\Resources\Admin\ShopResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'id'    =>  $this->id,
            'avatar' =>  $this->profile_picture,
            'f_name' =>  $this->first_name,
            'l_name' =>  $this->last_name,
            'username' =>  $this->username,
            'address_1' =>  $this->street_address_1,
            'address_2' =>  $this->street_address_2,
            'phone' =>  $this->mobile_number,
            'e_phone' =>  $this->emergency_contact,
            'nid' =>  $this->nid_number,
            'email' =>  $this->email,
            'zip' =>  $this->pin_code,
            'city' =>  $this->city,
            'fb' =>  $this->facebook_url,
            'twitter' =>  $this->twitter_url,
            'linkedin' =>  $this->linkedin_url,
            'join_date' =>  $this->created_at,
            'shop'  =>  ShopResource::collection($this->whenLoaded('shop')),
            'roles' =>  RoleResource::collection($this->whenLoaded('roles')),
        ];
    }
}
