<?php

namespace Database\Factories\Admin;

use App\Models\Admin\Shop;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShopFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Shop::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'logo'  =>  $this->faker->imageUrl(100, 100),
            'name' =>   $this->faker->name,
            'owner_id'  =>  User::factory(),
            'shop_no'   =>  rand(111, 999),
            'road_no'   =>  rand(1,19),
            'area_name' =>  $this->faker->streetSuffix,
            'city'  =>  $this->faker->city,
            'district' =>   $this->faker->state,
            'division'  =>  $this->faker->country,
            'zip'   =>  rand(1111, 99999),
            'tax' =>    rand(10,15),
        ];
    }
}
