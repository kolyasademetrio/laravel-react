<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->text('title');
            $table->longText('content');
            $table->dateTime('date')->default(DB::raw('CURRENT_TIMESTAMP'));
        });

        DB::statement('INSERT INTO `stocks` (`title`, `content`, `created_at`, `updated_at`) 
VALUES 
(\'С 01.03 по 10.03 скидка на весь ассортимент 8%\', \'<span style="font-size: 14pt;">8% скидки ко дню 8 Марта</span><span style="font-size: 14pt;">Покупая любую косметику ТМ "Alga Ph" и "Fabio Visconti" в период с 1 по 10 марта 2019 г. вы обязательно получаете скидку 8%.</span><span style="font-size: 14pt;">Без каких либо скрытых условий, которые обычно написаны "микро шрифтом" после звездочки * )))</span><span style="font-size: 14pt;">Любая покупка на сайте в обозначенный период - гарантированная экономия 8%.</span><span style="font-size: 14pt;">Приятных покупок! Будьте красивыми !!!</span>\'), 
(\'Тестовая акция 3 с картинками\', \'Скидка 20% на весь ассортимент продукции представленной на сайте, при оформлении заказа до 07.10.2018. Акционные цены приурочены ко всемирному дню учителя. Приятных покупок. Будьте красивыми. <br><br>Скидка 20% на весь ассортимент продукции представленной на сайте, при оформлении заказа до 07.10.2018. Акционные цены приурочены ко всемирному дню учителя. Приятных покупок. Будьте красивыми.\')');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stocks');
    }
}
