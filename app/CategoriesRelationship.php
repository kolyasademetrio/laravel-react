<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoriesRelationship extends Model
{
    public $timestamps = false;
    protected $table = 'categories_relationship';
    protected $primaryKey = 'id';

    protected $fillable = [
        'object_id', 'category_id',
    ];
}
