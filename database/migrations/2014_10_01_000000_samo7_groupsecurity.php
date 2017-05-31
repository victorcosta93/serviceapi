<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7Groupsecurity extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_groupsecurity', function (Blueprint $table) {
            
            // Auto
            
            // Básico
            $table->unsignedInteger('group_uid');
            $table->string('groupsecurity_group');
            $table->dateTime('groupsecurity_date_add');
            
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
        Schema::dropIfExists('samo7_groupsecurity');
        Schema::enableForeignKeyConstraints();
    }
}
