<?php

use Illuminate\Database\Seeder;

class Samo7UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('samo7_user')->delete();
        DB::table('samo7_user')->insert([
            'user_uid' => 1,
            'user_name' => 'Bruno Alves da Silva',
            'user_alias' => 'Bruno',
            'user_mail' => 'contato@alvesbruno.com',
            'user_pass' => bcrypt('senha'),
            'user_admin' => 'YES',
            'user_photo' => '/photo',
            'user_cpf' => '41051161851',
            'user_date_add' => date('Y-m-d H:i:s'),
            'user_group_uid' => 1,
        ]);
    }
}
