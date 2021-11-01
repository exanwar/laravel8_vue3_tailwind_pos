<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\CustomerResource;
use App\Models\Admin\CustomerModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Symfony\Component\HttpFoundation\Response;

class CustomersController extends Controller
{
    private $shop_id;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->shop_id = Auth::user()->shop_id;
            return $next($request);
        });
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort_if(Gate::denies('access_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $customers = CustomerModel::with('sells')->where('shop_id', $this->shop_id)->orderBy('id', 'desc')->latest()->paginate(10);
        return CustomerResource::collection($customers);
    }

//    public function allCustomers()
//    {
//        abort_if(Gate::denies('access_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');
//        $customers = CustomerModel::where('shop_id', $this->shop_id)->latest()->get();
//        return CustomerResource::collection($customers);
//    }

    public function findCustomer() {
        abort_if(Gate::denies('access_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $customers = CustomerModel::with('sells')->where('shop_id', $this->shop_id)->orderBy('id', 'desc')->where(function($query) use ($search){
                $query->where('name','LIKE',"%$search%")->orWhere('email', 'LIKE', "%$search%");
            })->paginate(10)->withQueryString();
        }

        return CustomerResource::collection($customers);
    }

    public function fetchCustomer(){
        abort_if(Gate::denies('access_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $categories = CustomerModel::where('shop_id', $this->shop_id)
                ->where(function($query) use ($search){
                    $query->where('name','LIKE',"%$search%")
                        ->orWhere('email','LIKE',"%$search%");
                })
                ->get();
        }else{
            $categories = CustomerModel::where('shop_id', $this->shop_id)->get();
        }

        return CustomerResource::collection($categories);

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
        abort_if(Gate::denies('create_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if($request->image){
            if(strlen($request->image) <= 100){
                $imageUrl = $request->image;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->name)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/customers/'.$this->shop_id);
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->image)->resize(300,300)->save(public_path('uploads/customers/' . $this->shop_id. '/').$image);
                $imageUrl = env('APP_URL') . '/uploads/customers/'.$this->shop_id.'/'. $image;
            }
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }

        return CustomerModel::create([
            'shop_id'   =>  $this->shop_id,
            'name'  =>  $request->name,
            'image'  =>  $imageUrl,
            'email'   =>  $request->email_address,
            'phone_number'   =>  $request->phone,
            'address'   =>  $request->address,
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
        abort_if(Gate::denies('access_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $customer = CustomerModel::where('id', $id)->get();
        abort_if($this->shop_id !== $customer[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return CustomerResource::collection($customer);
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

        abort_if(Gate::denies('edit_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $request->validate([
            'name'  =>  'required',
            'image'  =>  'required',
            'email_address'  =>  'required|email|unique:customers,email,' .$id,
            'phone'  =>  'required',
            'address'  =>  'required',
        ]);

        $customer = CustomerModel::find($id);
        abort_if($this->shop_id !== $customer[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');


        if($request->image){
            if(strlen($request->image) <= 100){
                $imageUrl = $request->image;
            }else{
                $imageName = substr(strtolower(str_replace(' ','', preg_replace('/[_\.]/', '', Str::slug($request->name)))), 0, 10);
                $imgExt = explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                $image = $imageName.'.'.$imgExt;
                $path = public_path('uploads/customers/'.$this->shop_id);
                if(!File::isDirectory($path)){
                    File::makeDirectory($path, 0777, true, true);
                }
                Image::make($request->image)->resize(300,300)->save(public_path('uploads/customers/' . $this->shop_id. '/').$image);
                $imageUrl = env('APP_URL') . '/uploads/customers/'.$this->shop_id.'/'. $image;
            }
        }else{
            $imageUrl = env('APP_URL') . '/assets/images/user/11.png';
        }

        return $customer->update([
            'shop_id'   =>  $this->shop_id,
            'name'  =>  $request->name,
            'image'  =>  $imageUrl,
            'email'   =>  $request->email_address,
            'phone_number'   =>  $request->phone,
            'address'   =>  $request->address,
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
        abort_if(Gate::denies('delete_customers'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $customer = CustomerModel::find($id);
        abort_if($this->shop_id !== $customer->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $customer_image = substr($customer->image, strlen(env('APP_URL'))+1);
        $file = public_path('/' . $customer_image);

        if(file_exists($file)){
            unlink($customer_image);
        }

        return $customer->forceDelete();
    }
}
