<?php

namespace Database\Factories\Admin;

use App\Models\Admin\ProductBrandModel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductBrandModelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductBrandModel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->unique->company;
        return [
            'title'     =>  $name,
            'slug'      =>  Str::slug($name),
            'logo'      =>  $this->faker->imageUrl(120, 120, 'people'),
        ];
    }
}
