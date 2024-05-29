(function () {
    const formcreateKendaraan = document.querySelector('#formcreateKendaraan');
    // Form validation for Add new record
    if (formcreateKendaraan) {
        const fv = FormValidation.formValidation(formcreateKendaraan, {
            fields: {
                no_polisi: {
                    validators: {
                        notEmpty: {
                            message: 'No. Polisi Harus Diisi'
                        },
                    }
                },

                jatuhtempo_kir: {
                    validators: {
                        notEmpty: {
                            message: 'Jatuh Tempo KIR Harus Diisi'
                        },
                    }
                },

                jatuhtempo_pajak_satutahun: {
                    validators: {
                        notEmpty: {
                            message: 'Jatuh Tempo Pajak 1 Tahun Harus Diisi'
                        },
                    }
                },

                jatuhtempo_pajak_limatahun: {
                    validators: {
                        notEmpty: {
                            message: 'Jatuh Tempo Pajak 5 Tahun Harus Diisi'
                        },
                    }
                },
                kode_cabang: {
                    validators: {
                        notEmpty: {
                            message: 'Cabang Harus Dipilih'
                        },
                    }
                },
                kapasitas: {
                    validators: {
                        notEmpty: {
                            message: 'Kapasitas Harus Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Kapasitas Harus Berupa Angka'
                        }
                    }
                },



                status_aktif_kendaraan: {
                    validators: {
                        notEmpty: {
                            message: 'Status Harus Diisi'
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
