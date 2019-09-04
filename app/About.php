<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    public $timestamps = true;

    protected $table = 'about';

    protected $primaryKey = 'id';

    protected $fillable = [
        'title',
        'content',
    ];

    protected $casts = [];

    protected $guarded = [];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
