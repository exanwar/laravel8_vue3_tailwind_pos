<?php

namespace App\Models;

use App\Models\Admin\Role;
use App\Models\Admin\Shop;
use App\Models\Dev\Permission;
use Carbon\Carbon;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;
use \DateTimeInterface;

class User extends Authenticatable
{
    use HasFactory, SoftDeletes, Notifiable, HasApiTokens;

    public $table = 'users';

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $fillable = [
        'shop_owner',
        'shop_id',
        'profile_picture',
        'first_name',
        'last_name',
        'username',
        'street_address_1',
        'street_address_2',
        'mobile_number',
        'emergency_contact',
        'nid_number',
        'email',
        'pin_code',
        'city',
        'password',
        'facebook_url',
        'twitter_url',
        'linkedin_url',
        'created_at',
        'updated_at',
        'deleted_at',
        'remember_token',
        'email_verified_at',
    ];

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('m-d-Y H:i:s');
    }

    public function getEmailVerifiedAtAttribute($value)
    {
        return $value ? Carbon::createFromFormat('m-d-Y H:i:s', $value)
            ->format(config('panel.date_format') . ' '. config('panel.time_format')) : null;
    }

    public function setEmailVerifiedAtAttribute($value)
    {
        $this->attributes['email_verified_at'] = $value ?
            Carbon::createFromFormat(config('panel.date_format') . ' ' . config('panel.time_format'), $value)
                ->format('d-m-Y H:i:s') : null;
    }

    public function setPasswordAttribute($input)
    {
        if($input){
            $this->attributes['password'] = app('hash')->needsRehash($input) ? Hash::make($input) :$input;
        }
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function getIsDeveloperAttribute()
    {
        return $this->roles()->where('title','Developer')->exists();
    }

    public function shop(){
        return $this->hasMany(Shop::class, 'id', 'shop_id');
    }
}
