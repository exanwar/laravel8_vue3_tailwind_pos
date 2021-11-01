<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseResource extends JsonResource
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
            'id'                        =>  $this->id,
            'vendor_id'                 =>  $this->vendor_id,
            'shop_id'                   =>  $this->shop_id,
            'bill_id'                   =>  $this->bill_number,
            'invoice_id'                =>  $this->invoice_number,
            'purchase_price_total'      =>  $this->purchase,
            'purchase_price_per_unit'   =>  $this->buy_on,
            'transport_cost'            =>  $this->transportation_cost,
            'labour_cost'               =>  $this->labour_cost,
            'other_costs'                => $this->other_cost,
            'overhead_price'            =>  $this->overhead,
            'purchase_price'            =>  $this->buy_on_cumulative,
            'profit_in_percent'         =>  $this->profit_percent,
            'selling_price'             =>  $this->sell_on,
            'product_quantity'          =>  $this->qtn,
            'product'                   =>  new ProductResource($this->whenLoaded('product')),
            'category'                  =>  new ProductCategoryResource($this->whenLoaded('category')),
            'unit'                      =>  new ProductUnitResource($this->whenLoaded('unit')),
            'brand'                     =>  new ProductBrandResource($this->whenLoaded('brand')),
            'vendor'                    =>  new VendorResource($this->whenLoaded('vendor')),
        ];
    }
}
