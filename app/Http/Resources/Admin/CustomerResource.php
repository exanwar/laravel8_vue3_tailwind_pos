<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
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
            'name'          =>  $this->name,
            'image'         =>  $this->image,
            'email_address' =>  $this->email,
            'phone'         =>  $this->phone_number,
            'address'       =>  $this->address,
            'sells'         =>  $this->whenLoaded('sells', function() {
                                    return $this->sells->count();
                                }),
        ];
    }
}
