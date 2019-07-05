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

    });
});

Route::get('/{path?}', function () {
    return view('home');
});

//Route::get('/', function () {
//    return view('home');
//});
//
//Route::get('/{path?}', function($path = null){return View::make('home'); })->where('path', '.*');

