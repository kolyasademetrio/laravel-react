<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductsUpdateRequest extends FormRequest
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
            'title' => 'required|string|min:4|max:25',
            'slug' => array(
                'required',
                'string',
                'min:4',
                'max:25',
                'regex:/^[a-z0-9а-яё-]+$/u',
                //'unique:products',
                Rule::unique('products')->ignore($this->id),

            ),
            'excerpt' => 'required|string|min:4|max:100',
            'content' => 'required|string|min:4|max:300',
            'descrtitle' => 'required|string|min:4|max:100',
            'descrtext' => 'required|string|min:4|max:300',
            'descr' => 'required|string|min:4|max:300',
            'regular_price' => array(
                'required',
                'regex:/\d+/',
            ),
            'discount' => array(
                'required',
                'min:0',
                'max:100',
                'regex:/^\d+(\.\d{1,2})?$/',
            ),
            'image' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'tab_bg' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'product_description_tab_content' => 'string|max:10000',
            'product_ingredients_tab_content' => 'string|max:10000',
            'product_usage_tab_content' => 'string|max:10000',
            'is_reccomended' => '',
        ];
    }
}
