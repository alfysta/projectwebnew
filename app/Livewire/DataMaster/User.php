<?php

namespace App\Livewire\DataMaster;

use App\Models\User as ModelsUser;
use Livewire\Component;
use Livewire\WithPagination;


class User extends Component
{
    use WithPagination;

    public $search = "";

    public function render()
    {
        return view('livewire.data-master.user', [
            'users' => ModelsUser::where('name', 'like', '%' . $this->search . '%')->simplePaginate(10),
        ]);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }
}
