<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class ProductModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'products';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $fillable = [
        'title',
        'slug',
        'sku',
        'barcode',
        'image',
        'description',
        'shop_id',
        'category_id',
        'unit_id',
        'brand_id',
        'enabled',
        'purchase_price',
        'selling_price',
        'stock',
        'sold',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function lots(){
        return $this->hasMany(ProductLotModel::class, 'product_id', 'id');
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

    public function scopeWithFilters($query)
    {
        return $query
            ->when(count(request()->input('categories', [])), function ($query) {
            $query->whereIn('category_id', request()->input('categories'));
            })
            ->when(count(request()->input('brands', [])), function ($query) {
                $query->whereIn('brand_id', request()->input('brands'));
            })->when(count(request()->input('units', [])), function ($query) {
                $query->whereIn('brand_id', request()->input('units'));
            })
            ->when(count(request()->input('prices', [])), function ($query) {
                $query->whereBetween('selling_price', [request()->input('prices')[0], request()->input('prices')[1]]);
            })
            ->when(count(request()->input('available', [])), function ($query) {
                $query->whereIn('enabled', request()->input('available'));
            })
            ;
    }
}
