$(window).on('load', function () {
    var originalTitle = document.title; // Menyimpan judul asli

    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '#' + btoa($('#m3u8-placeholder')[0].value);

        // Mengatur judul dokumen kembali ke judul asli setelah URL berubah
        document.title = originalTitle;
    });
});
