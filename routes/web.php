<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Site\SiteController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Cartalyst\Stripe\Exception\CardErrorException;
use App\Http\Controllers\API\Dev\DashboardController;
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

Route::redirect('/register', '/login');

Route::get('/home', function () {
    if(auth()->user()->is_developer){
        return redirect('/developer');
    }
    return redirect('/admin');
});

Route::get('/', 'App\Http\Controllers\Site\HomeController@index')->name('site');
Route::post('/checkout', function(Request $request) {
//    dd($request->all());

//    return Response(['data', $request->all()]);

    // validation

    try {
        $charge = Stripe::charges()->create([
            'amount' => 1000,
            'currency' => 'USD',
            'source' => $request->stripeToken,
            'description' => 'Description goes here',
            'receipt_email' => $request->email,
            'metadata' => [
                'data1' => 'metadata 1',
                'data2' => 'metadata 2',
                'data3' => 'metadata 3',
            ],
        ]);

        // save this info to your database

        // SUCCESSFUL
        return back()->with('success_message', 'Thank you! Your payment has been accepted.');
    } catch (CardErrorException $e) {
        // save info to database for failed
        return back()->withErrors('Error! ' . $e->getMessage());
    }
});

Route::get('test', 'App\Http\Controllers\API\Dev\DashboardController@customersCount');


Route::redirect('/developer', '/developer');
Route::redirect('/developer/{any}', '/developer')->where('any', '.*');
Route::redirect('/admin', '/admin');
Route::redirect('/admin/{any}', '/admin')->where('any', '.*');
Route::redirect('/login', '/login');
Route::get('/{any}', 'App\Http\Controllers\Site\HomeController@index')->where('any', '.*');


Auth::routes(['register' => false]);
Route::group([
    'prefix' => 'admin',
    'as' => 'admin.',
    'namespace' => 'App\Http\Controllers\API\Admin',
    'middleware' => ['auth', 'admin']
], function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::get('/{any}', 'HomeController@index')->where('any', '.*');
});


Route::group([
    'prefix' => 'developer',
    'as' => 'developer.',
    'namespace' => 'App\Http\Controllers\API\Dev',
    'middleware' => ['auth', 'dev']
], function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::get('/{any}', 'HomeController@index')->where('any', '.*');
});

Route::get('/{any}', 'App\Http\Controllers\Site\HomeController@index')->where('any', '.*');
