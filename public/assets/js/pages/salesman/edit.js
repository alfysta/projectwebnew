(function () {
    const formeditSalesman = document.querySelector('#formeditSalesman');
    // Form validation for Add new record
    if (formeditSalesman) {
        const fv = FormValidation.formValidation(formeditSalesman, {
            fields: {
                nama_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Salesman Harus Diisi'
                        }
                    }
                },

                alamat_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'Alamat Salesman Harus Diisi'
                        }
                    }
                },

                no_hp_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'No. HP Salesman Harus Diisi'
                        },
                        numeric: {
                            message: 'No. HP Harus Diisi dengan Angka'
                        },

                        stringLength: {
                            max: 13,
                            message: 'Maksimal 13 Karakter'
                        },
                    }
                },

                kode_kategori_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'Kategori Salesman Harus Diisi'
                        }
                    }
                },

                status_komisi_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'Status Komisi Harus Diisi'
                        }
                    }
                },

                status_aktif_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'Status Aktif Salesman Harus Diisi'
                        }
                    }
                },


                kode_cabang: {
                    validators: {
                        notEmpty: {
                            message: 'Cabang Harus Diisi'
                        }
                    }
                },

                marker: {
                    validators: {
                        file: {
                            extension: 'png',
                            type: 'image/png',
                            maxSize: '102400',
                            message: 'File Marker Harus PNG, dan Ukuran Maksimal 100 KB',
                        },
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
