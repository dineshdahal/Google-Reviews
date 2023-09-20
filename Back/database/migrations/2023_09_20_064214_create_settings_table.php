<?php

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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->integer('previewid')->default(1);
            $table->enum('minratings', [1,2,3,4,5])->default(1);
            $table->enum('dateformat',['my', 'ymd', 'mdy', 'hide'])->default('my');
            $table->enum('align',['left', 'center', 'right'])->default('left');
            $table->enum('theme', ['light', 'dark', 'transparent', 'custom'])->default('light');
            $table->boolean('hidenoreviews')->default(false);
            $table->boolean('hideratingtexts')->default(false);
            $table->boolean('showphoto')->default(true);
            $table->boolean('showname')->default(true);
            $table->boolean('showviewallreviewlink')->default(false);
            $table->boolean('writeareviewbtn')->default(true);
            $table->boolean('autoplay')->default(false);
            $table->string('previewbody')->default('#fff');
            $table->string('cardbody')->default('#fff');
            $table->string('text')->default('#000');
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
