$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        var token = generateToken();  // Membuat token unik
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        // Menambahkan token ke URL dan mengenkripsi URL tujuan
        window.location.href = './player' + '#' + btoa($('#m3u8-placeholder')[0].value);  
    });
});
