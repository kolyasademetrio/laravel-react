<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currencies extends Model
{
    public $timestamps = true;
    protected $table = 'currencies';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 'shortname', 'symbol', 'symbol_first', 'decimal_mark', 'thousands_separator',
    ];

    protected $dates = [
        'created_at', 'updated_at',
    ];
}
