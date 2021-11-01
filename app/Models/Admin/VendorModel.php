<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class VendorModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'vendors';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];


    protected $fillable = [
        'shop_id',
        'company_logo',
        'company_name',
        'company_address',
        'contact_person_image',
        'contact_person_name',
        'contact_person_position',
        'contact_person_phone',
        'contact_person_email',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }
}
