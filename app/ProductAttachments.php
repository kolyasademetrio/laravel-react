<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductAttachments extends Model
{
    public $timestamps = true;
    protected $table = 'product_attachments';
    protected $primaryKey = 'id';

    protected $fillable = [
        'product_slug',
        'product_id',
        'attachment',
        'type',
    ];

    protected $casts = [];

    protected $guarded = [];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
