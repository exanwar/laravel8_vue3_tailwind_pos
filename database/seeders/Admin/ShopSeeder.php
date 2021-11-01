<?php

namespace Database\Seeders\Admin;

use App\Models\Admin\CustomerModel;
use App\Models\Admin\ProductBrandModel;
use App\Models\Admin\ProductCategoryModel;
use App\Models\Admin\ProductUnitModel;
use App\Models\Admin\Shop;
use App\Models\User;
use Illuminate\Database\Seeder;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $shop = [
            [
                'id'    =>  1,
                'name'  =>  'Demo Shop',
                'owner_id'  =>  2,
                'logo'      =>  'https://seeklogo.com/images/D/Demo_Centre-logo-DEBDF521DA-seeklogo.com.png',
                'shop_no'   =>  10,
                'road_no'   =>  '123',
                'area_name' =>  'Area Name',
                'city'      =>  'City',
                'district'  =>  'District',
                'division'  =>  'Division',
                'zip'       =>  1234,
                'tax'       =>  15
            ],
            [
                'id'    =>  2,
                'name'  =>  'Demo Shop 2',
                'owner_id'  =>  3,
                'logo'      =>  'https://seeklogo.com/images/D/Demo_Centre-logo-DEBDF521DA-seeklogo.com.png',
                'shop_no'   =>  10,
                'road_no'   =>  '123',
                'area_name' =>  'Area Name',
                'city'      =>  'City',
                'district'  =>  'District',
                'division'  =>  'Division',
                'zip'       =>  1234,
                'tax'       =>  15
            ],
        ];

//        Shop::insert($shop);;
//        Shop::factory()->times(5)->create();
//        Shop::factory()
//            ->count(20)
//            ->hasOwner(1)
//            ->create()
//            ->each(function($shop){
//                CustomerModel::factory()->count(10)->create([
//                    'shop_id' => $shop->id
//                ]);
//                ProductBrandModel::factory()->count(30)->create([
//                    'shop_id' => $shop->id
//                ]);
//                ProductCategoryModel::factory()->count(10)->create([
//                    'shop_id' => $shop->id
//                ]);
//                ProductUnitModel::factory()->count(10)->create([
//                    'shop_id' => $shop->id
//                ]);
//            });

//        Shop::factory()
//            ->count(20)
//            ->forUser(1, (function (array $attributes, Shop $shop) {
//                        return ['shop_id' => $shop->id];
//                    })
//                )
//            ->create()
//            ->each(function($shop){
//                CustomerModel::factory()->count(10)->create([
//                    'shop_id' => $shop->id
//                ]);
//                ProductBrandModel::factory()->count(30)->create([
//                    'shop_id' => $shop->id
//                ]);
//                ProductCategoryModel::factory()->count(10)->create([
//                    'shop_id' => $shop->id
//                ]);
//                ProductUnitModel::factory()->count(10)->create([
//                    'shop_id' => $shop->id
//                ]);
//            });
    }
}
