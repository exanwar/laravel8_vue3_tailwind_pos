<?php

namespace Database\Factories\Admin;

use App\Models\Admin\VendorModel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Http;

class VendorModelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = VendorModel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $picture = Http::get('https://randomuser.me/api/?inc=picture')['results'];
        return [
            'company_logo'              =>  $this->faker->imageUrl(120, 120, 'business'),
            'company_name'              =>  $this->faker->company,
            'company_address'           =>  $this->faker->unique->companyEmail,
            'contact_person_image'      =>  $picture[0]['picture']['large'],
            'contact_person_name'       =>  $this->faker->name('male'),
            'contact_person_position'   =>  $this->faker->jobTitle,
            'contact_person_phone'      =>  $this->faker->phoneNumber,
            'contact_person_email'      =>  $this->faker->phoneNumber,
        ];
    }
}
