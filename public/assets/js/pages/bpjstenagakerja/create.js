(function () {
    const formcreateBpjstenagakerja = document.querySelector('#formcreateBpjstenagakerja');
    // Form validation for Add new record
    if (formcreateBpjstenagakerja) {
        const fv = FormValidation.formValidation(formcreateBpjstenagakerja, {
            fields: {
                tanggal_berlaku: {
                    validators: {
                        notEmpty: {
                            message: 'Tanggal Berlaku Harus  Diisi'
                        },
                    }
                },

                nik: {
                    validators: {
                        notEmpty: {
                            message: 'Nik Harus  Diisi'
                        },
                    }
                },


                iuran: {
                    validators: {
                        notEmpty: {
                            message: 'Iuran BPJS Kesehatan Harus  Diisi'
                        },
                        numeric: {
                            decimalSeparator: ',',
                            thousandsSeparator: '.',
                            message: 'Iuran BPJS Kesehatan Harus Berupa Angka'
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
