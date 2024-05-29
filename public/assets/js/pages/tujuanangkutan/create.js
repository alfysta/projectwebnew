(function () {
    const formcreateTujuanangkutan = document.querySelector('#formcreateTujuanangkutan');
    // Form validation for Add new record
    if (formcreateTujuanangkutan) {
        const fv = FormValidation.formValidation(formcreateTujuanangkutan, {
            fields: {
                kode_tujuan: {
                    validators: {
                        notEmpty: {
                            message: 'Kode Tujuan Harus Diisi'
                        },
                        stringLength: {
                            max: 3,
                            min: 3,
                            message: 'Kode Tujuan Harus 3 Karakter'
                        },


                    }
                },
                tujuan: {
                    validators: {
                        notEmpty: {
                            message: 'Nama Tujuan Harus Diisi'
                        }
                    }
                },

                tarif: {
                    validators: {
                        notEmpty: {
                            message: 'Tarif Harus Diisi'
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
