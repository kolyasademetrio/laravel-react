<?php
/**
 * Created by PhpStorm.
 * User: DIGITAL CONNECT
 * Date: 12.07.2019
 * Time: 18:01
 */

namespace App\Helpers;

use Symfony\Component\Finder\Finder;

class SubfoldersRecursive
{
    public static function get($paths){
        $finder = new Finder;
        foreach ($paths as $path) {
            $finder->in($path);
        }
        $finder->directories();
        $directories = iterator_to_array($finder->getIterator());

        if (count($directories)) {
            return array_keys($directories);
        }

        return $paths;
    }
}