<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7FinancialAccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_financial_account', function (Blueprint $table) {
            
            // Auto
            $table->increments('account_uid');
            
            // Básico
            $table->string('account_name', 100);
            $table->text('account_description');
            $table->float('account_balance', 8, 2);
            $table->enum('account_typer', ['POU','COR','INV','CRE','OUT']);
            $table->dateTime('account_date_add');
            $table->dateTime('account_date_upt');
            
            // Chaves estrangeiras
            $table->unsignedInteger('account_user_uid');
            $table->foreign('account_user_uid')
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
        Schema::dropIfExists('samo7_financial_account');
        Schema::enableForeignKeyConstraints();
    }
}
