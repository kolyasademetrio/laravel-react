<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductsRequest extends FormRequest
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
            'slug' => [
                'required',
                'string',
                'min:4',
                'max:35',
                'regex:/^[a-z0-9а-яё-]+$/u',
                Rule::unique('products')->ignore($this->id),
                //'unique:products',

            ],
            'excerpt' => 'required|string|min:4|max:100',
            'content' => 'max:300',
            'descr' => 'max:300',
            'descrtitle' => 'required|string|min:4|max:100',
            'descrtext' => 'required|string|min:4|max:300',
            'regular_price' => [
                'required',
                'regex:/\d+/',
            ],
            'sale_price' => '',
            'discount' => [
                'required',
                'min:0',
                'max:100',
                'regex:/^\d+(\.\d{1,2})?$/',
            ],
            'currency' => 'string',
            'image' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'tab_bg' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'attachment.*' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'attachment_preview' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'attachment_video' => '',
            'product_description_tab_content' => 'max:10000',
            'product_ingredients_tab_content' => 'max:10000',
            'product_usage_tab_content' => 'max:10000',
            'is_reccomended' => '',
        ];
    }
}
