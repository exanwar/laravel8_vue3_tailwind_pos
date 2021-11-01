<?php

namespace Database\Seeders\Admin;

use App\Models\Admin\Role;
use App\Models\Dev\Permission;
use Illuminate\Database\Seeder;

class PermissionRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $owner_permissions = Permission::all();
        Role::findOrFail(2)->permissions()->sync($owner_permissions->pluck('id'));
    }
}
