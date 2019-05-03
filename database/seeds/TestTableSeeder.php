<?php

use Illuminate\Database\Seeder;

class TestTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('test')->insert(array(
            array(
                'title' => 'First test title',
                'content' => 'First test content'
            ),
            array(
                'title' => 'Second test title',
                'content' => 'Second test content',
            )
        ));
    }
}
