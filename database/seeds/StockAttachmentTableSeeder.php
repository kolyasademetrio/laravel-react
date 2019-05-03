<?php

use Illuminate\Database\Seeder;

class StockAttachmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stock_attachments')->insert([
            [
                'stock_id' => 1,
                'thumbnail' => '/uploads/2018/10/400x200.jpg',
                'attachment' => '/uploads/2018/10/400x200.jpg',
                'type' => 'image',
            ],
            [
                'stock_id' => 1,
                'thumbnail' => '/uploads/2018/10/977x550_3.jpg',
                'type' => 'video',
                'attachment' => 'https://www.youtube.com/watch?v=DzwkcbTQ7ZE&list=RD2-MBfn8XjIU&index=20',
            ],
            [
                'stock_id' => 2,
                'thumbnail' => '/uploads/2018/10/400х200_1.jpg',
                'type' => 'image',
                'attachment' => '/uploads/2018/10/400х200_1.jpg',
            ],
            [
                'stock_id' => 2,
                'thumbnail' => '/uploads/2018/10/s_8_marta_02.jpg',
                'type' => 'image',
                'attachment' => '/uploads/2018/10/s_8_marta_02.jpg',
            ],
            [
                'stock_id' => 3,
                'thumbnail' => '/uploads/2018/10/s_8_marta_02.jpg',
                'type' => 'image',
                'attachment' => '/uploads/2018/10/s_8_marta_02.jpg',
            ],
        ]);
    }
}
