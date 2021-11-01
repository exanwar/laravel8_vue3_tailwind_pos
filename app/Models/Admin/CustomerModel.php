<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class CustomerModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'customers';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];


    protected $fillable = [
        'shop_id',
        'image',
        'name',
        'phone_number',
        'email',
        'address',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function sells(){
        return $this->hasMany(SellsModel::class, 'customer_id', 'id');
    }
}
