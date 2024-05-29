$(function(){
    $("#frmLaporanmutasiproduksi").submit(function(){
        const kode_produk = $("#frmLaporanmutasiproduksi").find("#kode_produk").val();
        const dari = $("#frmLaporanmutasiproduksi").find("#dari").val();
        const sampai = $("#frmLaporanmutasiproduksi").find("#sampai").val();
        var start = new Date(dari);
        var end = new Date(sampai);
        if(kode_produk==""){
            Swal.fire({
                title: "Oops!",
                text: 'Kode Produk Harus Diisi !',
                icon: "warning",
                showConfirmButton: true,
                didClose: (e) => {
                    $("#frmLaporanmutasiproduksi").find("#kode_produk").focus();
                },
            });

            return false;
        }else if(dari==""){
            Swal.fire({
                title: "Oops!",
                text: 'Periode Dari Harus Diisi !',
                icon: "warning",
                showConfirmButton: true,
                didClose: (e) => {
                    $("#frmLaporanmutasiproduksi").find("#dari").focus();
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
                    $("#frmLaporanmutasiproduksi").find("#sampai").focus();
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