(function () {
    const formeditInsentif = document.querySelector('#formeditInsentif');
    // Form validation for Add new record
    if (formeditInsentif) {
        const fv = FormValidation.formValidation(formeditInsentif, {
            fields: {
                tanggal_berlaku: {
                    validators: {
                        notEmpty: {
                            message: 'Tanggal Berlaku Harus  Diisi'
                        },
                    }
                },

                nik: {
                    validators: {
                        notEmpty: {
                            message: 'Nik Harus  Diisi'
                        },
                    }
                },


                iu_masakerja: {
                    validators: {
                        notEmpty: {
                            message: 'Insentif Masa Kerja Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Insentif Masa Kerja Harus Berupa Angka'
                        }
                    }
                },
                iu_lembur: {
                    validators: {
                        notEmpty: {
                            message: 'Insentif Lembur Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Insentif Lembur Harus Berupa Angka'
                        }
                    }
                },

                iu_penempatan: {
                    validators: {
                        notEmpty: {
                            message: 'Insentif Penempatan Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Insentif Penempatan Harus Berupa Angka'
                        }
                    }
                },

                iu_kpi: {
                    validators: {
                        notEmpty: {
                            message: 'Insentif KPI  Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Insentif KPI  Harus Berupa Angka'
                        }
                    }
                },

                im_ruanglingkup: {
                    validators: {
                        notEmpty: {
                            message: 'Insentif Ruang Lingkup  Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Insentif Ruang Lingkup Harus Berupa Angka'
                        }
                    }
                },


                im_penemptan: {
                    validators: {
                        notEmpty: {
                            message: 'Insentif Penempatan  Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Insentif Penempatan  Berupa Angka'
                        }
                    }
                },

                im_kinerja: {
                    validators: {
                        notEmpty: {
                            message: 'Insentif Kinerja  Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Insentif Kinerja  Berupa Angka'
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
