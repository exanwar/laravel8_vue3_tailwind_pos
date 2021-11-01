<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Common\AddUserRequest;
use App\Http\Resources\Common\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;

class EmployeesController extends Controller
{
    private $shop_id;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->shop_id = Auth::user()->shop_id;
            return $next($request);
        });
    }

    public function index(){
        abort_if(Gate::denies('access_employees'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $users = User::with('roles')->where('shop_id', $this->shop_id)->where('shop_owner', false)->orderBy('id', 'desc')->paginate(10);
        return UserResource::collection($users);
    }

    public function findEmployee() {
        abort_if(Gate::denies('access_employees'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($search = \Request::get('q')) {
            $employee = User::with('roles')
                ->orderBy('id', 'desc')
                ->where('shop_id', $this->shop_id)
                ->where('shop_owner', false)
                ->where(function($query) use ($search){
                    $query->where('email','LIKE',"%$search%")
                        ->orWhere('username','LIKE',"%$search%")
                        ->orWhere('first_name','LIKE',"%$search%")
                        ->orWhere('last_name','LIKE',"%$search%");
                })
                ->wherehas('roles', function($query){
                    $query->where('title', '!=', 'Developer')->orWhere('title', '!=', 'Owner');
                })
                ->paginate(10)->withQueryString();
        }

        return UserResource::collection($employee);
    }

    public function store(AddUserRequest $request){
        abort_if(Gate::denies('create_employees'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $data = $request->validated();

        if($data['avatar']){
            $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', $data['username']))), 0, 10);
            $imgExt = explode('/', explode(':', substr($data['avatar'], 0, strpos($data['avatar'], ';')))[1])[1];
            $image = $imageName.'.'.$imgExt;
            $path = public_path('uploads/avatar');
            if(!File::isDirectory($path)){
                File::makeDirectory($path, 0777, true, true);
            }
            Image::make($data['avatar'])->resize(300,300)->save(public_path('uploads/avatar/').$image);
            $imageUrl = env('APP_URL') . '/uploads/avatar/' . $image;
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }

        $user = User::create([
            'shop_owner'        => false,
            'shop_id'           =>  $this->shop_id,
            'profile_picture'   =>  $imageUrl,
            'first_name'        =>  $data['first_name'],
            'last_name'         =>  $data['last_name'],
            'username'          =>  $data['username'],
            'street_address_1'  =>  $data['street_address_1'],
            'street_address_2'  =>  $data['street_address_2'],
            'mobile_number'     =>  $data['mobile_number'],
            'emergency_contact' =>  $data['emergency_contact'],
            'nid_number'        =>  $data['nid_number'],
            'email'             =>  $data['email'],
            'pin_code'          =>  $data['pin_code'],
            'city'              =>  $data['city'],
            'password'          =>  Hash::make($data['password']),
            'facebook_url'      =>  $data['facebook_url'],
            'twitter_url'       =>  $data['twitter_url'],
            'linkedin_url'      =>  $data['linkedin_url']
        ]);

        return $user->roles()->sync($request->input('roles', []));
    }

    public function show($id){
        abort_if(Gate::denies('access_employees'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::with('roles')->where('id', $id)->get();
        abort_if($this->shop_id !== $user[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return UserResource::collection($user);
    }

    public function update(Request $request, $id){
        abort_if(Gate::denies('edit_employees'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $user = User::find($id);

        abort_if($this->shop_id !== $user[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $request->validate([
            'first_name'        =>  'min:4',
            'last_name'         =>  'min:4',
            'street_address_1'  =>  'required|string',
            'street_address_2'  =>  'string',
            'email'             => ['required','unique:users,email,' . $id],
            'mobile_number'     =>  ['required','numeric','digits_between:10,13','unique:users,mobile_number,'.$id],
            'emergency_contact' =>  'required|numeric|digits_between:10,13',
            'nid_number'        =>  'required|numeric|unique:users,nid_number,'.$id,
            'pin_code'          =>  'required|numeric|digits_between:4,4',
            'city'              =>  'required',
            'facebook_url'      =>  'string|url|unique:users,facebook_url,'.$id,
            'twitter_url'       =>  'string|url|unique:users,twitter_url,'.$id,
            'linkedin_url'      =>  'string|url|unique:users,linkedin_url,'.$id,
            'roles'             =>  'required|numeric'
        ]);

        $data = $request->all();

        $user->update([
            'first_name'        =>  $data['first_name'],
            'last_name'         =>  $data['last_name'],
            'street_address_1'  =>  $data['street_address_1'],
            'street_address_2'  =>  $data['street_address_2'],
            'mobile_number'     =>  $data['mobile_number'],
            'emergency_contact' =>  $data['emergency_contact'],
            'nid_number'        =>  $data['nid_number'],
            'pin_code'          =>  $data['pin_code'],
            'city'              =>  $data['city'],
            'facebook_url'      =>  $data['facebook_url'],
            'twitter_url'       =>  $data['twitter_url'],
            'linkedin_url'      =>  $data['linkedin_url']
        ]);

        return $user->roles()->sync($request->input('roles', []));
    }

    public function destroy($id)
    {
        abort_if(Gate::denies('delete_employees'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $user = User::find($id);
        abort_if($this->shop_id !== $user->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $image = substr($user->profile_picture, strlen(env('APP_URL'))+1);
        $file = public_path('/' . $image);

        if(file_exists($file)){
            unlink($image);
        }

        return $user->forceDelete();
    }
}
