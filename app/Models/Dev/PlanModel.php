<?php

namespace App\Models\Dev;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class PlanModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'plans';

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'name',
        'slug',
        'monthlyPrice',
        'discount',
        'yearlyPrice',
        'created_at',
        'updated_at',
    ];

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function features()
    {
        return $this->belongsToMany(PlanFeatureModel::class);
    }

}
