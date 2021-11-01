<?php

namespace Database\Seeders\Dev;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::findOrFail(1)->roles()->sync(1);
//        User::findOrFail(2)->roles()->sync(2);
//        User::findOrFail(3)->roles()->sync(2);
    }
}
