<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Samo7FinancialBank extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('samo7_financial_bank', function (Blueprint $table) {
            
            // Auto
            $table->increments('bank_uid');
            
            // Básico
            $table->enum('bank_typer', ['R','D']);
            $table->text('bank_description');
            $table->float('bank_value', 8, 2);
            $table->date('bank_date');
            $table->enum('bank_paid', ['Y','N'])->default('N');
            $table->enum('bank_repeat', ['Y','N'])->default('N');
            $table->enum('bank_repeat_system', ['Y','N'])->default('N');
            
            $table->unsignedInteger('bank_repetition')->nullable();
            $table->unsignedInteger('bank_repetition_father')->nullable();
            $table->unsignedInteger('bank_repetition_uid')->nullable();
            
            $table->string('bank_transfer', 50)->nullable();
            $table->string('bank_import', 255)->nullable();
            $table->bigInteger('bank_warning')->nullable();
            
            $table->dateTime('bank_date_add');
            $table->dateTime('bank_date_upt')->nullable();
            
            // Chaves estrangeiras
            $table->unsignedInteger('bank_user_uid');
            $table->foreign('bank_user_uid')
                    ->references('user_uid')
                    ->on('samo7_user')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
                    
            $table->unsignedInteger('bank_account_uid')->nullable();
            $table->foreign('bank_account_uid')
                    ->references('account_uid')
                    ->on('samo7_financial_account')
                    ->onUpdate('cascade')
                    ->onDelete('cascade');
                    
            $table->unsignedInteger('bank_category_uid')->nullable();
            $table->foreign('bank_category_uid')
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
        Schema::dropIfExists('samo7_financial_bank');
        Schema::enableForeignKeyConstraints();
    }
}
