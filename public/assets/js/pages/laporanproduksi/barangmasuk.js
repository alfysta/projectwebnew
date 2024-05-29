$(function(){
    $("#frmLaporanbarangmasuk").submit(function(){
        const dari = $(this).find("#dari").val();
        const sampai = $(this).find("#sampai").val();
        var start = new Date(dari);
        var end = new Date(sampai);
        if(dari==""){
            Swal.fire({
                title: "Oops!",
                text: 'Periode Dari Harus Diisi !',
                icon: "warning",
                showConfirmButton: true,
                didClose: (e) => {
                    $(this).find("#dari").focus();
                },
            });
            return false;
        }else if(sampai==""){
            Swal.fire({
                title: "Oops!",
                text: 'Periode Sampai Harus Diisi !',
                icon: "warning",
                showConfirmButton: true,
                didClose: (e) => {
                    $(this).find("#sampai").focus();
                },
            });
            return false;
        }else if (start.getTime() > end.getTime()) {
            Swal.fire({
                title: "Oops!",
                text: 'Periode Tidak Valid !, Periode Sampai Harus Lebih Akhir dari Periode Dari',
                icon: "warning",
                showConfirmButton: true,
                didClose: (e) => {
                    $(this).find("#sampai").focus();
                },
            });
            return false;
        }
    });
});