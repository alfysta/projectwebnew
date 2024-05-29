<?php

use App\Livewire\Actions\Logout;
use Livewire\Volt\Component;

new class extends Component {
    /**
     * Log the current user out of the application.
     */
    public function logout(Logout $logout): void
    {
        $logout();

        $this->redirect('/', navigate: true);
    }
}; ?>


<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
        <a href="{{ route('dashboard') }}" class="app-brand-link">
            <span class="app-brand-logo demo">
                <img src="{{ asset('assets/img/logo/pcf.png') }}" alt="" width="32">
            </span>
            <span class="app-brand-text demo menu-text fw-bold"><i><b>P</b></i>acific</span>
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
            <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
        </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <!-- Dashboards -->
        <li class="menu-item {{ request()->is(['dashboard', 'dashboard/*']) ? 'active' : '' }}">
            <a href="{{ route('dashboard') }}" class="menu-link">
                <i class="menu-icon tf-icons ti ti-home"></i>
                <div>Dashboard</div>
            </a>
        </li>
        <li class="menu-item">
            <a href="{{ route('profile') }}" class="menu-link">
                <i class="menu-icon tf-icons ti ti-user"></i>
                <div>Profile</div>
            </a>
        </li>
        <li class="menu-item {{ request()->is(['users', 'users/*']) ? 'open active' : '' }}">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons ti ti-settings"></i>
                <div>Data Master</div>
            </a>
            <ul class="menu-sub">
                <li class="menu-item {{ request()->is(['users', 'users/*']) ? 'active' : '' }}">
                    <a href="{{ route('users.index') }}" class="menu-link">
                        <div>User</div>
                    </a>
                </li>
            </ul>
        </li>

        <li class="menu-item">
            <button wire:click="logout" class="menu-link btn btn-transparent shadow-none">
                <i class="menu-icon tf-icons ti ti-logout"></i>
                <div>Logout</div>
            </button>
        </li>


    </ul>
</aside>
