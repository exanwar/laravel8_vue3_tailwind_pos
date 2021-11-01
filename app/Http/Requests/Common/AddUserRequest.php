<?php

namespace App\Http\Requests\Common;

use Illuminate\Foundation\Http\FormRequest;

class AddUserRequest extends FormRequest
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
            'avatar'            =>  '',
            'first_name'         =>  'min:4',
            'last_name'         =>  'min:4',
            'username'          =>  'min:6|string|unique:users',
            'street_address_1'  =>  'required|string',
            'street_address_2'  =>  'string',
            'mobile_number'     =>  'required|numeric|digits_between:10,13|unique:users',
            'emergency_contact' =>  'required|numeric|digits_between:10,13',
            'nid_number'        =>  'required|numeric|unique:users',
            'email'             =>  'required|email|unique:users',
            'pin_code'          =>  'required|numeric|digits_between:4,5',
            'city'              =>  'required',
            'password'          =>  'required|min:8',
            'facebook_url'      =>  'string|url|unique:users',
            'twitter_url'       =>  'string|url|unique:users',
            'linkedin_url'      =>  'string|url|unique:users',
            'roles'             =>  'required|numeric'
        ];
    }
}
