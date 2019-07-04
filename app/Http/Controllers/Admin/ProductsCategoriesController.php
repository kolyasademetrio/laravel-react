<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProductsCategoriesRequest;
use Validator;
use App\Categories;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsCategoriesController extends Controller
{
    public function index(){
        $objCategory = new Categories();
        $categories = $objCategory->get();

        return view('admin.products.categories.index', [
            'categories' => $categories,
        ]);
    }

    public function addCategory(){
        return view('admin.products.categories.add');
    }

    public function addRequestCategory(ProductsCategoriesRequest $request){
        $validated = $request->validated();

        $objCategory = new Categories();

        $validated['show_on_homepage'] = $request->has('show_on_homepage');
        $validated['category_filter_by'] = $request->input('category_slug');

        $objCategory = $objCategory->create($validated);

        if(!$objCategory){
            return back()->with('error', trans('messages.productCategories.failedCreated'));
        }

        return redirect(route('admin.products.categories.edit', ['id' => $objCategory->category_id]))->with('success', trans('messages.productsCategories.successCreated'));

        /*try{
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
                return redirect(route('admin.products.categories'))->with('success', 'Категория успешно добавлена.');
            }

            return back()->with('error', 'Категория не добавлена. Попробуйте ещё раз');
        }catch (ValidationException $exception){
            \Log::error($exception->getMessage());
            return back()->with('error', $exception->getMessage());
        }*/
    }

    public function editCategory(int $id){
        $category = Categories::findOrFail($id);

        return view('admin.products.categories.edit', [
            'category' => $category
        ]);
    }

    public function editRequestCategory(Request $request, int $id){
        try{
            $this->validate($request, [
                'category_name' => 'required|string|min:4|max:25',
                'category_slug' => 'required|string|min:4|max:25',
            ]);

            $objCategory = Categories::findOrFail($id);

            $show_on_homepage = $request->has('show_on_homepage');

            $objCategory->category_name = $request->input('category_name');
            $objCategory->category_slug = $request->input('category_slug');
            $objCategory->category_filter_by = $request->input('category_slug');
            $objCategory->show_on_homepage = $show_on_homepage;

            if($objCategory->save()){
                return back()->with('success', trans('messages.productsCategories.successUpdated'));
            }

            return back()->with('error', trans('messages.productsCategories.failedUpdated'));
        }catch (ValidationException $exception){
            \Log::error($exception->getMessage());
            return back()->with('error', $exception->getMessage());
        }
    }

    public function deleteCategory(Request $request){
        if($request->ajax()){
            $id = (int)$request->input('id');
            $objCategory = new Categories();
            $objCategory->where('category_id', $id)->delete();
            echo "Success";
        }
    }
}
