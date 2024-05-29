(function () {
    const formDriverhelper = document.querySelector('#formDriverhelper');
    // Form validation for Add new record
    if (formDriverhelper) {
        const fv = FormValidation.formValidation(formDriverhelper, {
            fields: {
                nama_driver_helper: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Driver / Helper Harus Diisi'
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
