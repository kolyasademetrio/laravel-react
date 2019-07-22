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

        $objProduct = $objProduct->create($validated);

        if($objProduct){
            $images = [];
            $image = ImageDNK::save($request, 'image', 'products', $objProduct->id);
            if($image){
                $images['image'] = $image['full'];
            }

            $tab_bg = ImageDNK::save($request, 'tab_bg', 'products', $objProduct->id);
            if( $tab_bg ){
                $images['tab_bg'] = $tab_bg['full'];
            }

            if(!empty($images)){
                $product = Products::findOrFail($objProduct->id);
                $product->fill($images);
                $product->save();
            }
        } else {
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

        $attachments = ProductAttachments::where(['product_id' => $id])->get();

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

        // TODO: Вынести сохранение изображений ПОСЛЕ того как товар сохранен в базу данных.

        // TODO: Чтобы не сохранять на диск изображения до сохранения товара + не прервать сохранение товара если изображение дало ошибку.

        // TODO: Добавить возможность добавлять видео к product_attachments
        /*$image = ImageDNK::save($request, 'image', 'products', $request->productid);
        if($image){
            $validated['image'] = $image['full'];
        }

        $tab_bg = ImageDNK::save($request, 'tab_bg', 'products', $request->productid);
        if( $tab_bg ){
            $validated['tab_bg'] = $tab_bg['full'];
        }*/

        if($request->attachment){
            $attachmentError = [];
            foreach($request->attachment as $image){
                $attachment = ImageDNK::saveMultiple($image, 'products', $request->productid)['full'];
                $error = ImageDNK::saveMultiple($image, 'products', $request->productid)['error'];
                if( $attachment ){
                    $objProductAttachments = new ProductAttachments();
                    $objProductAttachments->create([
                        'product_slug' => $request->slug,
                        'product_id' => $id,
                        'attachment_name' => $attachment,
                        'attachment' => $attachment,
                        'type' => 'image',
                    ]);
                }

                if($error){
                    array_push($attachmentError, $error);
                }
            }

            if(!empty($attachmentError)){
                return back()->withErrors($attachmentError);
            }
        }

        $validated['is_reccomended'] = $request->has('is_reccomended');

        $objProducts->fill($validated);

        if(!$objProducts->save()){
            return back()->with('error', 'Товар не изменен. Попробуйте ещё раз');
        }

        // TODO: Здесь сохраняем изображения на диск и в БД
        $image = ImageDNK::save($request, 'image', 'products', $request->productid);
        if($image){

            $objProducts->image = $image['full'];

            //$validated['image'] = $image['full'];
        }

        $tab_bg = ImageDNK::save($request, 'tab_bg', 'products', $request->productid);
        if( $tab_bg ){

            $objProducts->tab_bg = $tab_bg['full'];

            //$validated['tab_bg'] = $tab_bg['full'];
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

    public function deleteProductImage(Request $request){
        if($request->ajax()){
            $product_id = (int)$request->input('product_id');
            $image_name = $request->input('imagename');

            if((int)$request->input('attachment_id')){ // if is the product_attachments table image
                $id = (int)$request->input('attachment_id');

                $objProductAttachments =  new ProductAttachments();
                $deleted = $objProductAttachments->where('product_id', $product_id)->where('id', $id)->delete();
            } else if($request->input('name')){ // if is the products table image
                $name = $request->input('name');

                $objProduct = new Products();
                $deleted = $objProduct->where('id', $product_id)->update([$name => '',]);
            }

            if($deleted){
                $imageDeleted = ImageDNK::delete($image_name);
            }

            echo $imageDeleted;
        }
    }

}
