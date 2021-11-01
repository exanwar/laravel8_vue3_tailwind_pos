<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\SellResource;
use App\Models\Admin\CustomerModel;
use App\Models\Admin\SellsModel;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    private $shop_id;
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->shop_id = Auth::user()->shop_id;
            return $next($request);
        });
    }

    public function sellChart(){
        $dbData = SellsModel::select(
            DB::raw('year(created_at) as year'),
            DB::raw('MONTHNAME(created_at) as month'),
            DB::raw('count(*) as customers'),
        )
//            ->where(DB::raw('date(created_at)'), '>=', "2020-01-01")
            ->whereYear('created_at', Carbon::now()->year)
            ->where('shop_id', 1)
            ->groupBy('month')
            ->get();

        return $dbData;
    }

    public function customersCount(){
        $dbData = CustomerModel::select(
            DB::raw('year(created_at) as year'),
            DB::raw('MONTHNAME(created_at) as month'),
            DB::raw('count(*) as customers'),
        )
            ->whereYear('created_at', Carbon::now()->year)
            ->where('shop_id', $this->shop_id)
            ->orderBy('created_at')
            ->groupBy('month')
            ->get();

        $months = array();
        $customers = array();
        foreach ($dbData as $data){
            array_push($months, $data->month);
            array_push($customers, $data->customers);
        }

        return response([
            'year' => Carbon::now()->year,
            'months'    =>  $months,
            'customers' =>  $customers
        ]);
    }

    public function sellsChart(){
        $dbData = SellsModel::select(
            DB::raw('year(created_at) as year'),
            DB::raw('MONTHNAME(created_at) as month'),
            DB::raw('count(*) as sells'),
        )
            ->whereYear('created_at', Carbon::now()->year)
            ->orderBy('created_at')
            ->where('shop_id', $this->shop_id)
            ->groupBy('year')
            ->groupBy('month')
            ->get();

        $months = array();
        $sells = array();
        foreach ($dbData as $data){
            array_push($months, substr($data->month, 0, 3));
            array_push($sells, $data->sells);
        }

        function array_insert(&$array, $position, $insert)
        {
            if (is_int($position)) {
                array_splice($array, $position, 0, $insert);
            } else {
                $pos   = array_search($position, array_keys($array));
                $array = array_merge(
                    array_slice($array, 0, $pos),
                    $insert,
                    array_slice($array, $pos)
                );
            }
        }


        $months_all = array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        foreach ($months_all as $key=>$value){
            if(!in_array(substr($value, 0, 3), $months)){
                array_insert($months, $key ,substr($value, 0, 3));
                array_insert($sells, $key, 0);
            }
        }



        return response([
            'year' => Carbon::now()->year,
            'months'    =>  $months,
            'sells' =>  $sells
        ]);
    }

    public function earnings(){
        $current_month_earning = SellsModel::select(
            DB::raw('round(sum(sell_on), 2) as sells'),
            DB::raw('round(sum(tax_amount), 2) as tax'),
            DB::raw('round(sum(profit), 2) as profit'),
        )
            ->whereMonth('created_at', Carbon::now()->month)
            ->where('shop_id', $this->shop_id)
            ->get();

        $previous_month_earning = SellsModel::select(
            DB::raw('round(sum(sell_on), 2) as sells'),
            DB::raw('round(sum(tax_amount), 2) as tax'),
            DB::raw('round(sum(profit), 2) as profit'),
        )
            ->whereMonth('created_at', Carbon::now()->month - 1)
            ->where('shop_id', $this->shop_id)
            ->get();

        return response([
            'current' =>  $current_month_earning,
            'previous' =>  $previous_month_earning
        ]);
    }

    public function recentSells(){
        $sells = SellsModel::with('product', 'unit')
            ->orderBy('id', 'desc')
            ->where('shop_id', $this->shop_id)
            ->take(5)
            ->get();

        return SellResource::collection($sells);
    }
}
