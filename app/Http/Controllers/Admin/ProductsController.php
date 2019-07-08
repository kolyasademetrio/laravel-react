<?php

namespace App\Http\Controllers\Admin;

use App\Currencies;
use App\Helpers\GetArrayOf;
use App\Http\Requests\ProductsRequest;
use Validator;
use App\Products;
use App\ProductAttachments;
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

    public function addRequestProduct(ProductsRequest $request){
        $validated = $request->validated();

        $objProduct = new Products();

        $validated['is_reccomended'] = $request->has('is_reccomended');
        $validated['image'] = ImageDNK::save($request, 'image');
        $validated['tab_bg'] = ImageDNK::save($request, 'tab_bg');

        $objProduct = $objProduct->create($validated);

        if(!$objProduct){
            return back()->with('error', 'Товар не создан. Попробуйте ещё раз');
        }

        $hasCategory = $request->input('product_category') != 0;

        if($hasCategory){
            $objCatsRels = new CategoriesRelationship();
            $objCatsRels = $objCatsRels->create([
                'object_id' => $objProduct->id,
                'category_id' => $request->input('product_category'),
            ]);
        }

        if($objProduct && (!$hasCategory || $objCatsRels)){
            return redirect(route('admin.products.edit', ['id' => $objProduct->id]))->with('success', trans('messages.products.successCreated'));
        }

        return back();
    }

    public function editProduct(int $id){
        $product = Products::findOrFail($id);

        $attachments = ProductAttachments::where('product_id', $id)
            ->orWhere('type', 'image')
            ->orWhere('type', 'video')
            ->get();

        $objCategories = new Categories();
        $categories = $objCategories->get();

        $objCategoriesRelationship = new CategoriesRelationship();
        $productCategoriesRelationship = $objCategoriesRelationship->where('object_id', $id)->get();

        return view('admin.products.products.edit', [
            'product' => $product,
            'attachments' => $attachments,
            'categories' => $categories,
            'productCategoriesRelationship' => $productCategoriesRelationship,
            'productCategories' => GetArrayOf::ids($productCategoriesRelationship),
        ]);
    }

    public function editRequestProduct(ProductsRequest $request, int $id){
        $validated = $request->validated();

        $objProducts = Products::findOrFail($id);

        $validated['image'] = ImageDNK::save(
            $request,
            'image',
            'products',
            $request->productid,
            'featured'
        )['full'];
        $validated['tab_bg'] = ImageDNK::save($request, 'tab_bg', 'products', $request->productid);
        $validated['is_reccomended'] = $request->has('is_reccomended');

        //dd($validated['image']);

        $objProducts->fill($validated);

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
