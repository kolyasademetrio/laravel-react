<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doyouknows extends Model
{
    public $timestamps = true;

    protected $table = 'doyouknows';

    protected $primaryKey = 'id';

    protected $fillable = [
        'slug',
        'title',
        'excerpt',
        'content',
    ];

    protected $casts = [];

    protected $guarded = [];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
