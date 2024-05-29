(function () {
    const formcreateProduk = document.querySelector('#formcreateProduk');
    // Form validation for Add new record
    if (formcreateProduk) {
        const fv = FormValidation.formValidation(formcreateProduk, {
            fields: {
                kode_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Kode Produk Harus Diisi'
                        },
                        stringLength: {
                            max: 6,
                            message: 'Maksimal 6 Karakter '
                        },


                    }
                },
                nama_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Produk Harus Diisi'
                        }
                    }
                },

                kode_jenis_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Jenis Produk Harus Dipilih'
                        }
                    }
                },

                kode_kategori_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Kategori Produk Harus Dipilih'
                        }
                    }
                },

                satuan: {
                    validators: {
                        notEmpty: {
                            message: 'Satuan Harus Diisi'
                        }
                    }
                },

                isi_pcs_dus: {
                    validators: {
                        notEmpty: {
                            message: 'Harus Diisi'
                        },
                        numeric: {
                            message: 'Harus Diisi dengan Angka'
                        },
                    }
                },

                isi_pack_dus: {
                    validators: {
                        notEmpty: {
                            message: 'Harus Diisi'
                        },
                        numeric: {
                            message: 'Harus Diisi dengan Angka'
                        },
                    }
                },

                isi_pcs_pack: {
                    validators: {
                        notEmpty: {
                            message: 'Harus Diisi'
                        },
                        numeric: {
                            message: 'Harus Diisi dengan Angka'
                        },
                    }
                },

                status_aktif_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Status Harus Diisi'
                        }
                    }
                },

                kode_sku: {
                    validators: {
                        notEmpty: {
                            message: 'Kode SKU Harus Diisi'
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
