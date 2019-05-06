<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockAttachment extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'stock_id', 'thumbnail', 'attachment', 'type', 'use_as_featured', 'created_at', 'updated_at',
    ];
}
