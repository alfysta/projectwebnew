<?php

namespace App\Livewire;

use App\Models\School;
use Livewire\Component;

class Settings extends Component
{
    public function render()
    {
        return view('livewire.settings', [
            'settings' => School::first()
        ]);
    }
}
