<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\SellResource;
use App\Models\Admin\ProductModel;
use App\Models\Admin\SellsModel;
use App\Models\Admin\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class SellsController extends Controller
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
//    public function index()
//    {
//        $sells = SellsModel::with('customer')->where('shop_id', $this->shop_id)->select('id', 'sell_id', 'customer_id', 'sell_on', 'created_at')->orderBy('created_at', 'desc')->paginate(10);
//        return SellResource::collection($sells);
//    }
    public function index()
    {
        abort_if(Gate::denies('access_sells'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $sells = SellsModel::get()
            ->groupBy('sell_invoice_number', )->count();

        $paginate = 10;


        $data['total'] = $sells;
        $data['perPage'] = $data['total'] < $paginate ? $data['total'] : $paginate;
        if ($data['total'] % $data['perPage'] == 0) {
            $data['lastPage'] = (int)($data['total'] / $data['perPage']);
        }
        else {
            $data['lastPage'] = (int)($data['total'] / $data['perPage']) + 1;
        }

        if($page = \Request::get('page')) {
            $data['sells'] = SellsModel::with('customer')
                ->orderBy('sell_invoice_number', 'desc')
                ->get()
                ->groupBy('sell_invoice_number', )->skip($data['perPage'] * ($page - 1))->take($data['perPage']);
        }else{
            $page = 1;
            $data['sells'] = SellsModel::with('customer')
                ->orderBy('sell_invoice_number', 'desc')
                ->get()
                ->groupBy('sell_invoice_number', )->skip($data['perPage'] * ($page - 1))->take($data['perPage']);
        }

        $data['from'] = ($data['perPage'] * ($page - 1)) + 1;
        $data['to'] = $data['perPage'] * $page;

        return $data;
    }

    public function findSell() {
        abort_if(Gate::denies('access_sells'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $sell = SellsModel::with('customer')->where('shop_id', $this->shop_id)->orderBy('sell_invoice_number', 'desc')->where(function($query) use ($search){
                $query->where('sell_invoice_number','LIKE',"%$search%")
                ;
            })->get()->groupBy('sell_invoice_number', );
        }else{
            $sell  = SellsModel::get()
                ->groupBy('sell_invoice_number', );
        }

        $sells = $sell->count();

        $data['total'] = $sells;
        $data['perPage'] = $sells;
        $data['lastPage'] = 1;
        $data['sells'] = $sells !== 0 ? $sell : [];
        $data['from'] = $sells !== 0 ? 1 : 0;
        $data['to'] = $sells !== 0 ? $sells : 0;

        return $data;
    }

    public function findSellsByCustomer($id){
        abort_if(Gate::denies('access_sells'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        return SellsModel::where('customer_id', $id)->where('shop_id', $this->shop_id)->get()->count();
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
        abort_if(Gate::denies('create_sells'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $last_sell = SellsModel::where('shop_id', $this->shop_id)->latest()->pluck('sell_id')->first();
        $sell_id = $last_sell + 1;
        $productLists = $request->products;
        $tax = Shop::where('id', $this->shop_id)->pluck('tax')->first();
        $sell_invoice ='BI-'.str_pad((string)$sell_id,5,0, STR_PAD_LEFT);

        foreach ($productLists as $item){
            $tax_amount = (float) number_format($item['price'] * ($tax/100), 2, '.');
            $profit = (float) number_format($item['price'] - ($item['product']['purchase'] * $item['quantity']), 2, '.');

            $sell = SellsModel::create([
                'sell_id'   =>  $sell_id,
                'sell_Invoice_number'   =>  $sell_invoice,
                'shop_id'   =>  $this->shop_id,
                'customer_id'   =>  $request->customer_id,
                'product_id'   =>  $item['product']['id'],
                'category_id'   =>  $item['product']['category']['id'],
                'brand_id'   =>  $item['product']['brand']['id'],
                'unit_id'   =>  $item['product']['unit']['id'],
                'purchase_price'   =>  $item['product']['purchase'],
                'quantity'   =>  $item['quantity'],
                'sell_on'   =>  $item['price'],
                'tax_amount'   =>  $tax_amount,
                'profit'   =>  $profit,

            ]);

            if($sell){
                $productNeedToUpdate = ProductModel::where('shop_id', $this->shop_id)->where('id', $item['product']['id'])->first();
                $stock = $productNeedToUpdate->stock - $item['quantity'];
                if($stock > 0){
                    $enabled = true;
                }else{
                    $enabled = false;
                }
                $productNeedToUpdate->update([
                    'sold'  =>  $productNeedToUpdate->sold + $item['quantity'],
                    'stock' =>  $stock,
                    'enabled'   =>  $enabled
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        abort_if(Gate::denies('access_sells'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $sell = SellsModel::with('product', 'category', 'brand', 'unit', 'customer')->where('shop_id', $this->shop_id)->where('sell_invoice_number', $id)->get();
        return SellResource::collection($sell);
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

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        abort_if(Gate::denies('delete_sells'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $sells = SellsModel::where('shop_id', $this->shop_id)->where('sell_invoice_number', $id)->get();
        foreach ($sells as $sell){
            abort_if($this->shop_id !== $sell->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');
            $sell->forceDelete();
        }
    }
}
