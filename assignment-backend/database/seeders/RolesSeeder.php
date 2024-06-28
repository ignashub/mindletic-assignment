<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesSeeder extends Seeder
{
    public function run()
    {
        $role_admin = Role::create(['name' => 'admin']);
        $role_user = Role::create(['name' => 'user']);

        $permission_create_survey = Permission::create(['name' => 'create survey']);
        $permission_submit_survey = Permission::create(['name' => 'submit survey']);
        $permission_view_survey_results = Permission::create(['name' => 'view survey results']);

        $role_admin->givePermissionTo($permission_create_survey);
        $role_user->givePermissionTo($permission_submit_survey);
        $role_user->givePermissionTo($permission_view_survey_results);
    }
}
