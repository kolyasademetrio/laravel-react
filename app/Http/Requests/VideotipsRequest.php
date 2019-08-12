<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VideotipsRequest extends FormRequest
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
                'max:35',
                'regex:/^[a-z0-9а-яё-]+$/u',
                Rule::unique('videotips')->ignore($this->id),
            ],
            'show_on_homepage' => '',
            'image' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'video' => '',
        ];
    }
}
