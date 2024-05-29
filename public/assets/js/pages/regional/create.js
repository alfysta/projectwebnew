(function () {
    const formcreateRegional = document.querySelector('#formcreateRegional');
    const submitButton = document.querySelector('button[type="submit"]');
    // Form validation for Add new record
    if (formcreateRegional) {
        const fv = FormValidation.formValidation(formcreateRegional, {
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
        }).on('core.form.valid', function () {
            // Disable the submit button
            submitButton.setAttribute('disabled', true);

            // Do something else such as sending the form to back-end via Ajax request
            // ...
        });
    }
})();
