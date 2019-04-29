<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Videotips extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'image', 'video', 'slug',
    ];
}
