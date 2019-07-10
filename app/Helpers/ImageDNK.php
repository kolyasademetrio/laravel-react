<?php

namespace App\Helpers;


use Illuminate\Http\Request;
use Image;

class ImageDNK
{
    private static function getMiddleWidth($img){
        $fullWidth = $img->width();
        return (int) ($fullWidth / 2);
    }

    private static function getMiddleHeight($img){
        $fullHeight = $img->height();
        return (int) ($fullHeight / 2);
    }

    public static function save (Request $request, string $fieldName, string $rootFolderName, string $itemFolderName, string $imageType = '') {
        if($request->hasfile($fieldName)){
            $image = $request->file($fieldName);
            $newImageNameFullWithExtension = md5(microtime()) . $image->getClientOriginalExtension();

            $itemRelativPath = 'uploads/'.$rootFolderName.'/'.$itemFolderName;
            $itemFullRelativePath = $itemRelativPath.'/full';
            $itemResizedRelativePath = $itemRelativPath.'/resized';
            $itemCroppedRelativePath = $itemRelativPath.'/cropped';

            $relPathWithFileName = $itemFullRelativePath.'/'.$newImageNameFullWithExtension;

            if(!$image->move(public_path($itemFullRelativePath), $newImageNameFullWithExtension)){
                return back()->with('error', 'При сохранении изображения произошла ошибка. Попробуйте ещё раз.');
            }

            $img = Image::make(public_path($relPathWithFileName));
            $imgFilename = $img->filename;

            $croppath = '';
            if($request->w && $request->h){
                $croppath = public_path($itemResizedRelativePath.'/'.$imgFilename.'-cropped-'.$request->w.'-'.$request->h.'.'.$imageExtension);
                $img->crop($request->w, $request->h, $request->x1, $request->y1);
                $img->save($croppath);
            }

            $middleWidth = self::getMiddleWidth($img);
            $middleHeight = self::getMiddleHeight($img);

            $middleSizePath = public_path($itemResizedRelativePath.'/'.$imgFilename.'-middle'.'.'.$imageExtension);
            $img->fit($middleWidth, $middleHeight);
            $img->save($itemResizedRelativePath);

            dd( $middleSizePath );

            return [
                'full' => asset($relPathWithFileName),
                'cropped' => asset($croppath),
                'middle' => asset($middleSizePath),
                'featured' => '',
            ];
        }

        return null;
    }
}