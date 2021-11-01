<?php

namespace Database\Factories\Admin;

use App\Models\Admin\ProductUnitModel;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductUnitModelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductUnitModel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->word;
        return [
            'title'         =>  $title,
            'short_title'   =>  Str::slug($title),
        ];
    }
}
