<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsCategoriesController extends Controller
{
    public function index(){
        return view('admin.products.categories.index');
    }

    public function addCategory(){
        return view('admin.products.categories.add');
    }

    public function editCategory(int $id){

    }

    public function deleteCategory(Request $request){
        if($request->ajax()){

        }
    }
}
