<?php

namespace App\Livewire\DataMaster;

use App\Models\Teacher as ModelsTeacher;
use Livewire\Component;

class Teacher extends Component
{
    public function render()
    {
        return view('livewire.data-master.teacher', [
            'teachers' => ModelsTeacher::latest()->simplePaginate()
        ]);
    }
}
