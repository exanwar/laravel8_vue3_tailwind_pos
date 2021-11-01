<?php

namespace Database\Factories\Admin;

use App\Models\Admin\ProductModel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductModelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductModel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->name;
        return [
            'title'             =>  $title,
            'slug'              =>  Str::slug($title),
            'sku'               =>  $this->faker->isbn10(),
            'barcode'           =>  $this->faker->isbn13(),
            'image'             =>  $this->faker->imageUrl(400, 400),
            'description'       =>  $this->faker->paragraph(10),
        ];
    }
}
