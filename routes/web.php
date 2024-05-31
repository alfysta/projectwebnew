<?php

use App\Livewire\DataMaster\Teacher;
use App\Livewire\DataMaster\User;
use App\Livewire\Settings;
use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

Route::middleware('auth')->group(function () {
    Route::get('/users', [User::class, 'render'])->name('users.index');
    Route::get('/teachers', [Teacher::class, 'render'])->name('teachers.index');
    Route::get('/settings', [Settings::class, 'render'])->name('settings.index');
});

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

require __DIR__ . '/auth.php';
