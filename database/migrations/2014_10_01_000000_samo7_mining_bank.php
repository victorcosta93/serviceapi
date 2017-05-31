<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7MiningBank extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_mining_bank', function (Blueprint $table) {
            
            // Auto
            $table->increments('bank_uid');
            
            // Básico
            $table->string('bank_name', 100);
            $table->string('bank_format', 10);
            $table->unsignedInteger('bank_round');
            $table->string('bank_prefix', 5);
            $table->string('bank_suffix', 5);
            $table->dateTime('bank_date_add');
            $table->dateTime('bank_date_upt');
            
            // Chaves estrangeiras
            $table->unsignedInteger('bank_group_uid');
            $table->foreign('bank_group_uid')->references('group_uid')->on('samo7_mining_group');
            
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('samo7_mining_bank');
        Schema::enableForeignKeyConstraints();
    }
}
