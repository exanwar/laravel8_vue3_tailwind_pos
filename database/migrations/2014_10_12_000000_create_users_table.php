<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->boolean('shop_owner')->default(false);
            $table->unsignedBigInteger('shop_id')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('username');
            $table->string('street_address_1');
            $table->string('street_address_2')->nullable();
            $table->string('mobile_number');
            $table->string('emergency_contact');
            $table->string('nid_number');
            $table->string('email');
            $table->string('pin_code');
            $table->string('city');
            $table->string('password');
            $table->string('facebook_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
