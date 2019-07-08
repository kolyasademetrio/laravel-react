<?php

namespace App\Helpers;


use Illuminate\Http\Request;
use Image;

class ImageDNK
{
    public static function save (Request $request, string $fieldName, string $rootFolderName, string $itemFolderName, string $imageType = '') {
        if($request->hasfile($fieldName)){
            $image = $request->file($fieldName);
            $imageExtension = $image->extension();
            $imageFullName = $image->getClientOriginalName();
            $imageName = pathinfo($imageFullName, PATHINFO_FILENAME);

            $relativPath = 'uploads/'.$rootFolderName.'/'.$itemFolderName.'/'.(!empty($imageType) ? $imageType : $imageName);

            $newImageNameWithExtension = 'full.'.$imageExtension;
            $relPathWithFileName = $relativPath.'/'.$newImageNameWithExtension;

            if(!$image->move(public_path($relativPath), $newImageNameWithExtension)){
                return back()->with('error', 'При сохранении изображения произошла ошибка. Попробуйте ещё раз.');
            }

            $img = Image::make(public_path($relPathWithFileName));

            $croppath = '';
            if($request->w && $request->h){
                $croppath = public_path($relativPath.'/cropped-'.$request->w.'-'.$request->h.'.'.$imageExtension);

                $img->crop($request->w, $request->h, $request->x1, $request->y1);
                $img->save($croppath);
            }

            $fullWidth = $img->width();
            $fullHeight = $img->height();
            $middleWidth = (int) ($fullWidth / 2);
            $middleHeight = (int) ($fullHeight / 2);

            $middleSizePath = public_path($relativPath.'/middle'.'.'.$imageExtension);
            $img->fit($middleWidth, $middleHeight);
            $img->save($middleSizePath);

            return [
                'full' => asset($relPathWithFileName),
                'cropped' => asset($croppath),
                'middle' => asset($middleSizePath),
            ];
        }
    }
}