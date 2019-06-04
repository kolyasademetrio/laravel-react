<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCurrenciesRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies_rates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('currencyFrom', 100);
            $table->string('currencyTo', 100);
            $table->timestamp('rateDate')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->decimal('rate', 19, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('currencies_rate');
    }
}
