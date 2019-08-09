<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StocksRequest extends FormRequest
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
            'title' => 'required|string|min:4|max:100',
            'slug' => [
                'required',
                'string',
                'min:4',
                'max:25',
                'regex:/^[a-z0-9а-яё-]+$/u',
                Rule::unique('stocks')->ignore($this->id),
            ],
            'excerpt' => 'required|string|min:4|max:100',
            'content' => 'max:300',
            'use_as_featured' => '',
            'thumbnail' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'attachment' => '',
            'attachments.*' => 'mimes:jpeg,jpg,png,gif|max:10000',
        ];
    }
}
