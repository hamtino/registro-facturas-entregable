<?php

use Illuminate\Http\Request;
Use App\Personas;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([

    'middleware' => 'api',
    // 'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@index');

    //rutas API personas
    Route::get('personas', 'PersonasController@index');
    Route::get('personas/{article}', 'PersonasController@show');
    Route::post('personas', 'PersonasController@store');
    Route::put('personas/{article}', 'PersonasController@update');
    Route::delete('personas/{article}', 'PersonasController@delete');
    
    //rutas API facturas
    Route::get('facturas', 'FacturasController@index');
    Route::get('facturas/{article}', 'FacturasController@show');
    Route::post('facturas', 'FacturasController@store');
    Route::put('facturas/{article}', 'FacturasController@update');
    Route::delete('facturas/{article}', 'FacturasController@delete');

    //rutas API items
    Route::get('items', 'ItemsController@index');
    Route::get('items/{article}', 'FacturasController@show');
    Route::post('items', 'ItemsController@store');
    Route::put('items/{article}', 'ItemsController@update');
    Route::delete('items/{article}', 'ItemsController@delete');

    //rutas API factura items
    Route::get('facturasitems', 'FacturasitemsController@index');
    Route::get('facturasitems/{article}', 'FacturasitemsController@show');
    Route::post('facturasitems', 'FacturasitemsController@store');
    Route::put('facturasitems/{article}', 'FacturasitemsController@update');
    Route::delete('facturasitems/{article}', 'FacturasitemsController@delete');

});
