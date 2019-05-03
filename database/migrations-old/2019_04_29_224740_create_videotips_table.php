<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideotipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videotips', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id');
            $table->text('title');
            $table->string('image', 255);
            $table->string('video', 255);
            $table->string('slug', 200)->nullable($value = false)->unique();
            $table->timestamps();
        });

        DB::statement('INSERT INTO `videotips` (`title`, `image`, `video`, `slug`) VALUES (\'Массаж лица за 10 минут - Базовая схема самомассажа "Ренессанс"\', \'/uploads/2018/10/video_size_5.jpg\', \'https://www.youtube.com/watch?v=4PgWyVtP0jo\', \'массаж-лица-за-10-минут\'), (\'Крем с SPF - Какие фильтры вреднее, химические или физические?\', \'/uploads/2018/10/video_size_4.jpg\', \'https://www.youtube.com/watch?v=mtrBq1AZVag\', \'крем-с-SPF\'), (\'Почему после массажа Появляются Прыщи\', \'/uploads/2018/10/video_size_3.jpg\', \'https://www.youtube.com/watch?v=A73wanFxw40\', \'почему-после-массажа-появляются-прыщи\'), (\'Почему вашей коже нужен Защитный Крем\', \'/uploads/2018/10/video_size_2.jpg\', \'https://www.youtube.com/watch?v=m7wOu3PIJJA\', \'почему-вашей-коже-нужен-защитный-крем\'), (\'О компании Alga Ph\', \'/uploads/2018/08/video_014.jpg\', \'https://www.youtube.com/watch?v=hD5vxRg8P_I\', \'о-компании-alga-ph\')');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videotips');
    }
}
