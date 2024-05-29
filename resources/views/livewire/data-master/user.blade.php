<x-app-layout>
    @section('title', 'Users')
    <div class="row">
        <div class="col-xl-12">
            <div class="nav-align-top mb-4">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">
                        <div class="row mb-2">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h4 class="card-title">Data Users</h4>
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
                                                            <th>Email</th>
                                                            <th>Role</th>
                                                            <th>Status</th>
                                                            <th>Created At</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach ($users as $user)
                                                            <tr>
                                                                <td>{{ $user->id }}</td>
                                                                <td>{{ $user->name }}</td>
                                                                <td>{{ $user->email }}</td>
                                                                <td>{{ $user->id }}</td>
                                                                <td>{{ $user->id }}</td>
                                                                <td>{{ $user->created_at->format('d-m-Y') }}</td>
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
                    {{ $users->links() }}
                </div>

            </div>
        </div>
    </div>

</x-app-layout>
