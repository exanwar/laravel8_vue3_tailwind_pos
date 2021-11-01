<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Common\PermissionResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class PermissionsController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('access_permissions'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $userPermissions = auth()->user()->roles()->with('permissions')->first();
        $permissions = $userPermissions->permissions;

        return PermissionResource::collection($permissions);
    }

    public function findPermission() {
        abort_if(Gate::denies('access_permissions'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $userPermissions = auth()->user()->roles()->with('permissions')->first();
            $permissions = $userPermissions->permissions;

            $filtered = $permissions
                ->filter(function($item) use ($search) {
                return strripos($item['title'],$search) !== false || strripos($item['slug'],$search) !== false;
                });
        }

        return PermissionResource::collection($filtered);
    }
}
