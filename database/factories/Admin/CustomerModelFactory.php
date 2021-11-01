<?php

namespace Database\Factories\Admin;

use App\Models\Admin\CustomerModel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;

class CustomerModelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CustomerModel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $picture = Http::get('https://randomuser.me/api/?inc=picture')['results'];
        return [
            'image'         =>  $picture[0]['picture']['large'],
            'name'          =>  $this->faker->name,
            'phone_number'  =>  $this->faker->phoneNumber,
            'email'         =>  $this->faker->unique()->safeEmail(),
            'address'       =>  $this->faker->address,
        ];
    }
}
