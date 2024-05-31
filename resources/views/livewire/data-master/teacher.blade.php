<x-app-layout>
    @section('title', 'Data Guru')
    <div class="row">
        <div class="col-xl-12">
            <div class="nav-align-top mb-4">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">
                        <div class="row mb-2">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h4 class="card-title">Data Guru dan Tenaga Kependidikan</h4>
                                    <span><input id="text" type="text" class="form-control" wire:model="search"
                                            placeholder="Search" autocomplete="search" /></span>
                                </div>
                                <div class="card-body">
                                    <div class="row my-2">
                                        <div class="col">
                                            <div class="table-responsive">
                                                <table class="table table-striped table-hover table-bordered">
                                                    <thead class="table-dark">
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>L/P</th>
                                                            <th>NIP</th>
                                                            <th>NUPTK</th>
                                                            <th>Created At</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($teachers as $teacher)
                                                            <tr>
                                                                <td>{{ $loop->iteration }}</td>
                                                                <td>{{ strtoupper($teacher->nama) }}</td>
                                                                <td>{{ $teacher->jenis_kelamin }}</td>
                                                                <td>{{ $teacher->nip }}</td>
                                                                <td>{{ $teacher->nuptk }}</td>
                                                                <td>{{ $teacher->created_at->format('d-m-Y') }}</td>
                                                                <td>
                                                                    <a class="btn btn-primary btn-sm"
                                                                        href="#">Edit</a>
                                                                </td>
                                                            </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {{ $teachers->links() }}
                </div>

            </div>
        </div>
    </div>

</x-app-layout>
