<?php

namespace App\Http\Requests\Dev;

use Illuminate\Foundation\Http\FormRequest;

class PlanRequest extends FormRequest
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
            'package_title'     =>  'required|min:4|max:20|string',
            'per_month'         =>  'required|numeric',
            'per_year'         =>  'required|numeric',
            'offer'             =>  'numeric',
        ];
    }
}
