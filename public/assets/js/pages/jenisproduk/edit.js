(function () {
    const formeditJenisproduk = document.querySelector('#formeditJenisproduk');
    // Form validation for Add new record
    if (formeditJenisproduk) {
        const fv = FormValidation.formValidation(formeditJenisproduk, {
            fields: {
                kode_jenis_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Kode Jenis Produk Harus Diisi'
                        },
                        stringLength: {
                            max: 3,
                            min: 3,
                            message: 'Kode Jenis Produk Harus 3 Karakter'
                        },


                    }
                },
                nama_jenis_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Kategori Produk Harus Diisi'
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
