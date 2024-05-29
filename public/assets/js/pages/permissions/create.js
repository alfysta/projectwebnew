(function () {
    const formcreatePermission = document.querySelector('#formcreatePermission');
    // Form validation for Add new record
    if (formcreatePermission) {
        const fv = FormValidation.formValidation(formcreatePermission, {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Role Harus Diisi'
                        }
                    }
                },

                id_permission_group: {
                    validators: {
                        notEmpty: {
                            message: 'Group Harus Dipilih'
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
