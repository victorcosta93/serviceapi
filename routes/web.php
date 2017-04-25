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

Route::get('/private', function () {
    return view('private');
});

Route::get('/home', function () {
    return view('home');
});


// Rotas autenticadas
Route::group(['middleware' => 'samologin', 'prefix' => 'private'], function () {
    Route::get('main', function ()    {
        // Uses Auth Middleware
    });

    Route::get('users', function () {
        // Uses Auth Middleware
    });
});