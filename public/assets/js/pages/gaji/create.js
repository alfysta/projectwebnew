(function () {
    const formcreateGaji = document.querySelector('#formcreateGaji');
    // Form validation for Add new record
    if (formcreateGaji) {
        const fv = FormValidation.formValidation(formcreateGaji, {
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


                gaji_pokok: {
                    validators: {
                        notEmpty: {
                            message: 'Gaji Pokok Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Gaji Pokok Harus Berupa Angka'
                        }
                    }
                },
                t_jabatan: {
                    validators: {
                        notEmpty: {
                            message: 'Tunjangan Jabatan Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Tunjangan Jabatan Harus Berupa Angka'
                        }
                    }
                },

                t_masakerja: {
                    validators: {
                        notEmpty: {
                            message: 'Tunjangan Masa Kerja Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Tunjangan Masa Kerja Harus Berupa Angka'
                        }
                    }
                },

                t_tanggungjawab: {
                    validators: {
                        notEmpty: {
                            message: 'Tunjangan Tanggung Jawab Kerja Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Tunjangan Tanggung Jawab Harus Berupa Angka'
                        }
                    }
                },

                t_makan: {
                    validators: {
                        notEmpty: {
                            message: 'Tunjangan Makan  Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Tunjangan Makan Harus Berupa Angka'
                        }
                    }
                },


                t_istri: {
                    validators: {
                        notEmpty: {
                            message: 'Tunjangan Istri  Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Tunjangan Istri  Berupa Angka'
                        }
                    }
                },

                t_skill: {
                    validators: {
                        notEmpty: {
                            message: 'Tunjangan Skill  Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Tunjangan Skill  Berupa Angka'
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
