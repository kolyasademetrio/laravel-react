<?php

namespace App\Http\Controllers\Admin;

use App\Currencies;
use Validator;
use App\Products;
use App\Categories;
use App\CategoriesRelationship;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\ImageDNK;

class ProductsController extends Controller
{
    public function index(){
        $objProducts = new Products();
        $products = $objProducts->get();

        return view('admin.products.products.index', ['products' => $products]);
    }

    public function addProduct(){
        $objCategories = new Categories();
        $categories = $objCategories->get();

        $objCurrencies = new Currencies();
        $currencyBase = $objCurrencies->where('base', true)->first();

        return view('admin.products.products.add', ['categories' => $categories, 'currency' => $currencyBase]);
    }

    public function addRequestProduct(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|min:4|max:25',
            'slug' => array(
                'required',
                'string',
                'min:4',
                'max:25',
                'unique:products',
                'regex:/^[a-z0-9а-яё-]+$/u',
            ),
            'excerpt' => 'required|string|min:4|max:100',
            'content' => 'required|string|min:4|max:300',
            'descrtitle' => 'required|string|min:4|max:100',
            'descrtext' => 'required|string|min:4|max:300',
            'descr' => 'required|string|min:4|max:300',
            'regular_price' => array(
                'required',
                'regex:/\d+/',
            ),
            'discount' => array(
                'required',
                'min:0',
                'max:100',
                'regex:/^\d+(\.\d{1,2})?$/',
            ),
            'image' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'tab_bg' => 'mimes:jpeg,jpg,png,gif|max:10000',
        ]);

        if ($validator->fails()){
            return back()->withErrors($validator)->withInput();
        }

        $is_reccomended = $request->has('is_reccomended') ? true : false;

        $image = ImageDNK::save($request, 'image');
        $tab_bg = ImageDNK::save($request, 'tab_bg');


        $objProduct = new Products();
        $objProduct = $objProduct->create($request->all(), [
            'is_reccomended' => $is_reccomended,
            'image' => $image,
            'tab_bg' => $tab_bg,
        ]);

        if(!$objProduct){
            return back()->with('error', 'Товар не создан. Попробуйте ещё раз');
        }

        $hasCategory = $request->input('product_category') != 0;

        if($hasCategory){
            $objCatsRels = new CategoriesRelationship();
            $objCatsRels = $objCatsRels->create([
                'object_id' => $objProduct->id,
                'category_id' => $request->product_category,
            ]);
        }


        if($objProduct && (!$hasCategory || $objCatsRels)){
            return redirect(route('admin.products.edit', ['id' => $objProduct->id]))->with('success', trans('messages.products.successCreated'));
        }

        return back();
    }

    public function editProduct(int $id){
        $product = Products::find($id);
        if(!$product){
            return abort('404');
        }

        $objCategories = new Categories();
        $categories = $objCategories->get();

        $objCategoriesRelationship = new CategoriesRelationship();
        $productCategoriesRelationship = $objCategoriesRelationship->where('object_id', $id)->get();

        $productCategories = array();
        foreach($productCategoriesRelationship as $productCategory){
            array_push($productCategories, $productCategory->category_id);
        }

        return view('admin.products.products.edit', [
            'product' => $product,
            'categories' => $categories,
            'productCategoriesRelationship' => $productCategoriesRelationship,
            'productCategories' => $productCategories,
        ]);
    }

    public function editRequestProduct(Request $request, int $id){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|min:4|max:25',
            'slug' => array(
                'required',
                'string',
                'min:4',
                'max:25',
                'unique:products',
                'regex:/^[a-z0-9а-яё-]+$/u',
            ),
            'excerpt' => 'required|string|min:4|max:100',
            'content' => 'required|string|min:4|max:300',
            'descrtitle' => 'required|string|min:4|max:100',
            'descrtext' => 'required|string|min:4|max:300',
            'descr' => 'required|string|min:4|max:300',
            'regular_price' => array(
                'required',
                'regex:/\d+/',
            ),
            'discount' => array(
                'required',
                'min:0',
                'max:100',
                'regex:/^\d+(\.\d{1,2})?$/',
            ),
            'image' => 'mimes:jpeg,jpg,png,gif|max:10000',
            'tab_bg' => 'mimes:jpeg,jpg,png,gif|max:10000',
        ]);

        if($validator->fails()){
            return back()->withErrors($validator)->withInput();
        }

        $objProducts = Products::find($id);
        if(!$objProducts){
            return abort('404');
        }

        $is_reccomended = $request->has('is_reccomended') ? true : false;

        $image = ImageDNK::save($request, 'image');
        $tab_bg = ImageDNK::save($request, 'tab_bg');


        $objProducts->title = $request->input('title');
        $objProducts->slug = $request->input('slug');
        $objProducts->excerpt = $request->input('excerpt');
        $objProducts->content = $request->input('content');
        $objProducts->descrtitle = $request->input('descrtitle');
        $objProducts->descrtext = $request->input('descrtext');
        $objProducts->descr = $request->input('descr');
        $objProducts->regular_price = $request->input('regular_price');
        $objProducts->sale_price = $request->input('sale_price');
        $objProducts->discount = $request->input('discount');
        $objProducts->currency = $request->input('currency');
        $objProducts->image = $image;
        $objProducts->is_reccomended = $is_reccomended;
        $objProducts->product_description_tab_content = $request->input('product_description_tab_content');
        $objProducts->product_ingredients_tab_content = $request->input('product_ingredients_tab_content');
        $objProducts->product_usage_tab_content = $request->input('product_usage_tab_content');
        $objProducts->tab_bg = $tab_bg;

        if(!$objProducts->save()){
            return back()->with('error', 'Товар не изменен. Попробуйте ещё раз');
        }

        $hasCategory = $request->input('product_category') != 0;

        if($hasCategory){
            $objCatsRels = new CategoriesRelationship();
            $objCatsRels = $objCatsRels->create([
                'object_id' => $id,
                'category_id' => $request->input('product_category'),
            ]);
        }

        if($objProducts && (!$hasCategory || $objCatsRels)){
            return back()->with('success', trans('messages.products.successUpdated'));
        }

        return back()->with('error', 'Товар не изменен. Попробуйте ещё раз');
    }

    public function deleteProduct(Request $request){
        if($request->ajax()){
            $id = (int)$request->input('id');

            $objProduct = new Products();
            $productDeleted = $objProduct->where('id', $id)->delete();

            if($productDeleted){
                $objCategoriesRelationship = new CategoriesRelationship();
                $productRelationsCatsDeleted = $objCategoriesRelationship->where('object_id', $id)->delete();
            }

            echo ($productDeleted && $productRelationsCatsDeleted) ? true : false;
        }
    }

    public function deleteProductCategory(Request $request){
        if($request->ajax()){
            $product_id = (int)$request->input('product_id');
            $category_id = (int)$request->input('category_id');

            $objCategoriesRelationship = new CategoriesRelationship();
            $relationDeleted = $objCategoriesRelationship->where('object_id', $product_id)->where('category_id', $category_id)->delete();

            echo $relationDeleted ? true : false;
        }
    }
}
