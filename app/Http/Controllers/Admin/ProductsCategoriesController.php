<?php

namespace App\Http\Controllers\Admin;

use App\Categories;
use Dotenv\Exception\ValidationException;
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
    public function addRequestCategory(Request $request){
        try{
            $this->validate($request, [
                'category_name' => 'required|string|min:4|max:25',
                'category_slug' => 'required|string|min:4|max:25',
            ]);

            $show_on_homepage = $request->has('show_on_homepage') ? true : false;

            $objCategory = new Categories();
            $objCategory = $objCategory->create([
                'category_name' => $request->input('category_name'),
                'category_slug' => $request->input('category_slug'),
                'category_filter_by' => $request->input('category_slug'),
                'show_on_homepage' => $show_on_homepage,
            ]);

            if($objCategory){
                return back()->with('success', 'Категория успешно добавлена.');
            }

            return back()->with('error', 'Категория не добавлена. Попробуйте ещё раз');
        }catch (ValidationException $exception){
            \Log::error($exception->getMessage());
            return back()->with('error', $exception->getMessage());
        }
    }

    public function editCategory(int $id){

    }

    public function deleteCategory(Request $request){
        if($request->ajax()){

        }
    }
}
