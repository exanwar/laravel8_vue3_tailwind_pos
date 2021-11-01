<?php

namespace Database\Seeders\Dev;

use App\Models\Dev\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'id'    => '1',
                'title' => 'User management access',
                'slug' => 'user_management_access',
            ],
            [
                'id'    => '2',
                'title' => 'Permission create',
                'slug' => 'permission_create',
            ],
            [
                'id'    => '3',
                'title' => 'Permission edit',
                'slug' => 'permission_edit',
            ],
            [
                'id'    => '4',
                'title' => 'Permission show',
                'slug' => 'permission_show',
            ],
            [
                'id'    => '5',
                'title' => 'Permission delete',
                'slug' => 'permission_delete',
            ],
            [
                'id'    => '6',
                'title' => 'Permission access',
                'slug' => 'permission_access',
            ],
            [
                'id'    => '7',
                'title' => 'Role create',
                'slug' => 'role_create',
            ],
            [
                'id'    => '8',
                'title' => 'Role edit',
                'slug' => 'role_edit',
            ],
            [
                'id'    => '9',
                'title' => 'Role show',
                'slug' => 'role_show',
            ],
            [
                'id'    => '10',
                'title' => 'Role delete',
                'slug' => 'role_delete',
            ],
            [
                'id'    => '11',
                'title' => 'Role access',
                'slug' => 'role_access',
            ],
            [
                'id'    => '12',
                'title' => 'user_create',
                'slug' => 'user_create',
            ],
            [
                'id'    => '13',
                'title' => 'user_edit',
                'slug' => 'user_edit',
            ],
            [
                'id'    => '14',
                'title' => 'User show',
                'slug' => 'user_show',
            ],
            [
                'id'    => '15',
                'title' => 'User delete',
                'slug' => 'user_delete',
            ],
            [
                'id'    => '16',
                'title' => 'User access',
                'slug' => 'user_access',
            ],
            [
                'id'    => '17',
                'title' => 'Product Category access',
                'slug' => 'product_category_access',
            ],
            [
                'id'    => '18',
                'title' => 'Product Category Show',
                'slug' => 'product_category_show',
            ],
            [
                'id'    => '19',
                'title' => 'Product Category Create',
                'slug' => 'product_category_create',
            ],
            [
                'id'    => '20',
                'title' => 'Product Category Edit',
                'slug' => 'product_category_edit',
            ],
            [
                'id'    => '21',
                'title' => 'Product Category Delete',
                'slug' => 'product_category_delete',
            ],
            [
                'id'    => '22',
                'title' => 'Product Unit Access',
                'slug' => 'product_unit_access',
            ],
            [
                'id'    => '23',
                'title' => 'Product Unit Create',
                'slug' => 'product_unit_create',
            ],
            [
                'id'    => '24',
                'title' => 'Product Unit Edit',
                'slug' => 'product_unit_edit',
            ],
            [
                'id'    => '25',
                'title' => 'Product Unit Show',
                'slug' => 'product_unit_show',
            ],
            [
                'id'    => '26',
                'title' => 'Product Unit Delete',
                'slug' => 'product_unit_delete',
            ],
            [
                'id'    => '27',
                'title' => 'Product Brand Access',
                'slug' => 'product_brand_access',
            ],
            [
                'id'    => '28',
                'title' => 'Product Brand Create',
                'slug' => 'product_brand_create',
            ],
            [
                'id'    => '29',
                'title' => 'Product Brand Edit',
                'slug' => 'product_brand_edit',
            ],
            [
                'id'    => '30',
                'title' => 'Product Brand Show',
                'slug' => 'product_brand_show',
            ],
            [
                'id'    => '31',
                'title' => 'Product Brand Delete',
                'slug' => 'product_brand_delete',
            ],
            [
                'id'    => '32',
                'title' => 'Product Access',
                'slug' => 'product_access',
            ],
            [
                'id'    => '33',
                'title' => 'Product Create',
                'slug' => 'product_create',
            ],
            [
                'id'    => '34',
                'title' => 'Product Edit',
                'slug' => 'product_edit',
            ],
            [
                'id'    => '35',
                'title' => 'Product Show',
                'slug' => 'product_show',
            ],
            [
                'id'    => '36',
                'title' => 'Product Delete',
                'slug' => 'product_delete',
            ],
        ];

        Permission::insert($permissions);
    }
}
