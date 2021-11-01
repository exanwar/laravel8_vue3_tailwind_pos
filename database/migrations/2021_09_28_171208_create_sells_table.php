<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sells', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sell_id');
            $table->string('sell_Invoice_number');
            $table->foreignId('shop_id')->constrained()->cascadeOnDelete();
            $table->foreignId('customer_id')->nullable()->constrained();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('category_id')->constrained('product_categories', 'id');
            $table->foreignId('brand_id')->constrained('product_brands', 'id');
            $table->foreignId('unit_id')->constrained('product_units', 'id');
            $table->float('purchase_price');
            $table->unsignedBigInteger('quantity');
            $table->float('sell_on');
            $table->float('tax_amount');
            $table->float('profit');
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
        Schema::dropIfExists('sells');
    }
}
