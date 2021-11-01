<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PurchaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'vendor_id'             =>  'required',
            'bill_number'           =>  'required',
            'invoice_number'        =>  '',
            'product_id'            =>  'required',
            'category_id'           =>  'required',
            'brand_id'              =>  'required',
            'unit_id'               =>  'required',
            'purchase'              =>  'required',
            'buy_on'                =>  'required',
            'transport_cost'        =>  '',
            'labour_cost'           =>  '',
            'other_costs'            =>  '',
            'buy_on_cumulative'     =>  'required',
            'overhead'              =>  '',
            'profit_percent'        =>  '',
            'sell_on'               =>  'required',
            'qtn'                   =>  'required|int',
        ];
    }
}
