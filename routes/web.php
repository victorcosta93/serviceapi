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

Route::get('/', function () {
    return view('index');
});

Route::get('/signin', function () {
    return view('index');
});

Route::get('/signup', function () {
    return view('index');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/finance/{slug}', function($slug){
    return view('private');
})->where('slug', '([A-z\d-\/_.]+)?');

Route::get('/{slug}', function($slug){
    return view('private');
})->where('slug', '([A-z\d-\/_.]+)?');



// Rotas autenticadas
Route::group(['middleware' => 'samologin', 'prefix' => 'private'], function () {
    Route::get('main', function ()    {
        // Uses Auth Middleware
    });

    Route::get('users', function () {
        // Uses Auth Middleware
    });
});