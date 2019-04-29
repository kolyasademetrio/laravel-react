<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('users', 'Api\UserController');
Route::resource('pages', 'Api\PagesController');
Route::resource('menu', 'Api\MenuController');
Route::resource('videotips', 'Api\VideotipsController');

Route::get('products/{slug}', 'Api\ProductsController@show');
Route::resource('products', 'Api\ProductsController');

Route::get('product-comments/{slug}', 'Api\ProductCommentsController@show');
Route::resource('product-comments', 'Api\ProductCommentsController');



//Route::resource('/products/reccomended', 'Api\ProductsController@reccomended');

