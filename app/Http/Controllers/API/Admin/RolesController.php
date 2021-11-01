<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RoleRequest;
use App\Http\Resources\Common\RoleResource;
use App\Models\Admin\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class RolesController extends Controller
{
    private $shop_id;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->shop_id = Auth::user()->shop_id;
            return $next($request);
        });
    }

    public function index()
    {
        abort_if(Gate::denies('access_roles'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $roles = Role::where([
            ['slug', '!=', 'developer'],
            ['slug', '!=', 'owner'],
            ['shop_id', $this->shop_id]
        ]);
        return RoleResource::collection($roles->with('permissions')->get());
    }

    public function store(RoleRequest $request)
    {
        abort_if(Gate::denies('create_roles'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $role = Role::create([
            'title' =>  $request->role,
            'slug'  =>  Str::slug($request->role),
            'shop_id'   =>  $this->shop_id,
        ]);
        return $role->permissions()->sync($request->input('permissions', []));
    }

    public function show($id)
    {
        abort_if(Gate::denies('access_roles'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $role = Role::with('permissions')->where('id', $id)->get();
        abort_if($this->shop_id !== $role[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return RoleResource::collection($role);
    }

    public function update(RoleRequest $request, $id)
    {
        abort_if(Gate::denies('edit_roles'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $role = Role::find($id);
        $shop_id = auth()->user()->shop_id;
        abort_if($shop_id !== $role->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');


        $role->update([
            'title'  =>  $request->role,
            'slug'   =>  Str::slug($request->role),
        ]);
        return $role->permissions()->sync($request->input('permissions', []));
    }

    public function destroy($id)
    {
        abort_if(Gate::denies('delete_roles'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $role = Role::find($id);
        $shop_id = auth()->user()->shop_id;
        abort_if($shop_id !== $role->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return $role->forceDelete();
    }
}
