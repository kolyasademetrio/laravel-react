<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stocks extends Model
{
    public $timestamps = true;

    protected $table = 'stocks';

    protected $primaryKey = 'id';

    protected $fillable = [
        'slug', 'title', 'excerpt', 'content',
    ];

    protected $casts = [];

    protected $guarded = [];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
