<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Products extends Authenticatable
{
    use Notifiable;

    public $timestamps = true;
    protected $table = 'products';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'title',
        'slug',
        'excerpt',
        'content',
        'descrtitle',
        'descrtext',
        'descr',
        'regular_price',
        'sale_price',
        'discount',
        'currency',
        'image',
        'is_reccomended',
        'product_description_tab_content',
        'product_ingredients_tab_content',
        'product_usage_tab_content',
        'tab_bg',
    ];

    protected $guarded = [];

    protected $dates = [
        'created_at',
        'updated_at',
    ];


}
