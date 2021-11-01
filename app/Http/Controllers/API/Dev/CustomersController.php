<?php

namespace App\Http\Controllers\API\Dev;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\EmployeeResource;
use App\Http\Resources\Common\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = User::wherehas('roles', function($query){
            $query->where('title', 'Owner');
        })->with('roles', 'shop')->paginate(10);
        return UserResource::collection($customers);
    }

    public function findCustomer() {
        if ($search = \Request::get('q')) {
            $customers = User::with('roles', 'shop')
                ->orderBy('id')
                ->wherehas('roles', function($query){
                    $query->where('title', 'Owner');
                })
                ->where(function($query) use ($search){
                    $query->where('email','LIKE',"%$search%")
                        ->orWhere('username','LIKE',"%$search%")
                        ->orWhere('first_name','LIKE',"%$search%")
                        ->orWhere('last_name','LIKE',"%$search%");
                })
                ->paginate(10)->withQueryString();
        }

        return UserResource::collection($customers);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->forceDelete();
    }
}

