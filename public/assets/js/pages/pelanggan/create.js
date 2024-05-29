(function () {
    const formcreatePelanggan = document.querySelector('#formcreatePelanggan');
    // Form validation for Add new record
    if (formcreatePelanggan) {
        const fv = FormValidation.formValidation(formcreatePelanggan, {
            fields: {

                nama_pelanggan: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Pelanggan Harus Diisi'
                        }
                    }
                },
                alamat_pelanggan: {
                    validators: {
                        notEmpty: {
                            message: 'Alamat Pelanggan Harus Diisi'
                        }
                    }
                },

                alamat_toko: {
                    validators: {
                        notEmpty: {
                            message: 'Alamat Toko Harus Diisi'
                        }
                    }
                },

                no_hp_pelanggan: {
                    validators: {
                        notEmpty: {
                            message: 'No. HP Harus Diisi'
                        }
                    },

                },

                kode_cabang: {
                    validators: {
                        notEmpty: {
                            message: 'Cabang Harus Dipilih'
                        }
                    }
                },

                kode_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'Salesman Harus Dipilih'
                        }
                    }
                },

                kode_wilayah: {
                    validators: {
                        notEmpty: {
                            message: 'Wilayah / Route Harus Dipilih'
                        }
                    }
                },
                hari: {
                    validators: {
                        notEmpty: {
                            message: 'Hari Harus Dipilih'
                        }
                    }
                },
                status_aktif_pelanggan: {
                    validators: {
                        notEmpty: {
                            message: 'Hari Harus Dipilih'
                        }
                    }
                },

                ljt: {
                    validators: {
                        notEmpty: {
                            message: 'LJT Harus Diisi'
                        }
                    }
                },






            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: '',
                    rowSelector: '.mb-3'
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),

                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                autoFocus: new FormValidation.plugins.AutoFocus()
            },
            init: instance => {
                instance.on('plugins.message.placed', function (e) {
                    if (e.element.parentElement.classList.contains('input-group')) {
                        e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
                    }
                });
            }
        });
    }
})();
