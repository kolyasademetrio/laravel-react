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


Route::group(['middleware' => 'guest'], function(){
    Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
    Route::post('/register', 'Auth\RegisterController@register');
    Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
});

Route::group(['middleware' => 'auth'], function(){
    Route::get('/account', 'AccountController@index')->name('account');
    Route::get('/register', 'AccountController@index')->name('account');
    Route::get('/login', 'AccountController@index')->name('login');
});

Route::get('/{path?}', function () {
    return view('home');
});

//Route::get('/', function () {
//    return view('home');
//});
//
//Route::get('/{path?}', function($path = null){return View::make('home'); })->where('path', '.*');

