<?php

namespace Database\Factories;

use App\Models\Admin\Shop;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $picture = Http::get('https://randomuser.me/api/?inc=picture')['results'];
        return [
            'shop_owner'            => 1,
            'profile_picture'       => $picture[0]['picture']['large'],
            'first_name'            => $this->faker->firstName,
            'last_name'             =>  $this->faker->lastName,
            'username'              => $this->faker->unique()->userName,
            'street_address_1'      => $this->faker->address,
            'mobile_number'         => $this->faker->phoneNumber,
            'emergency_contact'     => $this->faker->phoneNumber,
            'nid_number'            => rand(1111111111,9999999999),
            'email'                 => $this->faker->unique()->safeEmail(),
            'pin_code'              => rand(1111, 99999),
            'city'                  => $this->faker->city,
            'password'              => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token'        => Str::random(10)
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
