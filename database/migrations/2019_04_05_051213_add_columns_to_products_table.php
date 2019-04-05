<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('tab_bg', 255);
        });

        DB::table('products')->where('id', 1)->update(Array(
            'tab_bg' => '/uploads/2018/08/Nastojka-pri-miome-matki.jpg',
        ));

        DB::table('products')->where('id', 2)->update(Array(
            'tab_bg' => '/uploads/2018/08/1_1276029262_C7E5EBE5EDFBE920F7E0E9203035.jpg',
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            //
        });
    }
}
