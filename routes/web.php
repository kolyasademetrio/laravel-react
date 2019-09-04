<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Support\Facades\Auth;

Route::middleware(['guest'])->group(function(){
    Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
    Route::post('/register', 'Auth\RegisterController@register');
    Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('/login', 'Auth\LoginController@login');
});

Route::group(['middleware' => 'auth'], function(){
    Route::get('/logout', function(){
        \Auth::logout();
        return redirect(route('login'));
    })->name('logout');
    Route::get('/account', 'AccountController@index')->name('account');

    Route::group(['middleware' => 'admin', 'prefix' => 'admin'], function() {
        Route::get('/', 'Admin\AccountController@index')->name('admin');
        /** Product categories */
        Route::get('/products/categories', 'Admin\ProductsCategoriesController@index')->name('admin.products.categories');
        Route::get('/products/categories/add', 'Admin\ProductsCategoriesController@addCategory')->name('admin.products.categories.add');
        Route::post('/products/categories/add', 'Admin\ProductsCategoriesController@addRequestCategory');
        Route::get('/products/categories/edit/{id}', 'Admin\ProductsCategoriesController@editCategory')->where('id', '\d+')->name('admin.products.categories.edit');
        Route::post('/products/categories/edit/{id}', 'Admin\ProductsCategoriesController@editRequestCategory')->where('id', '\d+');
        Route::delete('/products/categories/delete', 'Admin\ProductsCategoriesController@deleteCategory')->name('admin.products.categories.delete');

        /** Products */
        Route::get('/products', 'Admin\ProductsController@index')->name('admin.products');
        Route::get('/products/add', 'Admin\ProductsController@addProduct')->name('admin.products.add');
        Route::post('/products/add', 'Admin\ProductsController@addRequestProduct');
        Route::get('/products/edit/{id}', 'Admin\ProductsController@editProduct')->where('id', '\d+')->name('admin.products.edit');
        Route::post('/products/edit/{id}', 'Admin\ProductsController@editRequestProduct')->where('id', '\d+');
        Route::delete('/products/delete', 'Admin\ProductsController@deleteProduct')->name('admin.products.delete');
        Route::delete('/products/productcategory/delete', 'Admin\ProductsController@deleteProductCategory')->name('admin.products.productcategory.delete');

        Route::delete('/products/productattachment/delete', 'Admin\ProductsController@deleteProductAttachment')->name('admin.products.productattachment.delete');
        Route::delete('/products/productattachmentpreview/delete', 'Admin\ProductsController@deleteProductAttachmentPreview')->name('admin.products.productattachmentpreview.delete');
        Route::delete('/products/productfileld/delete', 'Admin\ProductsController@deleteProductField')->name('admin.products.productfileld.delete');

        /** Products Attachments */
        Route::delete('/products/attachment/delete', 'Admin\ProductAttachmentsController@destroy')->name('admin.products.attachment.delete');

        /** Videotips */
        Route::get('/videotips', 'Admin\VideotipsController@index')->name('admin.videotips');
        Route::get('/videotips/add', 'Admin\VideotipsController@create')->name('admin.videotips.add');
        Route::post('/videotips/add', 'Admin\VideotipsController@store');
        Route::get('/videotips/edit/{id}', 'Admin\VideotipsController@edit')->name('admin.videotips.edit');
        Route::post('videotips/edit/{id}', 'Admin\VideotipsController@update');
        Route::delete('/videotips/delete', 'Admin\VideotipsController@destroy')->name('admin.videotips.delete');
        Route::delete('/videotips/videotipfileld/delete', 'Admin\VideotipsController@deleteVideotipField')->name('admin.videotips.videotipfileld.delete');

        /** Stocks */
        Route::get('/stocks', 'Admin\StocksController@index')->name('admin.stocks');
        Route::get('/stocks/add', 'Admin\StocksController@create')->name('admin.stocks.add');
        Route::post('/stocks/add', 'Admin\StocksController@store');
        Route::get('/stocks/edit/{id}', 'Admin\StocksController@edit')->name('admin.stocks.edit');
        Route::post('/stocks/edit/{id}', 'Admin\StocksController@update');
        Route::delete('/stocks/delete', 'Admin\StocksController@destroy')->name('admin.stocks.delete');

        Route::delete('/stocks/stockattachment/delete', 'Admin\StocksController@deleteStockAttachment')->name('admin.stocks.stockattachment.delete');
        Route::delete('/stocks/stockattachmentpreview/delete', 'Admin\StocksController@deleteStockAttachmentPreview')->name('admin.stocks.stockattachmentpreview.delete');

        /** Doyouknow */
        Route::get('/doyouknows', 'Admin\DoyouknowController@index')->name('admin.doyouknows');
        Route::get('/doyouknows/add', 'Admin\DoyouknowController@create')->name('admin.doyouknows.add');
        Route::post('/doyouknows/add', 'Admin\DoyouknowController@store');
        Route::get('/doyouknows/edit/{id}', 'Admin\DoyouknowController@edit')->name('admin.doyouknows.edit');
        Route::post('/doyouknows/edit/{id}', 'Admin\DoyouknowController@update');
        Route::delete('/doyouknows/delete', 'Admin\DoyouknowController@destroy')->name('admin.doyouknows.delete');

        Route::delete('/doyouknows/doyouknowattachment/delete', 'Admin\DoyouknowController@deleteDoyouknowAttachment')->name('admin.doyouknows.doyouknowattachment.delete');
        Route::delete('/doyouknows/doyouknowattachmentpreview/delete', 'Admin\DoyouknowController@deleteDoyouknowAttachmentPreview')->name('admin.doyouknows.doyouknowattachmentpreview.delete');

        /** About */
        Route::get('/about/edit', 'Admin\AboutController@edit')->name('admin.about.edit');
        Route::post('/about/edit', 'Admin\AboutController@update');
    });
});

/*Route::get('/{path?}', function () {
    return view('home');
});*/

//Route::get('/', function () {
//    return view('home');
//});
//
Route::get('/{path?}', function($path = null){
    return View::make('home');
})->where('path', '.*');

