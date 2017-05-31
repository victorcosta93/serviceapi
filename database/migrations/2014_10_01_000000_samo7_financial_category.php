<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7FinancialCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_financial_category', function (Blueprint $table) {
            
            // Auto
            $table->increments('category_uid');
            
            // Básico
            $table->string('category_name', 50);
            $table->unsignedInteger('category_father')->nullable();
            $table->unsignedInteger('category_order')->nullable();
            
            $table->dateTime('category_date_add');
            $table->dateTime('category_date_upt');
            
            // Chaves estrangeiras
            $table->unsignedInteger('category_user_uid');
            $table->foreign('category_user_uid')
                    ->references('user_uid')
                    ->on('samo7_user')
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
        Schema::dropIfExists('samo7_financial_category');
        Schema::enableForeignKeyConstraints();
    }
}
