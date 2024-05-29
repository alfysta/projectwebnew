(function () {
    const formcreateHarga = document.querySelector('#formcreateHarga');
    // Form validation for Add new record
    if (formcreateHarga) {
        const fv = FormValidation.formValidation(formcreateHarga, {
            fields: {
                kode_harga: {
                    validators: {
                        notEmpty: {
                            message: 'Kode Harga Harus Diisi'
                        },
                        stringLength: {
                            max: 7,
                            min: 7,
                            message: 'Maksimal 7 Karakter '
                        },


                    }
                },
                kode_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Produk Harus Dipilih'
                        },
                    }
                },
                harga_dus: {
                    validators: {
                        notEmpty: {
                            message: 'Harga Dus Harus Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Harga Dus Harus Berupa Angka'
                        }
                    }
                },

                harga_pack: {
                    validators: {
                        notEmpty: {
                            message: 'Harga Pack Harus Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Harga Pack Harus Berupa Angka'
                        }
                    }
                },

                harga_pcs: {
                    validators: {
                        notEmpty: {
                            message: 'Harga Pcs Harus Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Harga Pcs Harus Berupa Angka'
                        }
                    }
                },

                harga_retur_dus: {
                    validators: {
                        notEmpty: {
                            message: 'Harga Retur Dus Harus Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Harga Retur Dus Harus Berupa Angka'
                        }
                    }
                },

                harga_retur_pack: {
                    validators: {
                        notEmpty: {
                            message: 'Harga Retur Pack Harus Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Harga Retur Pack Harus Berupa Angka'
                        }
                    }
                },

                harga_retur_pcs: {
                    validators: {
                        notEmpty: {
                            message: 'Harga Retur Pcs Harus Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Harga Retur Pcs Harus Berupa Angka'
                        }
                    }
                },



                status_aktif_harga: {
                    validators: {
                        notEmpty: {
                            message: 'Status Harus Diisi'
                        },
                    }
                },


                status_promo: {
                    validators: {
                        notEmpty: {
                            message: 'Status Promo Harus Diisi'
                        },
                    }
                },

                kode_kategori_salesman: {
                    validators: {
                        notEmpty: {
                            message: 'Kategori Harga Harus Diisi'
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
