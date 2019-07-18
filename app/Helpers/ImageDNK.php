<?php

namespace App\Helpers;


use Illuminate\Http\Request;
use Image;
use File;

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
            $newImageNameFullWithExtension = md5(microtime()) . '.' . $image->getClientOriginalExtension();

            $itemRelativPath = 'uploads/'.$rootFolderName.'/'.$itemFolderName;

            if($request->w && $request->h){
                $img = Image::make($request->$fieldName);
                $img->crop($request->w, $request->h, $request->x1, $request->y1);
                if(!File::exists($itemRelativPath)){
                    File::makeDirectory($itemRelativPath, $mode = 0777, true, true);
                }
                $saved = $img->save($itemRelativPath.'/'.$newImageNameFullWithExtension);
            } else {
                $saved = $image->move(public_path($itemRelativPath), $newImageNameFullWithExtension);
            }

            if(!$saved){
                return back()->with('error', 'При сохранении изображения произошла ошибка. Попробуйте ещё раз.');
            }

           /* $img = Image::cache(function($image, $relPathWithFileName) {
                return $image->make(public_path($relPathWithFileName));
            });*/

            /*$img = Image::make(public_path($relPathWithFileName));
            $imgFilename = $img->filename;*/

            /*$croppath = '';
            if($request->w && $request->h){
                $croppath = public_path($itemResizedRelativePath.'/'.$imgFilename.'-cropped-'.$request->w.'-'.$request->h.'.'.$imageExtension);
                $img->crop($request->w, $request->h, $request->x1, $request->y1);
                $img->save($croppath);
            }*/

            /*$middleWidth = self::getMiddleWidth($img);
            $middleHeight = self::getMiddleHeight($img);

            $middleSizePath = public_path($itemResizedRelativePath.'/'.$imgFilename.'-middle'.'.'.$imageExtension);
            $img->fit($middleWidth, $middleHeight);
            $img->save($itemResizedRelativePath);

            dd( $middleSizePath );*/

            return [
                'full' => $newImageNameFullWithExtension,
            ];
        }

        return null;
    }

    public static function delete($filename){
        // if $filename is path to image and the image exists
        if(file_exists($filename) && is_file($filename)){
            File::delete(app_path($filename));
            return true;
        } else {
            // if $filename is an name of file so we need to find file
            foreach (config('imagecache.paths') as $path) {
                // don't allow '..' in filenames
                $image_path = $path.'/'.str_replace('..', '', $filename);
                if (file_exists($image_path) && is_file($image_path)) {
                    File::delete($image_path);
                    return true;
                }
                return false;
            }
        }

    }
}