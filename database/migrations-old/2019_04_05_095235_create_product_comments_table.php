<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_comments', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id')->unsigned();
            $table->string('product_slug', 200);
            $table->integer('product_id')->unsigned();
            $table->integer('user_id')->unsigned();
            $table->timestamps();
            $table->longText('content');
        });

        /*Schema::table('product_comments', function(Blueprint $table) {
            $table->foreign('product_slug')->references('slug')->on('products')->unsigned()->index();
            $table->foreign('product_id')->references('id')->on('products')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->unsigned()->index();
        });*/
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_comments');
    }
}
