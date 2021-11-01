<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PurchaseRequest;
use App\Http\Resources\Admin\PurchaseResource;
use App\Models\Admin\ProductLotModel;
use App\Models\Admin\ProductModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class PurchaseController extends Controller
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
        abort_if(Gate::denies('access_purchases'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $lot = ProductLotModel::with('product', 'category', 'brand', 'unit', 'vendor')->where('shop_id', $this->shop_id)->latest()->paginate(10);
        return PurchaseResource::collection($lot);
    }

    public function findPurchase() {
        abort_if(Gate::denies('access_purchases'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        if ($search = \Request::get('q')) {
            $purchaseLot = ProductLotModel::with('product', 'category', 'brand', 'unit', 'vendor')
                ->orderBy('id', 'desc')
                ->whereHas('product', function($query) use ($search){
                    $query->where('title', 'LIKE', "%$search%");
                })
                ->orWhere(function($query) use ($search){
                    $query->where('bill_number','LIKE',"%$search%")
                        ->orWhere('invoice_number','LIKE',"%$search%")
                    ;
                })
                ->paginate(10)->withQueryString();
        }

        return PurchaseResource::collection($purchaseLot);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PurchaseRequest $request)
    {
        abort_if(Gate::denies('create_purchases'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $product = ProductModel::where('id', $request->product_id)->where('shop_id', $this->shop_id)->first();

//        if($product->purchase_price === null)
//            $average_purchase_price = $request->buy_on_cumulative;
//        else
//            $average_purchase_price = ($product->purchase_price + $request->buy_on_cumulative)/2;


        $lotCreate = ProductLotModel::create([
            'vendor_id'             =>  $request->vendor_id,
            'shop_id'               =>  $this->shop_id,
            'bill_number'           =>  $request->bill_number,
            'invoice_number'        =>  $request->invoice_number,
            'product_id'            =>  $request->product_id,
            'category_id'           =>  $request->category_id,
            'brand_id'              =>  $request->brand_id,
            'unit_id'               =>  $request->unit_id,
            'purchase'              =>  $request->purchase,
            'buy_on'                =>  $request->buy_on,
            'transportation_cost'   =>  $request->transport_cost,
            'labour_cost'           =>  $request->labour_cost,
            'other_cost'            =>  $request->other_costs,
            'buy_on_cumulative'     =>  $request->buy_on_cumulative,
            'overhead'              =>  $request->overhead,
            'profit_percent'        =>  $request->profit_percent,
            'sell_on'               =>  $request->sell_on,
            'qtn'                   =>  $request->qtn,
        ]);


        if($lotCreate){

            $cumulative_purchase_price = $this->getCumulativePurchasePrice($request->product_id, $request->buy_on_cumulative);

            $stock = $product->stock + $request->qtn;
            if($stock > 0){
                $enabled = true;
            }

            $product->update([
                'purchase_price'    =>  $cumulative_purchase_price,
                'selling_price'     =>  $request->sell_on,
                'stock'             =>  $stock,
                'enabled'           =>  $enabled
            ]);
        }

        return $lotCreate;
    }

    public function getCumulativePurchasePrice($productId, $currentPrice){
        $product_lots = ProductLotModel::where([
            'shop_id' => $this->shop_id,
            'product_id' => $productId
        ]);
        $num_of_lots = $product_lots->count();
        $sum_of_lots_cumulative_purchase_price_including_current = $product_lots->sum('buy_on_cumulative') + $currentPrice;
        return $sum_of_lots_cumulative_purchase_price_including_current / ($num_of_lots + 1);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        abort_if(Gate::denies('access_purchases'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $lot = ProductLotModel::with('product', 'category', 'brand', 'unit', 'vendor')->where('id', $id)->get();
        abort_if($this->shop_id !== $lot[0]->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        return PurchaseResource::collection($lot);
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
        abort_if(Gate::denies('edit_purchases'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $purchaseNeedsToUpdate = ProductLotModel::find($id);
        $productNeedsUpdated = ProductModel::where('id', $purchaseNeedsToUpdate->product_id)->where('shop_id', $this->shop_id)->first();
        abort_if($this->shop_id !== $purchaseNeedsToUpdate->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $lotUpdate = $purchaseNeedsToUpdate->update([
            'vendor_id'             =>  $request->vendor_id,
            'shop_id'               =>  $this->shop_id,
            'bill_number'           =>  $request->bill_number,
            'invoice_number'        =>  $request->invoice_number,
            'product_id'            =>  $request->product_id,
            'category_id'           =>  $request->category_id,
            'brand_id'              =>  $request->brand_id,
            'unit_id'               =>  $request->unit_id,
            'purchase'              =>  $request->purchase,
            'buy_on'                =>  $request->buy_on,
            'transportation_cost'   =>  $request->transport_cost,
            'labour_cost'           =>  $request->labour_cost,
            'other_cost'            =>  $request->other_costs,
            'buy_on_cumulative'     =>  $request->buy_on_cumulative,
            'overhead'              =>  $request->overhead,
            'profit_percent'        =>  $request->profit_percent,
            'sell_on'               =>  $request->sell_on,
            'qtn'                   =>  $request->qtn,
        ]);

        if($lotUpdate){
            $product_lots = ProductLotModel::where([
                'shop_id' => $this->shop_id,
                'product_id' => $purchaseNeedsToUpdate->product_id,
            ])->where('id', '!=', $id )->get();
            $num_of_lots = $product_lots->count();

            $sum_of_lots_cumulative_purchase_price = $product_lots->sum('buy_on_cumulative') + $request->buy_on_cumulative;
            $presentConditionOfBuy = $sum_of_lots_cumulative_purchase_price / ($num_of_lots + 1);
            $presentConditionOfStock = $product_lots->sum('qtn') + $request->qtn;

            if($presentConditionOfStock > 0){
                $enabled = true;
            }else{
                $enabled = false;
            }

            $lastPurchase = ProductLotModel::where([
                'shop_id' => $this->shop_id,
                'product_id' => $purchaseNeedsToUpdate->product_id,
            ])->latest()->first();

            if($lastPurchase->id === $purchaseNeedsToUpdate->id){
                $presentConditionOfSell = $request->sell_on;
            }else{
                $presentConditionOfSell = $lastPurchase->sell_on;
            }

            $productNeedsUpdated->update([
                'purchase_price'    =>  $presentConditionOfBuy,
                'selling_price'     =>  $presentConditionOfSell,
                'stock'             =>  $presentConditionOfStock,
                'enabled'           =>  $enabled
            ]);
        }



        return $lotUpdate;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        abort_if(Gate::denies('delete_purchases'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $lot = ProductLotModel::find($id);
        abort_if($this->shop_id !== $lot->shop_id, Response::HTTP_FORBIDDEN, '403 Forbidden');

        $product = $lot;

        $productNeedsUpdated = ProductModel::where('id', $lot->product_id)->where('shop_id', $this->shop_id)->first();


        $delete = $lot->forceDelete();

        if($delete){
            $product_lots = ProductLotModel::where([
                'shop_id' => $this->shop_id,
                'product_id' => $product->product_id,
            ])->get();

            $num_of_lots = $product_lots->count();

            if($num_of_lots === 0){
                $productNeedsUpdated->update([
                    'purchase_price'    =>  0,
                    'selling_price'     =>  0,
                    'stock'             =>  0,
                    'enabled'           =>  false
                ]);
            }else{
                $sum_of_lots_cumulative_purchase_price = $product_lots->sum('buy_on_cumulative');
                $presentConditionOfBuy = $sum_of_lots_cumulative_purchase_price / $num_of_lots ;
                $presentConditionOfStock = $product_lots->sum('qtn');
                $lastPurchase = ProductLotModel::where([
                    'shop_id' => $this->shop_id,
                    'product_id' => $product->product_id,
                ])->latest()->first();
                $presentConditionOfSell = $lastPurchase->sell_on;

                if($presentConditionOfStock > 0){
                    $enabled = true;
                }else{
                    $enabled = false;
                }


                $productNeedsUpdated->update([
                    'purchase_price'    =>  $presentConditionOfBuy,
                    'selling_price'     =>  $presentConditionOfSell,
                    'stock'             =>  $presentConditionOfStock,
                    'enabled'           =>  $enabled
                ]);
            }
        }
    }
}
