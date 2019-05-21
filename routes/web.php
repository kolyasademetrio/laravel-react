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
    //dd('is guest');
    Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
    Route::post('/register', 'Auth\RegisterController@register');
    Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('/login', 'Auth\LoginController@login');
});

<<<<<<< HEAD
Route::middleware(['auth'])->group(function(){
    //dd('is logged in');
    /*Route::get('/account', 'AccountController@index')->name('account');
    Route::get('/register', 'AccountController@index')->name('account');
    Route::get('/login', 'AccountController@index')->name('login');*/
=======
Route::group(['middleware' => 'auth'], function(){
    Route::get('/logout', function(){
        \Auth::logout();
        return redirect(route('login'));
    })->name('logout');
    Route::get('/account', 'AccountController@index')->name('account');

    Route::group(['middleware' => 'admin', 'prefix' => 'admin'], function() {
        Route::get('/', 'Admin\AccountController@index')->name('admin');

        Route::get('/products/categories', 'Admin\ProductsCategoriesController@index')->name('admin.products.categories');
        Route::get('/products/categories/add', 'Admin\ProductsCategoriesController@addCategory')->name('admin.products.categories.add');
        Route::get('/products/categories/edit/{id}', 'Admin\ProductsCategoriesController@editCategory')->where('id', '\d+')->name('admin.products.categories.edit');
        Route::delete('/products/categories/delete', 'Admin\ProductsCategoriesController@deleteCategory')->name('admin.products.categories.delete');
    });
>>>>>>> f5b7815720ee7437841faf669054d34ae7d8553f
});

Route::get('/{path?}', function () {
    return view('home');
});

//Route::get('/', function () {
//    return view('home');
//});
//
//Route::get('/{path?}', function($path = null){return View::make('home'); })->where('path', '.*');

