<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7User extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_user', function (Blueprint $table) {
            
            // Auto
            $table->increments('user_uid');
            
            // Básico
            $table->string('user_name', 100);
            $table->string('user_alias', 100);
            $table->string('user_mail', 100)->unique();
            $table->string('user_pass', 128);
            $table->enum('user_admin', ['YES','NO']);
            $table->string('user_photo', 255)->nullable();
            $table->string('user_cpf', 11)->nullable();
            $table->dateTime('user_date_add');
            $table->dateTime('user_date_upt');
            $table->dateTime('user_date_dlt')->nullable();
            $table->dateTime('user_date_login')->nullable();
            
            // Chaves estrangeiras
            $table->unsignedInteger('user_group_uid');
            $table->foreign('user_group_uid')
                    ->references('group_uid')
                    ->on('samo7_group')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
            
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
        Schema::dropIfExists('samo7_user');
        Schema::enableForeignKeyConstraints();
    }
}
