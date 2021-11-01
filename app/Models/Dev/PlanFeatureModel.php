<?php

namespace App\Models\Dev;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \DateTimeInterface;

class PlanFeatureModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'plan_features';

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'name',
        'slug',
        'created_at',
        'updated_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-m-Y H:i:s');
    }

    public function plan()
    {
        return $this->belongsToMany(PlanModel::class);
    }
}
