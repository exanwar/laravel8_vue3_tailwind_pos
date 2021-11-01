<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'id'                =>  $this->id,
            'enabled'           =>  $this->enabled,
            'sku'               =>  $this->sku,
            'barcode'           =>  $this->barcode,
            'name'              =>  $this->title,
            'slug'              =>  $this->slug,
            'details'           =>  $this->description,
            'product_image'     =>  $this->image,
            'category'          =>  new ProductCategoryResource($this->whenLoaded('category')),
            'unit'              =>  new ProductUnitResource($this->whenLoaded('unit')),
            'brand'             =>  new ProductBrandResource($this->whenLoaded('brand')),
            'purchase'          =>  $this->purchase_price,
            'sell'              =>  $this->selling_price,
            'stock'             =>  $this->stock,
            'sold'             =>  $this->sold
        ];
    }
}
