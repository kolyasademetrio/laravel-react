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
        $currency = $objCurrencies->where('current', true)->first();

        return view('admin.products.products.add', ['categories' => $categories, 'currency' => $currency]);
    }

    public function addRequestProduct(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|min:4|max:25',
            'slug' => 'required|string|min:4|max:25|unique:products',
            'excerpt' => 'required|string|min:4|max:25',
            'content' => 'required|string|min:4|max:300',
            'descrtitle' => 'required|string|min:4|max:25',
            'descrtext' => 'required|string|min:4|max:25',
            'descr' => 'required|string|min:4|max:300',
            'regular_price' => 'required|regex:/\d+/',
            'discount' => 'required|regex:/^\d+(\.\d{1,1})?$/',
            'currency' => 'required|string|min:4|max:25',
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

        $hasCategory = $request->input('product_category') !== 0;

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

        $objCategories = new Categories();
        $categories = $objCategories->get();

        return view('admin.products.products.edit', ['product' => $product, 'categories' => $categories]);
    }
}
