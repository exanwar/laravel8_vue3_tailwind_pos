<?php

namespace Database\Seeders;

use Database\Seeders\Admin\PermissionRoleSeeder;
use Database\Seeders\Dev\RoleSeeder;
use Database\Seeders\Admin\ShopSeeder;
use Database\Seeders\Dev\UserRoleSeeder;
use Database\Seeders\Dev\PermissionSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            PermissionSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            PermissionRoleSeeder::class,
            UserRoleSeeder::class,
            ShopSeeder::class
        ]);
    }
}
