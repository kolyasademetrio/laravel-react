<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnToDoyouknowsStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('doyouknows', function (Blueprint $table) {
            $table->text('excerpt');
        });

        DB::table('doyouknows')->where('id', 1)->update(Array(
            'excerpt' => '<span style="font-size: 14pt;">Скидка 20% на весь ассортимент продукции представленной на сайте, при оформлении заказа до 07.10.2018. Акционные цены приурочены ко всемирному дню учителя. Приятных покупок. Будьте красивыми.&nbsp;</span>',
        ));

        DB::table('doyouknows')->where('id', 2)->update(Array(
            'excerpt' => '<span style="font-size: 14pt;">Скидка 20% на весь ассортимент продукции представленной на сайте, при оформлении заказа до 07.10.2018. Акционные цены приурочены ко всемирному дню учителя. Приятных покупок. Будьте красивыми.</span>',
        ));

        Schema::table('stocks', function (Blueprint $table) {
            $table->text('excerpt');

        });

        DB::table('stocks')->where('id', 1)->update(Array(
            'excerpt' => '<span style="font-size: 14pt;">8% скидки ко дню 8 Марта</span><span style="font-size: 14pt;">Покупая любую косметику ТМ "Alga Ph" и "Fabio Visconti" в период с 1 по 10 марта 2019 г. вы обязательно получаете скидку 8%.</span><span style="font-size: 14pt;">Без каких либо скрытых условий, которые обычно написаны "микро шрифтом" после звездочки * )))</span><span style="font-size: 14pt;">Любая покупка на сайте в обозначенный период - гарантированная экономия 8%.</span><span style="font-size: 14pt;">Приятных покупок! Будьте красивыми !!!</span>',
        ));

        DB::table('stocks')->where('id', 2)->update(Array(
            'excerpt' => 'Скидка 20% на весь ассортимент продукции представленной на сайте, при оформлении заказа до 07.10.2018. Акционные цены приурочены ко всемирному дню учителя. Приятных покупок. Будьте красивыми. <br><br>Скидка 20% на весь ассортимент продукции представленной на сайте, при оформлении заказа до 07.10.2018. Акционные цены приурочены ко всемирному дню учителя. Приятных покупок. Будьте красивыми.',
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('doyouknows', function (Blueprint $table) {
            //
        });

        Schema::table('stocks', function (Blueprint $table) {
            //
        });
    }
}
