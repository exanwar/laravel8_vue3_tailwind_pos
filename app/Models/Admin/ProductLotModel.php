<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class ProductLotModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'product_lots';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $fillable = [
        'vendor_id',
        'shop_id',
        'bill_number',
        'invoice_number',
        'product_id',
        'category_id',
        'brand_id',
        'unit_id',
        'purchase',
        'buy_on',
        'transportation_cost',
        'labour_cost',
        'other_cost',
        'overhead',
        'buy_on_cumulative',
        'profit_percent',
        'sell_on',
        'qtn',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function product(){
        return $this->hasOne(ProductModel::class, 'id', 'product_id');
    }

    public function category(){
        return $this->belongsTo(ProductCategoryModel::class, 'category_id', 'id');
    }

    public function unit(){
        return $this->belongsTo(ProductUnitModel::class, 'unit_id', 'id');
    }

    public function brand(){
        return $this->belongsTo(ProductBrandModel::class, 'brand_id', 'id');
    }

    public function vendor(){
        return $this->belongsTo(VendorModel::class, 'vendor_id', 'id');
    }
}
