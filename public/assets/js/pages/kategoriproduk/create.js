(function () {
    const formcreateKategoriproduk = document.querySelector('#formcreateKategoriproduk');
    // Form validation for Add new record
    if (formcreateKategoriproduk) {
        const fv = FormValidation.formValidation(formcreateKategoriproduk, {
            fields: {
                kode_kategori_produk: {
                    validators: {
                        notEmpty: {
                            message: 'Kode Kategori Produk Harus Diisi'
                        },
                        stringLength: {
                            max: 3,
                            min: 3,
                            message: 'Kode Kategori Produk Harus 3 Karakter'
                        },


                    }
                },
                nama_kategori_produk: {
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
