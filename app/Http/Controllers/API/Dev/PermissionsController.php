<?php

namespace App\Http\Controllers\API\Dev;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dev\PermissionRequest;
use App\Http\Resources\Common\PermissionResource;
use App\Models\Dev\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PermissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PermissionResource::collection(Permission::all());
    }

    public function findPermission() {
        if ($search = \Request::get('q')) {
            $permissions = Permission::where(function($query) use ($search){
                $query->where('title','LIKE',"%$search%")
                    ->orWhere('slug','LIKE',"%$search%");
            })
                ->get();
        }

        return PermissionResource::collection($permissions);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PermissionRequest $request)
    {
        return Permission::create([
            'title'  =>  $request->title,
            'slug'  =>  Str::of($request->title)->replace(' ', '_')->lower()
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Permission::where('id', $id)->first();

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' =>  'required|unique:permissions,title,' .$id
        ]);

        $permission = Permission::find($id);
        return $permission->update([
            'title'  =>  $request->permission,
            'slug'  =>  Str::of($request->permission)->replace(' ', '_')->lower()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $permission = Permission::find($id);
        $permission->forceDelete();
    }
}
