<?php

namespace App\Helpers;


use Illuminate\Http\Request;

class ImageDNK
{
    public static function save (Request $request, string $name) {
        if($request->hasfile($name)){
            $image = $request->file($name);
            $imageExtension = $image->extension();
            $imageName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);

            $year = date('Y');
            $month = date('m');

            $relativPath = 'uploads/'.$year.'/'.$month;
            $newImageName = time().'_'.$imageName.'.'.$imageExtension;
            $relPathWithFileName = '/'.$relativPath . '/' . $newImageName;

            if(!$image->move(public_path($relativPath), $newImageName)){
                return back()->with('error', 'При сохранении изображения произошла ошибка. Попробуйте ещё раз.');
            }

            return $relPathWithFileName;
        }
    }
}