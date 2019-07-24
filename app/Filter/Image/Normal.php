<?php

namespace App\Filter\Image;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class Normal implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->fit(540 );
    }
}