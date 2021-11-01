<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ShopRequest extends FormRequest
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
            'avatar'    =>  'string',
            'name'      =>  'string',
            'shop'      =>  'string',
            'road'      =>  'string',
            'area'      =>  'string',
            'city'      =>  'string',
            'dist'      =>  'string',
            'div'       =>  'string',
            'postCode'  =>  'numeric',
            'tax'       =>  'numeric',
        ];
    }
}
