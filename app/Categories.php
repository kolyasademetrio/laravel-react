<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    public $timestamps = true;
    protected $table = "categories";
    protected $primaryKey = "category_id";

    protected $fillable = [
        'category_name', 'category_slug', 'category_filter_by', 'show_on_homepage',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'email_verified_at'
    ];
}
