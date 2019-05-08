<?php

use Illuminate\Database\Seeder;

class DoyouknowAttachmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('doyouknow_attachments')->insert([
            [
                'doyouknow_id' => 1,
                'thumbnail' => '/uploads/2018/10/977x550_2-825x510.jpg',
                'attachment' => 'https://www.youtube.com/watch?time_continue=1&v=DzwkcbTQ7ZE',
                'type' => 'video',
                'use_as_featured' => 1,
            ],
            [
                'doyouknow_id' => 2,
                'thumbnail' => '/uploads/2018/10/977x550-825x510.jpg',
                'attachment' => '/uploads/2018/10/977x550-825x510.jpg',
                'type' => 'image',
                'use_as_featured' => 1,
            ],
            [
                'doyouknow_id' => 2,
                'thumbnail' => '/uploads/2018/10/977x550_2-825x510.jpg',
                'attachment' => '/uploads/2018/10/977x550_2-825x510.jpg',
                'type' => 'image',
                'use_as_featured' => 0,
            ],
            [
                'doyouknow_id' => 2,
                'thumbnail' => '/uploads/2018/10/977x550_3-825x510.jpg',
                'attachment' => '/uploads/2018/10/977x550_3-825x510.jpg',
                'type' => 'image',
                'use_as_featured' => 0,
            ],
        ]);
    }
}
