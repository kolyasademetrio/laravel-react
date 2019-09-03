<?php

namespace App\Filter\Image;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class Small290 implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->fit(290 );
    }
}