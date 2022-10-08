/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
$(document).ready(function(){
    $('.text').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_baris = rid[1];
        let nama = $('#nama__'+id_baris).text();

        if(isi=='Hapus'){
            let yakin = confirm(`Anda yakin ingin menghapus data atas nama ${nama} ??`);
            if(!yakin) return;

            $('#baris__'+id_baris).fadeOut();
        }else{
            alert('Aksi Lain untuk Cell ini belum ada. Terimakasih sudah mencoba.');
        }
    })
})