<?php

use Illuminate\Database\Seeder;

class Samo7FinancialBankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('samo7_financial_bank')->delete();
        DB::table('samo7_financial_bank')->insert([[
            'bank_uid' => 1,
            'bank_typer' => 'R',
            'bank_description' => 'Receita gerada pelo Seed',
            'bank_value' => 1000.00,
            'bank_date' => date('Y-m-d'),
            'bank_paid' => 'N',
            'bank_repeat' => 'N',
            'bank_repeat_system' => 'N',
            'bank_repetition' => 1,
            'bank_date_add' => date('Y-m-d H:i:s'),
            'bank_user_uid' => 1,
        ],[
            'bank_uid' => 2,
            'bank_typer' => 'D',
            'bank_description' => 'Despesa gerada pelo Seed',
            'bank_value' => 1500.00,
            'bank_date' => date('Y-m-d'),
            'bank_paid' => 'N',
            'bank_repeat' => 'N',
            'bank_repeat_system' => 'N',
            'bank_repetition' => 1,
            'bank_date_add' => date('Y-m-d H:i:s'),
            'bank_user_uid' => 1,
        ]]);
    }
}
