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
        $products = Products::get();

        return view('admin.products.products.index', ['products' => $products]);
    }

    public function addProduct(){
        $categories = Categories::get();
        $currencyBase = Currencies::where('base', true)->first();

        return view('admin.products.products.add', [
            'categories' => $categories,
            'currency' => $currencyBase
        ]);
    }

    public function addRequestProduct(ProductsRequest $request){
        $validated = $request->validated();

        $validated['is_reccomended'] = $request->has('is_reccomended');

        $objProduct = Products::create($validated);

        if(!$objProduct){
            return back()->with('error', trans('messages.products.failedCreated'));
        }

        $images = [];
        $ImageDNK = new ImageDNK();

        $image = $ImageDNK->save($request, 'image', 'products', $objProduct->id);
        if($image){
            $images['image'] = $image;
        }

        $tab_bg = $ImageDNK->save($request, 'tab_bg', 'products', $objProduct->id);
        if( $tab_bg ){
            $images['tab_bg'] = $tab_bg;
        }

        if($request->attachment){
            foreach($request->attachment as $image){
                $attachment = $ImageDNK->saveMultiple($image, 'attachment', 'products', $objProduct->id);
                if( $attachment ){
                    ProductAttachments::create([
                        'product_slug' => $request->slug,
                        'product_id' => $objProduct->id,
                        'attachment' => $attachment,
                        'attachment_preview' => $attachment,
                        'type' => 'image',
                    ]);
                }
            }
        }

        if($request->attachment_video){
            ProductAttachments::create([
                'product_slug' => $request->slug,
                'product_id' => $objProduct->id,
                'attachment' => $request->attachment_video,
                'attachment_preview' => '',
                'type' => 'video',
            ]);
        }

        $attachment_preview = $ImageDNK->save($request, 'attachment_preview', 'products', $objProduct->id);
        if($attachment_preview){
            ProductAttachments::updateOrCreate(
                ['product_id' => $objProduct->id, 'type' => 'video', 'product_slug' => $request->slug,],
                [
                    'attachment_preview' => $attachment_preview,
                ]
            );
        }

        if(!empty($images)){
            $product = Products::findOrFail($objProduct->id);
            $product->fill($images);
            $product->save();
        }

        $hasCategory = $request->input('product_category') != 0;

        $errors = $ImageDNK->getErrors();

        if($hasCategory){
            $objCatsRels = CategoriesRelationship::create([
                'object_id' => $objProduct->id,
                'category_id' => $request->input('product_category'),
            ]);

            if(!$objCatsRels){
                array_push($errors, trans('messages.productsCategories.failedCreated'));
            }
        }

        if($objProduct){
            return redirect(route('admin.products.edit', ['id' => $objProduct->id]))->with('success', trans('messages.products.successCreated'))->withErrors($errors);
        }
    }

    public function editProduct(int $id){
        $product = Products::findOrFail($id);
        $attachments = ProductAttachments::where(['product_id' => $id])->get();
        $video = ProductAttachments::where(['product_id' => $id, 'type' => 'video' ])->first();
        $categories = Categories::get();
        $productCategoriesRelationship = CategoriesRelationship::where('object_id', $id)->get();

        return view('admin.products.products.edit', [
            'product' => $product,
            'attachments' => $attachments,
            'video' => $video,
            'categories' => $categories,
            'productCategoriesRelationship' => $productCategoriesRelationship,
            'productCategories' => GetArrayOf::ids($productCategoriesRelationship),
        ]);
    }

    public function editRequestProduct(ProductsRequest $request, int $id){
        $validated = $request->validated();

        $objProducts = Products::findOrFail($id);

        $validated['is_reccomended'] = $request->has('is_reccomended');

        $objProducts->fill($validated);

        if(!$objProducts->save()){
            return back()->with('error', trans('messages.products.failedUpdated'));
        }

        // Здесь сохраняем изображения на диск и в БД
        $ImageDNK = new ImageDNK();

        $image = $ImageDNK->save($request, 'image', 'products', $request->productid);
        if($image){
            $objProducts->image = $image;
            $objProducts->save();
        }

        $tab_bg = $ImageDNK->save($request, 'tab_bg', 'products', $request->productid);
        if( $tab_bg ){
            $objProducts->tab_bg = $tab_bg;
            $objProducts->save();
        }

        if($request->attachment){
            foreach($request->attachment as $image){
                $attachment = $ImageDNK->saveMultiple($image, 'attachment', 'products', $request->productid);
                if( $attachment ){
                    ProductAttachments::create([
                        'product_slug' => $request->slug,
                        'product_id' => $id,
                        'attachment' => $attachment,
                        'attachment_preview' => $attachment,
                        'type' => 'image',
                    ]);
                }
            }
        }

        ProductAttachments::updateOrCreate(
            ['product_id' => $id, 'type' => 'video', 'product_slug' => $objProducts->slug,],
            [
                'attachment' => $request->attachment_video ? $request->attachment_video : '',
            ]
        );

        $attachment_preview = $ImageDNK->save($request, 'attachment_preview', 'products', $request->productid);

        if($attachment_preview){
            ProductAttachments::updateOrCreate(
                ['product_id' => $id, 'type' => 'video', 'product_slug' => $objProducts->slug,],
                [
                    'attachment_preview' => $attachment_preview,
                ]
            );
        }

        $hasCategory = $request->input('product_category') != 0;

        $errors = $ImageDNK->getErrors();

        if($hasCategory){
            $objCatsRels = CategoriesRelationship::create([
                'object_id' => $id,
                'category_id' => $request->input('product_category'),
            ]);

            if(!$objCatsRels){
                array_push($errors, trans('messages.productsCategories.failedCreated'));
            }
        }

        if($objProducts){
            return back()->with('success', trans('messages.products.successUpdated'))->withErrors($errors);
        }
    }

    public function deleteProduct(Request $request){
        if($request->ajax()){
            $id = (int)$request->id;

            $productDeleted = Products::where('id', $id)->delete();

            if($productDeleted){
                CategoriesRelationship::where('object_id', $id)->delete();
                ProductAttachments::where('product_id', $id)->delete();
                ImageDNK::deleteFolder('products', $id);
            }

            echo $productDeleted;
        }
    }

    public function deleteProductCategory(Request $request){
        if($request->ajax()){
            $product_id = (int)$request->product_id;
            $category_id = (int)$request->category_id;

            $relationDeleted = CategoriesRelationship::where('object_id', $product_id)->where('category_id', $category_id)->delete();

            echo $relationDeleted ? true : false;
        }
    }

    public function deleteProductAttachment(Request $request){
        if($request->ajax()){
            $productId = (int)$request->productid;
            $imageName = $request->imagename;
            $attachmentId = (int)$request->attachmentid;

            $deleted = ProductAttachments::where('product_id', $productId)->where('id', $attachmentId)->delete();

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }

    public function deleteProductAttachmentPreview(Request $request){
        if($request->ajax()){
            $productId = (int)$request->productid;
            $imageName = $request->imagename;
            $attachmentId = (int)$request->attachmentpreview;

            $deleted = ProductAttachments::where('product_id', $productId)->where('id', $attachmentId)->update(['attachment_preview' => '',]);

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }

    public function deleteProductField(Request $request){
        if($request->ajax()){
            $productId = (int)$request->productid;
            $imageName = $request->imagename;
            $fieldname = $request->input('fieldname');

            $deleted = Products::where('id', $productId)->update([$fieldname => '']);

            if($deleted){
                $imageDeleted = ImageDNK::delete($imageName);
            }

            echo $imageDeleted;
        }
    }
}
