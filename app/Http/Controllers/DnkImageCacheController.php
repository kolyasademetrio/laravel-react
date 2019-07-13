<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageCacheController;
use Symfony\Component\Finder\Finder;

class DnkImageCacheController extends ImageCacheController
{
    public function __call($name, $arguments)
    {
        if ($name == "getImagePath") {
            $filename = $arguments[0];

            //код приватного метода
            // find file
            $finder = new Finder;
            foreach (config('imagecache.paths') as $path) {
                // don't allow '..' in filenames
                $image_path = $path.'/'.str_replace('..', '', $filename);
                if (file_exists($image_path) && is_file($image_path)) {
                    // file found
                    return $image_path;
                }
                $finder->in($path);
            }
            $finder->files()->name($filename);
            $files = iterator_to_array($finder->getIterator());
            if (count($files)) {
                return array_keys($files)[0];
            }
            // file not found
            abort(404);
            return abort(404);
        }
    }
}