$(function () {
    $("#frmRekappersediaanbarang").submit(function () {
        const bulan = $(this).find("#bulan").val();
        const tahun = $(this).find("#tahun").val();

        if (bulan == "") {
            Swal.fire({
                title: "Oops!",
                text: 'Bulan Harus Diisi !',
                icon: "warning",
                showConfirmButton: true,
                didClose: (e) => {
                    $(this).find("#bulan").focus();
                },
            });
            return false;
        } else if (tahun == "") {
            Swal.fire({
                title: "Oops!",
                text: 'Tahun Harus Diisi !',
                icon: "warning",
                showConfirmButton: true,
                didClose: (e) => {
                    $(this).find("#tahun").focus();
                },
            });
            return false;
        }
    });
});
