<?php

use Illuminate\Database\Seeder;

class Samo7GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('samo7_group')->delete();
        DB::table('samo7_group')->insert([
            'group_uid' => 1,
            'group_name' => 'Administradores',
            'group_date_add' => date('Y-m-d H:i:s'),
        ]);
    }
}
