<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(Samo7GroupSeeder::class);
        $this->call(Samo7UserSeeder::class);
        $this->call(Samo7FinancialBankSeeder::class);
    }
}
