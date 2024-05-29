(function () {
    const formcreateWilayah = document.querySelector('#formcreateWilayah');
    // Form validation for Add new record
    if (formcreateWilayah) {
        const fv = FormValidation.formValidation(formcreateWilayah, {
            fields: {
                nama_wilayah: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Wilayah Harus Diisi'
                        }
                    }
                },

                kode_cabang: {
                    validators: {
                        notEmpty: {
                            message: 'Cabang Harus Diisi'
                        }
                    }
                }

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
