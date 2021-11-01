<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class SellsModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'sells';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];


    protected $fillable = [
        'sell_id',
        'sell_Invoice_number',
        'shop_id',
        'customer_id',
        'product_id',
        'category_id',
        'brand_id',
        'unit_id',
        'purchase_price',
        'quantity',
        'sell_on',
        'tax_amount',
        'profit',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public $sortable = [
        'sell_id',
        'customer_id',
        'sell_on',
        'created_at'
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

    public function customer(){
        return $this->belongsTo(CustomerModel::class, 'customer_id', 'id');
    }
}
