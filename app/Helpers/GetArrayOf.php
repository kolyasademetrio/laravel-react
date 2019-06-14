<?php

namespace App\Helpers;

class GetArrayOf
{
    public static function ids($productCategoriesRelationship){
        $productCategories = [];
        foreach($productCategoriesRelationship as $productCategory){
            array_push($productCategories, $productCategory->category_id);
        }
        return $productCategories;
    }
}
