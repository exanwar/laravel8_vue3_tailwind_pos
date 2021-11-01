<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group(['namespace' => 'App\Http\Controllers\API'], function () {
//    Route::post('checkout', 'CheckoutController@checkout')->name('checkout');
    Route::group(['namespace' => 'Common', 'prefix' => 'common', 'middleware' => ['auth:api']], function () {
        Route::get('info', 'UserController@info');
        Route::get('abilities', 'AbilityController@index');
    });
});

Route::group(['namespace' => 'App\Http\Controllers\API\Dev', 'middleware' => ['dev', 'auth:api'], 'prefix' => 'dev'], function(){
    Route::get('customers-count', 'DashboardController@customersCount')->name('customers-count');
    Route::get('shops-count', 'DashboardController@shopsCount')->name('shops-count');
    Route::resource('devs', 'DevsController')->except(['create', 'edit']);
    Route::get('find-devs', 'DevsController@findDeveloper')->name('find-developer');
    Route::resource('roles', 'RolesController')->except(['create', 'store', 'edit', 'delete']);
    Route::resource('permissions', 'PermissionsController')->except(['create', 'edit']);
    Route::get('find-permission', 'PermissionsController@findPermission')->name('find-permission');

    Route::resource('plans', 'PlansController')->except('edit', 'create');

    Route::resource('customers', 'CustomersController')->except(['create', 'edit']);
    Route::get('find-customer', 'CustomersController@findCustomer')->name('find-developer');

    Route::resource('features', 'PlanFeaturesController')->except('edit', 'create');
    Route::get('feature_with_packages', 'PlanFeaturesController@featureWithPackage')->name('feature_with_package');
    Route::get('find-feature', 'PlanFeaturesController@findFeature')->name('find-developer');
});

Route::group(['namespace' => 'App\Http\Controllers\API\Admin', 'middleware' => ['admin', 'auth:api'], 'prefix' => 'user'], function(){
    //Shop
    Route::resource('shop', 'ShopController')->except(['index', 'create', 'edit']);

    //Dashboard
    Route::get('customers-count', 'DashboardController@customersCount')->name('customers-count');
    Route::get('sells-count', 'DashboardController@sellsChart')->name('sells-count');
    Route::get('sells-earnings', 'DashboardController@earnings')->name('earnings');
    Route::get('recent-sells', 'DashboardController@recentSells')->name('earnings');
    Route::get('permissions', 'PermissionsController@index');
    Route::get('find-permission', 'PermissionsController@findPermission')->name('find-permission');
    Route::resource('roles', 'RolesController')->except(['create', 'edit']);
    Route::resource('employees', 'EmployeesController')->except(['create', 'edit']);
    Route::get('find-employee', 'EmployeesController@findEmployee')->name('find-employee');
    Route::resource('users', 'UsersController')->except(['create', 'edit']);

    Route::resource('products', 'ProductsController')->except(['create', 'edit']);
    Route::get('productsFilter', 'ProductsController@filterProduct');
    Route::get('find-product', 'ProductsController@findProduct')->name('find-product');
    Route::get('fetch-product', 'ProductsController@fetchProduct')->name('fetch-product');

    Route::resource('product_brands', 'ProductBrandsController')->except(['create', 'edit']);
//    Route::get('all-brands', 'ProductBrandsController@allBrands')->name('all-brands');
    Route::get('find-brand', 'ProductBrandsController@findBrand')->name('find-brand');
    Route::get('fetch-brand', 'ProductBrandsController@fetchBrand')->name('fetch-brand');

    Route::resource('product_units', 'ProductUnitsController')->except(['create', 'edit']);
//    Route::get('all-units', 'ProductUnitsController@allUnits')->name('all-units');
    Route::get('find-unit', 'ProductUnitsController@findUnit')->name('find-unit');
    Route::get('fetch-unit', 'ProductUnitsController@fetchUnit')->name('fetch-unit');

    Route::resource('product_categories', 'ProductCategoriesController')->except(['create', 'edit']);
//    Route::get('all-categories', 'ProductCategoriesController@allCategories')->name('all-categories');
    Route::get('find-category', 'ProductCategoriesController@findCategory')->name('find-category');
    Route::get('fetch-category', 'ProductCategoriesController@fetchCategory')->name('fetch-category');

    Route::resource('product_lots', 'PurchaseController')->except(['create', 'edit']);
    Route::get('find-lot', 'PurchaseController@findPurchase')->name('find-lot');

    Route::resource('vendors', 'VendorsController')->except(['create', 'edit']);
//    Route::get('all-vendors', 'VendorsController@allVendors')->name('all-vendors');
    Route::get('find-vendor', 'VendorsController@findVendor')->name('find-customer');
    Route::get('fetch-vendor', 'VendorsController@fetchVendor')->name('fetch-vendor');

    Route::resource('customers', 'CustomersController')->except(['create', 'edit']);
//    Route::get('all-customers', 'CustomersController@allCustomers')->name('all-customers');
    Route::get('find-customer', 'CustomersController@findCustomer')->name('find-customer');
    Route::get('fetch-customer', 'CustomersController@fetchCustomer')->name('fetch-customer');

    Route::resource('sells', 'SellsController')->except(['create', 'edit']);
    Route::get('find-sell', 'SellsController@findSell')->name('find-sell');
    Route::get('find-sell-by-customer/{id}', 'SellsController@findSellsByCustomer')->name('find-sell-by-customer');
});

Route::group(['namespace' => 'App\Http\Controllers\Site', 'prefix' => 'site'], function(){
    Route::post('checkout', 'CheckoutController@checkout')->name('checkout');
    Route::get('pricing_features', 'SiteController@getPricingWithFeatures')->name('pricing_features');
    Route::get('features_pricing', 'SiteController@getFeaturesWithPricing')->name('features_pricing');
    Route::get('features', 'SiteController@getFeatures')->name('features');
    Route::get('test', 'SiteController@test')->name('test');
});
