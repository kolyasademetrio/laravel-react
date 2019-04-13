<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductComments extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'content','product_slug','product_id','user_id', 'created_at', 'updated_at','user_name','user_email',
    ];
}