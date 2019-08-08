<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockAttachments extends Model
{
    public $timestamps = true;

    protected $table = 'stock_attachments';

    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'stock_id',
        'thumbnail',
        'attachment',
        'type',
        'use_as_featured',
    ];

    protected $casts = [
        'use_as_featured' => 'boolean',
    ];

    protected $guarded = [];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
