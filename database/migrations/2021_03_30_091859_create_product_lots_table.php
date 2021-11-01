<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductLotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_lots', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vendor_id')->constrained();
            $table->foreignId('shop_id')->constrained()->cascadeOnDelete();
            $table->string('bill_number')->nullable();
            $table->string('invoice_number')->nullable();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('product_categories', 'id');
            $table->foreignId('unit_id')->constrained('product_units', 'id');
            $table->foreignId('brand_id')->constrained('product_brands', 'id');
            $table->double('purchase');
            $table->integer('qtn');
            $table->double('buy_on');
            $table->double('overhead')->nullable();
            $table->float('transportation_cost')->nullable();
            $table->float('labour_cost')->nullable();
            $table->float('other_cost')->nullable();
            $table->double('buy_on_cumulative');
            $table->double('profit_percent')->nullable();
            $table->double('sell_on');
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
        Schema::dropIfExists('product_lots');
    }
}
