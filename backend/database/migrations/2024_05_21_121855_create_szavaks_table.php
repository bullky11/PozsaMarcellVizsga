<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string('angol');
            $table->string('magyar');
            $table->foreignId('temaID')->references('id')->on('temas');
            $table->timestamps();
        });
        Szavak::create(['angol'=>'beutiful','magyar'=>'gyönyörű','temaID'=>1]);
        Szavak::create(['angol'=>'diligent','magyar'=>'okos','temaID'=>1]);
        Szavak::create(['angol'=>'curious','magyar'=>'kiváncsi','temaID'=>1]);
        Szavak::create(['angol'=>'dig','magyar'=>'ás','temaID'=>1]);
        Szavak::create(['angol'=>'run','magyar'=>'fut','temaID'=>2]);
        Szavak::create(['angol'=>'An english sentence','magyar'=>'egy magyar mondat','temaID'=>3]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
