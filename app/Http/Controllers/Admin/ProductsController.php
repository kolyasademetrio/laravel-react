<?php

namespace App\Http\Controllers\Admin;

use App\Products;
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
        return view('admin.products.products.add');
    }

    public function addRequestProduct(Request $request){
        try{
            $this->validate($request, [
                'title' => 'required|string|min:4|max:25',
                'slug' => 'required|string|min:4|max:25',
                'excerpt' => 'required|string|min:4|max:25',
                'content' => 'required|string|min:4|max:300',
                'descrtitle' => 'required|string|min:4|max:25',
                'descrtext' => 'required|string|min:4|max:25',
                'descr' => 'required|string|min:4|max:100',
                'regular_price' => 'required|regex:/^\d+(\.\d{1,0})?$/',
                'discount' => 'required|regex:/^\d+(\.\d{1,0})?$/',
                'currency' => 'required|string|min:4|max:25',
                'image' => 'mimes:jpeg,jpg,png,gif|max:10000',
                'tab_bg' => 'mimes:jpeg,jpg,png,gif|max:10000',
            ]);

            $is_reccomended = $request->has('is_reccomended') ? true : false;

            $image = ImageDNK::save($request, 'image');
            $tab_bg = ImageDNK::save($request, 'tab_bg');

            /*if($request->hasfile('image')){
                $image = $request->file('image');
                $imageExtension = $image->extension();
                $imageName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);

                $year = date('Y');
                $month = date('m');

                $relativPath = 'uploads/'.$year.'/'.$month;
                $newImageName = time().'_'.$imageName.'.'.$imageExtension;
                $relPathWithFileName = '/'.$relativPath . '/' . $newImageName;

                if(!$image->move(public_path($relativPath), $newImageName)){
                    return back()->with('error', 'При сохранении изображения произошла ошибка. Попробуйте ещё раз.');
                }
            }*/

            $objProduct = new Products();
            $objProduct = $objProduct->create([
                'title' => $request->input('title'),
                'slug' => $request->input('slug'),
                'excerpt' => $request->input('excerpt'),
                'content' => $request->input('content'),
                'descrtitle' => $request->input('descrtitle'),
                'descrtext' => $request->input('descrtext'),
                'descr' => $request->input('descr'),
                'regular_price' => $request->input('regular_price'),
                'sale_price' => $request->input('sale_price'),
                'discount' => $request->input('discount'),
                'currency' => $request->input('currency'),
                'is_reccomended' => $is_reccomended,
                'product_description_tab_content' => $request->input('product_description_tab_content'),
                'product_ingredients_tab_content' => $request->input('product_ingredients_tab_content'),
                'product_usage_tab_content' => $request->input('product_usage_tab_content'),
                'image' => $image,
                'tab_bg' => $tab_bg,
            ]);


        }catch(ValidationException $exception){
            \Log::error($exception->getMessage());
            return back()->with('error', $exception->getMessage());
        }
    }
}
