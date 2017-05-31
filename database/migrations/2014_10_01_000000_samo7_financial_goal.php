<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7FinancialGoal extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_financial_goal', function (Blueprint $table) {
            
            // Auto
            $table->increments('goal_uid');
            
            // Básico
            $table->float('goal_value', 8, 2);
            $table->enum('goal_repeat', ['0','1','2'])->default('0');
            
            $table->date('goal_date_begin');
            $table->date('goal_date_end');
            
            $table->enum('goal_accumulate', ['Y','N'])->default('N');
            
            $table->dateTime('goal_date_add');
            $table->dateTime('goal_date_upt');
            
            // Chaves estrangeiras
            $table->unsignedInteger('goal_user_uid');
            $table->foreign('goal_user_uid')
                    ->references('user_uid')
                    ->on('samo7_user')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
                    
            $table->unsignedInteger('goal_account_uid');
            $table->foreign('goal_account_uid')
                    ->references('account_uid')
                    ->on('samo7_financial_account')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
                    
            $table->unsignedInteger('goal_category_uid');
            $table->foreign('goal_category_uid')
                    ->references('category_uid')
                    ->on('samo7_financial_category')
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
        Schema::dropIfExists('samo7_financial_goal');
        Schema::enableForeignKeyConstraints();
    }
}
