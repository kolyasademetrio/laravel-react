<?php

namespace App\Helpers;


use Illuminate\Http\Request;
use Image;
use File;

class ImageDNK
{
    private $errors = [];

    private function pushError($error){
        array_push($this->errors, $error);
    }

    public function getErrors(){
        return $this->errors;
    }

    public function save (Request $request, string $fieldName, string $rootFolderName, string $itemFolderName) {
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
                $error = 'При сохранении ' . __('validation.attributes.' . $fieldName) . ' произошла ошибка. Попробуйте ещё раз.';
                $this->pushError($error);
                return false;
            }

            $fieldNameExist = $fieldName.'_exists';
            if($request->$fieldNameExist){
                self::delete($request->$fieldNameExist);
            }

            return $newImageNameFullWithExtension;
        }
        return null;
    }

    public function saveMultiple ($image, string $fieldName, string $rootFolderName, string $itemFolderName) {
        $newImageNameFullWithExtension = md5(microtime()) . '.' . $image->getClientOriginalExtension();

        $itemRelativPath = 'uploads/'.$rootFolderName.'/'.$itemFolderName;

        $saved = $image->move(public_path($itemRelativPath), $newImageNameFullWithExtension);

        if(!$saved){
            $error = 'При сохранении ' . __('validation.attributes.' . $fieldName) . ' произошла ошибка. Попробуйте ещё раз.';
            $this->pushError($error);
            return null;
        }
        return  $newImageNameFullWithExtension;
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
            }
            return false;
        }
    }

    public static function deleteFolder(string $rootFolderName, string $itemFolderName){
        $folderPath = 'uploads/'.$rootFolderName.'/'.$itemFolderName;
        if(File::exists($folderPath)){
           File::deleteDirectory($folderPath);
           return true;
        }
        return false;
    }
}