<?php

use App\Livewire\Forms\LoginForm;
use Illuminate\Support\Facades\Session;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;

new #[Layout('layouts.guest')] class extends Component {
    public LoginForm $form;

    /**
     * Handle an incoming authentication request.
     */
    public function login(): void
    {
        $this->validate();

        $this->form->authenticate();

        Session::regenerate();

        $this->redirectIntended(default: route('dashboard', absolute: false), navigate: true);
    }
}; ?>

<div>
    <!-- Login -->
    <div class="card">
        <div class="card-body">
            <!-- Logo -->
            <div class="app-brand justify-content-center mb-4 mt-2">
                <img src="{{ asset('assets/img/logo/logoportal.png') }}" alt="" width="160">
            </div>
            <!-- /Logo -->
            <h4 class="mb-1 pt-2">CV. BEAR PINTER</h4>
            <p class="mb-4">Please Login !</p>
            {{-- <x-alert-error :messages="$errors->get('id_user')" class="mt-2" /> --}}
            <!-- Session Status -->
            <x-auth-session-status class="mb-4" :status="session('status')" />

            <form wire:submit="login" class="mb-3">
                <!-- Email Address -->

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input wire:model="form.email" type="email" class="form-control" id="email" name="email"
                        placeholder="Enter your email" autofocus />
                    <small><x-input-error :messages="$errors->get('form.email')" class="mt-2" /></small>
                </div>
                <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                        <label class="form-label" for="password">Password</label>
                        @if (Route::has('password.request'))
                            <a href="{{ route('password.request') }}" wire:navigate>
                                <small>Forgot Password?</small>
                            </a>
                        @endif
                    </div>
                    <div class="input-group input-group-merge">
                        <input wire:model="form.password" id="password" type="password" class="form-control"
                            name="password"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password" autocomplete="current-password" />
                        <span class="input-group-text cursor-pointer"><i class="ti ti-eye-off"></i></span>
                    </div>
                    <small><x-input-error :messages="$errors->get('form.password')" class="mt-2" /></small>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input wire:model="form.remember" class="form-check-input" type="checkbox" id="remember" />
                        <label class="form-check-label" for="remember-me"> Remember Me </label>
                    </div>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary d-grid w-100" type="submit">Login</button>
                </div>
            </form>

            <div class="divider my-4">
                <div class="divider-text">or</div>
            </div>

            <div class="d-flex justify-content-center">
                <a href="javascript:;" class="btn btn-icon btn-label-facebook me-3">
                    <i class="tf-icons fa-brands fa-facebook-f fs-5"></i>
                </a>

                <a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3">
                    <i class="tf-icons fa-brands fa-google fs-5"></i>
                </a>

                <a href="javascript:;" class="btn btn-icon btn-label-twitter">
                    <i class="tf-icons fa-brands fa-twitter fs-5"></i>
                </a>
            </div>
        </div>
    </div>
</div>
