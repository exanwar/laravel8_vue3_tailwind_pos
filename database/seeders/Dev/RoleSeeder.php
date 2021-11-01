<?php

namespace Database\Seeders\Dev;

use App\Models\Admin\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'id'        => 1,
                'title'     => 'Developer',
                'slug'      =>  'developer',
                'shop_id'   =>  0,
            ],
            [
                'id'        => 2,
                'title'     => 'Owner',
                'slug'      =>  'owner',
                'shop_id'   =>  1
            ],
            [
                'id'        => 3,
                'title'     => 'Sells',
                'slug'      =>  'sells',
                'shop_id'   =>  2
            ],
        ];

        Role::insert($roles);
    }
}
