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
        Schema::create('users', function (Blueprint $table) {
            $table->string('id');
            $table->string('sekolah_id')->nullable();
            $table->string('lembaga_id')->nullable();
            $table->string('yayasan_id')->nullable();
            $table->string('la_id')->nullable();
            $table->string('dudi_id')->nullable();
            $table->string('kode_lemb_sert')->nullable();
            $table->string('peserta_didik_id')->nullable();
            $table->string('email')->unique();
            $table->string('nuptk')->nullable();
            $table->string('name');
            $table->string('tempat_lahir')->nullable();
            $table->date('tgl_lahir')->nullable();
            $table->string('jenis_kelamin')->nullable();
            $table->string('nip_nim')->nullable();
            $table->string('jabatan_lembaga')->nullable();
            $table->string('alamat')->nullable();
            $table->string('kode_wilayah')->nullable();
            $table->string('no_telepon')->nullable();
            $table->string('no_hp')->nullable();
            $table->string('user_telegram')->nullable();
            $table->string('approval_pengguna')->nullable();
            $table->string('aktif')->nullable();
            $table->string('password');
            $table->string('password_lama')->nullable();
            $table->date('tgl_ganti_pwd')->nullable();
            $table->string('id_sdm_pengguna')->nullable();
            $table->string('id_pd_pengguna')->nullable();
            $table->string('token_reg')->nullable();
            $table->string('jabatan')->nullable();
            $table->string('ptk_id')->nullable();
            $table->timestamps();
            $table->primary('id');
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
