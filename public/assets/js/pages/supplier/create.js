(function () {
    const formcreateSupplier = document.querySelector('#formcreateSupplier');
    // Form validation for Add new record
    if (formcreateSupplier) {
        const fv = FormValidation.formValidation(formcreateSupplier, {
            fields: {
                nama_supplier: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Supplier Harus Diisi'
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
