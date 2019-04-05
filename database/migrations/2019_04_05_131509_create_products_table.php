<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id')->unsigned();
            $table->string('slug', 200);
            $table->text('title');
            $table->text('excerpt');
            $table->longText('content');
            $table->text('descrtitle');
            $table->text('descrtext');
            $table->text('descr');
            $table->decimal('regular_price', 10, 0)->default(0);
            $table->decimal('sale_price', 10, 0)->default(0);
            $table->decimal('discount', 5, 2)->default(0.00);
            $table->string('currency', 20);
            $table->string('image', 255);
            $table->tinyInteger('is_reccomended')->default(0);
            $table->longText('product_description_tab_content');
            $table->longText('product_ingredients_tab_content');
            $table->longText('product_usage_tab_content');
            $table->string('tab_bg', 255);

/*`id` bigint(20) NOT NULL,
`slug` varchar(200) NOT NULL,
`title` text NOT NULL,
`excerpt` text NOT NULL,
`content` longtext NOT NULL,
`descrtitle` text NOT NULL,
`descrtext` text NOT NULL,
`descr` text NOT NULL,
`regular_price` decimal(10,0) NOT NULL,
`sale_price` decimal(10,0) DEFAULT 0,
`discount` decimal(5,2) NOT NULL DEFAULT 0.00,
`currency` varchar(20) NOT NULL,
`image` varchar(255) NOT NULL,
`is_reccomended` tinyint(1) NOT NULL DEFAULT 0,
`product_description_tab_content` longtext NOT NULL,
`product_ingredients_tab_content` longtext NOT NULL,
`product_usage_tab_content` longtext NOT NULL,
`tab_bg` varchar(255) NOT NULL*/
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
