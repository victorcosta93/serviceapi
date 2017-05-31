<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7Autologin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_autologin', function (Blueprint $table) {
            
            // Auto
            
            // Básico
            $table->char('autologin_uid', 32);
            $table->string('autologin_navigator');
            $table->string('autologin_ip');
            $table->dateTime('autologin_date_add');
            $table->dateTime('autologin_date_upt');
            
            // Chaves estrangeiras
            $table->unsignedInteger('autologin_user_uid');
            $table->foreign('autologin_user_uid')->references('user_uid')->on('samo7_user');
            
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
        Schema::dropIfExists('samo7_autologin');
        Schema::enableForeignKeyConstraints();
    }
}
