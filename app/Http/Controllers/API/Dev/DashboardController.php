<?php

namespace App\Http\Controllers\API\Dev;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\SellResource;
use App\Models\Admin\SellsModel;
use App\Models\Admin\Shop;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function customersCount(){
        $dbData = User::select(
            DB::raw('year(created_at) as year'),
            DB::raw('MONTHNAME(created_at) as month'),
            DB::raw('count(*) as customers'),
        )
            ->wherehas('roles', function($query){
                $query->where('title', 'Owner');
            })
            ->whereYear('created_at', Carbon::now()->year)
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

    public function shopsCount(){
        $dbData = Shop::select(
            DB::raw('year(created_at) as year'),
            DB::raw('MONTHNAME(created_at) as month'),
            DB::raw('count(*) as shops'),
        )
            ->whereYear('created_at', Carbon::now()->year)
            ->orderBy('created_at')
            ->groupBy('month')
            ->get();

        $months = array();
        $shops = array();
        foreach ($dbData as $data){
            array_push($months, $data->month);
            array_push($shops, $data->shops);
        }

        return response([
            'year' => Carbon::now()->year,
            'months'    =>  $months,
            'shops' =>  $shops
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
            ->where('shop_id', 1)
            ->groupBy('year')
            ->groupBy('month')
            ->get();

        $months = array();
        $sells = array();
        foreach ($dbData as $data){
            array_push($months, $data->month);
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
            if(!in_array($value, $months)){
                array_insert($months, $key ,$value);
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
            ->where('shop_id', 1)
            ->get();

        $previous_month_earning = SellsModel::select(
            DB::raw('round(sum(sell_on), 2) as sells'),
            DB::raw('round(sum(tax_amount), 2) as tax'),
            DB::raw('round(sum(profit), 2) as profit'),
        )
            ->whereMonth('created_at', Carbon::now()->month - 1)
            ->where('shop_id', 1)
            ->get();

        return response([
            'current' =>  $current_month_earning,
            'previous' =>  $previous_month_earning
        ]);
    }

    public function recentSells(){
        $sells = SellsModel::with('product', 'unit')->orderBy('id', 'desc')->take(10)->get();
        return SellResource::collection($sells);
    }
}
