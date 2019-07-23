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

        $errors = [];

        if(!$objProduct){
            return back()->with('error', 'Товар не создан. Попробуйте ещё раз');
        }

        $images = [];

        $image = ImageDNK::save($request, 'image', 'products', $objProduct->id);
        if($image['full']){
            $images['image'] = $image['full'];
        }
        if($image['error']){
            array_push($errors, $image['error']);
        }

        $tab_bg = ImageDNK::save($request, 'tab_bg', 'products', $objProduct->id);
        if( $tab_bg['full'] ){
            $images['tab_bg'] = $tab_bg['full'];
        }
        if($tab_bg['error']){
            array_push($errors, $tab_bg['error']);
        }

        if($request->attachment){
            foreach($request->attachment as $image){
                $attachment = ImageDNK::saveMultiple($image, 'attachment', 'products', $objProduct->id);
                if( $attachment['full'] ){
                    $objProductAttachments = new ProductAttachments();
                    $objProductAttachments->create([
                        'product_slug' => $request->slug,
                        'product_id' => $objProduct->id,
                        'attachment_name' => $attachment['full'],
                        'attachment' => $attachment['full'],
                        'type' => 'image',
                    ]);
                }

                if($attachment['error']){
                    array_push($errors, $attachment['error']);
                }
            }
        }

        if(!empty($images)){
            $product = Products::findOrFail($objProduct->id);
            $product->fill($images);
            $product->save();
        }

        $hasCategory = $request->input('product_category') != 0;

        if($hasCategory){
            $objCatsRels = new CategoriesRelationship();
            $objCatsRels = $objCatsRels->create([
                'object_id' => $objProduct->id,
                'category_id' => $request->input('product_category'),
            ]);

            if(!$objCatsRels){
                array_push($errors, 'При создании категории товара произошла ошибка. Попробуйте ещё раз.');
            }
        }

        if($objProduct){
            return redirect(route('admin.products.edit', ['id' => $objProduct->id]))->with('success', trans('messages.products.successCreated'))->withErrors($errors);
        }

        //return back();
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

        $validated['is_reccomended'] = $request->has('is_reccomended');

        $objProducts->fill($validated);

        if(!$objProducts->save()){
            return back()->with('error', 'Товар не изменен. Попробуйте ещё раз');
        }

        // Здесь сохраняем изображения на диск и в БД
        $errors = [];

        $image = ImageDNK::save($request, 'image', 'products', $request->productid);
        if($image['full']){
            $objProducts->image = $image['full'];
            $objProducts->save();
        }
        if($image['error']){
            array_push($errors, $image['error']);
        }

        $tab_bg = ImageDNK::save($request, 'tab_bg', 'products', $request->productid);
        if( $tab_bg['full'] ){
            $objProducts->tab_bg = $tab_bg['full'];
            $objProducts->save();
        }
        if($tab_bg['error']){
            array_push($errors, $tab_bg['error']);
        }

        if($request->attachment){
            foreach($request->attachment as $image){
                $attachment = ImageDNK::saveMultiple($image, 'attachment', 'products', $request->productid);
                if( $attachment['full'] ){
                    $objProductAttachments = new ProductAttachments();
                    $objProductAttachments->create([
                        'product_slug' => $request->slug,
                        'product_id' => $id,
                        'attachment_name' => $attachment['full'],
                        'attachment' => $attachment['full'],
                        'type' => 'image',
                    ]);
                }

                if($attachment['error']){
                    array_push($errors, $attachment['error']);
                }
            }
        }

        $hasCategory = $request->input('product_category') != 0;

        if($hasCategory){
            $objCatsRels = new CategoriesRelationship();
            $objCatsRels = $objCatsRels->create([
                'object_id' => $id,
                'category_id' => $request->input('product_category'),
            ]);

            if(!$objCatsRels){
                array_push($errors, 'При создании категории товара произошла ошибка. Попробуйте ещё раз.');
            }
        }

        if($objProducts){
            return back()->with('success', trans('messages.products.successUpdated'))->withErrors($errors);
        }

        //return back()->with('error', 'Товар не изменен. Попробуйте ещё раз');
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
