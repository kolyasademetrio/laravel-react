<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductsCategoriesRequest extends FormRequest
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
            'category_name' => 'required|string|min:4|max:25',
            'category_slug' => 'required|string|min:4|max:25',
        ];
    }
}
