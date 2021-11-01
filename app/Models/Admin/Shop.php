<?php

namespace App\Models\Admin;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class Shop extends Model
{
    use HasFactory, SoftDeletes, HasFactory;

    public $table = 'shops';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $fillable = [
        'logo',
        'name',
        'owner_id',
        'shop_no',
        'road_no',
        'area_name',
        'city',
        'district',
        'division',
        'zip',
        'tax',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id', 'id');
    }

    public function customers(){
        return $this->hasMany(CustomerModel::class, 'shop_id', 'id');
    }
}
