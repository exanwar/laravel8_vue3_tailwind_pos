<?php

namespace Database\Seeders;

use App\Models\Admin\CustomerModel;
use App\Models\Admin\ProductBrandModel;
use App\Models\Admin\ProductCategoryModel;
use App\Models\Admin\ProductModel;
use App\Models\Admin\ProductUnitModel;
use App\Models\Admin\Shop;
use App\Models\Admin\VendorModel;
use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{

    public function __construct()
    {
        $this->faker = Faker::create();
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'id' => 1,
                'first_name' => 'Engr. Anowarul',
                'last_name' => ' Islam',
                'username' => 'exanwar',
                'email' => 'developer@demo.com',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'street_address_1' => 'Zirani Bazar, BKSP, Ashulia, Savar',
                'mobile_number' => '01714075493',
                'emergency_contact' => '01934959125',
                'nid_number' => '19921683000660',
                'pin_code' => '1349',
                'city' => 'Dhaka',
                'shop_owner' => false,
                'shop_id' => null,
                'remember_token' => null
            ],
//            [
//                'id' => 2,
//                'first_name' => 'Owner',
//                'last_name' => 'Demo',
//                'username' => 'demo1',
//                'email' => 'owner@demo.com',
//                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
//                'street_address_1' => 'Zirani Bazar, BKSP, Ashulia, Savar',
//                'mobile_number' => '01714075493',
//                'emergency_contact' => '01934959125',
//                'nid_number' => '19921683000660',
//                'pin_code' => '1349',
//                'city' => 'Dhaka',
//                'shop_owner' => true,
//                'shop_id' => 1,
//                'remember_token' => null
//            ],
//            [
//                'id' => 3,
//                'first_name' => 'Owner2',
//                'last_name' => 'Demo',
//                'username' => 'demo2',
//                'email' => 'owner2@demo.com',
//                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
//                'street_address_1' => 'Zirani Bazar, BKSP, Ashulia, Savar',
//                'mobile_number' => '01714075493',
//                'emergency_contact' => '01934959125',
//                'nid_number' => '19921683000660',
//                'pin_code' => '1349',
//                'city' => 'Dhaka',
//                'shop_owner' => true,
//                'shop_id' => 2,
//                'remember_token' => null
//            ],
        ];

        User::insert($users);

        User::factory()
            ->count(20)
            ->create()
            ->each(function($user){
               Shop::factory()->count(1)->create([
                 'owner_id' =>  $user->id
               ])->each(function($shop) use($user){
                   $user->update([
                       'shop_id'    =>  $shop->id,
                       'shop_owner' =>  1
                   ]);
                   $user->roles()->sync(2);

                   CustomerModel::factory()->count(20)->create([
                       'shop_id' => $shop->id
                   ]);

                   ProductBrandModel::factory()->count(30)->create([
                       'shop_id' => $shop->id
                   ]);

                   ProductCategoryModel::factory()->count(10)->create([
                       'shop_id' => $shop->id
                   ]);

                   ProductUnitModel::factory()->count(10)->create([
                       'shop_id' => $shop->id
                   ]);

                   VendorModel::factory()->count(20)->create([
                      'shop_id' =>  $shop->id
                   ]);

                   ProductModel::factory()->count(50)->create([
                       'shop_id'        =>  $shop->id,
                       'brand_id'       =>  $this->faker->numberBetween(1, 30),
                       'category_id'    =>  $this->faker->numberBetween(1, 10),
                       'unit_id'        =>  $this->faker->numberBetween(1, 10),
                   ]);
               });
            });
    }
}
