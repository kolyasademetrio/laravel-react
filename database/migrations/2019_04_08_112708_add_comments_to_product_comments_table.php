<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCommentsToProductCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('product_comments', function (Blueprint $table) {
            DB::statement('INSERT INTO `product_comments` (`id`, `product_slug`, `product_id`, `user_id`, `created_at`, `updated_at`, `content`) VALUES
(1, \'крем-для-рук-и-ногтей\', 1, 1, \'2019-04-08 10:15:31\', \'2019-04-08 04:15:31\', \'Это очень хороший крем\'),
(2, \'крем-для-рук-и-ногтей\', 1, 2, \'2019-04-08 10:25:31\', \'2019-04-08 10:25:31\', \'Крем вообще супер.\'),
(3, \'крем-для-век\', 2, 10, \'2019-04-04 10:25:31\', \'2019-04-04 10:25:31\', \'Веки прям молодеют на глазах.\');');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_comments', function (Blueprint $table) {
            //
        });
    }
}
