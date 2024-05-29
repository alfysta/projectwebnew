(function () {
    const formeditRegional = document.querySelector('#formeditRegional');
    // Form validation for Add new record
    if (formeditRegional) {
        const fv = FormValidation.formValidation(formeditRegional, {
            fields: {
                kode_regional: {
                    validators: {
                        notEmpty: {
                            message: 'Kode Regional Harus Diisi'
                        },
                        stringLength: {
                            max: 3,
                            min: 3,
                            message: 'Kode Regional Harus 3 Karakter'
                        },


                    }
                },
                nama_regional: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Regional Harus Diisi'
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
