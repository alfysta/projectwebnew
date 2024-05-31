<x-app-layout>
    @section('title', 'Data Sekolah')
    <div class="row">
        <div class="col-xl-12">
            <div class="nav-align-top mb-4">
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">
                        <div class="row mb-2">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card-body">
                                    <div class="row my-2">
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <label for="nama_sekolah" class="form-label">Nama Sekolah</label>
                                                <input type="text" class="form-control" id="nama_sekolah"
                                                    name="email" value="{{ $settings->nama }}" autofocus disabled />
                                            </div>
                                            <div class="mb-3">
                                                <label for="nama_sekolah" class="form-label">NPSN</label>
                                                <input type="text" class="form-control" id="nama_sekolah"
                                                    name="email" value="{{ $settings->npsn }}" autofocus disabled />
                                            </div>
                                            <div class="mb-3">
                                                <label for="nama_sekolah" class="form-label">Alamat Sekolah</label>
                                                <input type="text" class="form-control" id="nama_sekolah"
                                                    name="email"
                                                    value="{{ $settings->alamat_jalan }}, Desa {{ $settings->desa_kelurahan }}"
                                                    autofocus disabled />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="mb-3">
                                                <label for="nama_sekolah" class="form-label">Koordinat Lokasi
                                                    Kantor</label>
                                                <input type="text" class="form-control" id="nama_sekolah"
                                                    name="email" value="{{ $settings->lokasi_kantor }}" autofocus
                                                    disabled />
                                            </div>
                                            <div class="mb-3">
                                                <label for="nama_sekolah" class="form-label">Radius</label>
                                                <input type="text" class="form-control" id="radius" name="email"
                                                    value="{{ $settings->radius }} meter" autofocus disabled />
                                            </div>
                                            <div class="mb-3">
                                                <label for="nama_sekolah" class="form-label">Jam Masuk</label>
                                                <input type="text" class="form-control" id="jam_masuk"
                                                    name="jam_masuk" value="{{ $settings->jam_masuk }}" autofocus
                                                    disabled />
                                            </div>
                                            <div class="mb-3">
                                                <label for="nama_sekolah" class="form-label">Jam Keluar</label>
                                                <input type="text" class="form-control" id="jam_keluar"
                                                    name="jam_keluar" value="{{ $settings->jam_keluar }}" autofocus
                                                    disabled />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

</x-app-layout>
