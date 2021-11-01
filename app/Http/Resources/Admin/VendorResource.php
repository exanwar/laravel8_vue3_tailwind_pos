<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class VendorResource extends JsonResource
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
            'logo'            =>  $this->company_logo,
            'name'          =>  $this->company_name,
            'address'       =>  $this->company_address,
            'via'           =>  $this->contact_person_name,
            'via_image'     =>  $this->contact_person_image,
            'via_position'  =>  $this->contact_person_position,
            'via_phone'     =>  $this->contact_person_phone,
            'via_email'     =>  $this->contact_person_email,
        ];
    }
}
