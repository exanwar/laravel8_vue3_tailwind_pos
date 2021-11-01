<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class VendorRequest extends FormRequest
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
            'logo'              =>  'required',
            'name'              =>  'required',
            'address'           =>  'required',
            'via'               =>  'required',
            'via_image'         =>  'required',
            'via_position'      =>  'required',
            'via_phone'         =>  'required',
            'via_email'         =>  'required|email',

        ];
    }
}
