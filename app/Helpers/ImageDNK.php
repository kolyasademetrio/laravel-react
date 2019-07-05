<?php

namespace App\Helpers;


use Illuminate\Http\Request;
use Image;

class ImageDNK
{
    public static function save (Request $request, string $name) {
        if($request->hasfile($name)){
            $image = $request->file($name);
            $imageExtension = $image->extension();
            $imageName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);

            $year = date('Y');
            $month = date('m');
            $day = date('d');
            $time = time();

            $relativPath = 'uploads/'.$year.'/'.$month.'/'.$day.'/'.$time;
            $newImageName = $time.'_'.$imageName;
            $newImageNameWithExtension = $newImageName.'-original.'.$imageExtension;
            $relPathWithFileName = '/'.$relativPath.'/'.$newImageNameWithExtension;

            if(!$image->move(public_path($relativPath), $newImageNameWithExtension)){
                return back()->with('error', 'При сохранении изображения произошла ошибка. Попробуйте ещё раз.');
            }

            $img = Image::make(public_path($relPathWithFileName));

            if($request->w && $request->h){
                $croppath = public_path($relativPath.'/'.$newImageName.'-cropped-'.$request->w.'x'.$request->h.'.'.$imageExtension);
                $img->crop($request->w, $request->h, $request->x1, $request->y1);
                $img->save($croppath);
            }

            //dd($relPathWithFileName);

            return $relPathWithFileName;
        }
    }
}