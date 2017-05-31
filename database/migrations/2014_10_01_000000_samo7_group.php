<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7Group extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_group', function (Blueprint $table) {
            
            // Auto
            $table->increments('group_uid');
            
            // Básico
            $table->string('group_name');
            $table->dateTime('group_date_add');
            $table->dateTime('group_date_upt');
            
            // Chaves estrangeiras
            
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
        Schema::dropIfExists('samo7_group');
        Schema::enableForeignKeyConstraints();
    }
}
