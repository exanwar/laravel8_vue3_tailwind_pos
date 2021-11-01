<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class SellResource extends JsonResource
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
            'sell_id'                   => $this->sell_id,
            'bill_id'                   =>  'BI-'. str_pad($this->sell_id, 5, '0', STR_PAD_LEFT),
            'product'                   =>  new ProductResource($this->whenLoaded('product')),
            'category'                  =>  new ProductCategoryResource($this->whenLoaded('category')),
            'unit'                      =>  new ProductUnitResource($this->whenLoaded('unit')),
            'brand'                     =>  new ProductBrandResource($this->whenLoaded('brand')),
            'quantity'                  =>  $this->quantity,
            'sell_on'                   =>  $this->sell_on,
            'customer'                  =>  new CustomerResource($this->whenLoaded('customer')),
        ];
    }
}
