<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DoyouknowAttachment extends Model
{
    public $timestamps = true;

    protected $table = 'doyouknow_attachments';

    protected $primaryKey = 'id';

    protected $fillable = [
        'doyouknow_id',
        'type',
        'attachment',
        'thumbnail',
        'use_as_featured',
    ];

    protected $casts = [
        'use_as_featured',
    ];

    protected $guarded = [];

    protected $dates = [
        'created_at',
        'updated_at',
    ];
}
