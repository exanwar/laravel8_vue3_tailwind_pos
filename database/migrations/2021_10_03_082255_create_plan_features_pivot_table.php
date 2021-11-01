<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlanFeaturesPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_feature_model_plan_model', function (Blueprint $table) {
            $table->foreignId('plan_model_id')->constrained('plans', 'id')->cascadeOnDelete();
            $table->foreignId('plan_feature_model_id')->constrained('plan_features', 'id')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plan_feature_model_plan_model');
    }
}
