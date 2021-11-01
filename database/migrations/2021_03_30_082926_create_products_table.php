<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('image')->nullable();
            $table->longText('description')->nullable();
            $table->foreignId('shop_id')->constrained()->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('product_categories', 'id');
            $table->foreignId('unit_id')->constrained('product_units', 'id');
            $table->foreignId('brand_id')->constrained('product_brands', 'id');
            $table->boolean('enabled')->default(0);
            $table->string('sku')->nullable();
            $table->float('purchase_price')->nullable();
            $table->float('selling_price')->default(0.00);
            $table->unsignedBigInteger('stock')->default(0);
            $table->unsignedBigInteger('sold')->default(0);
            $table->string('barcode')->nullable();
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
        Schema::dropIfExists('products');
    }
}
