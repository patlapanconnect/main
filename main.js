function generateToken() {
    // Fungsi ini menghasilkan token unik
    return Math.random().toString(36).substr(2);
}

$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        var token = generateToken();  // Membuat token unik
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        // Menambahkan token ke URL dan mengenkripsi URL tujuan
        window.location.href = './player' + '?token=' + token + '#' + btoa($('#m3u8-placeholder')[0].value);  
    });
});

var express = require('express');
var app = express();

var tokens = {};

function validateToken(token) {
    // Fungsi ini memvalidasi token
    if (tokens[token]) {
        delete tokens[token];  // Menghapus token dari objek tokens
        return true;
    } else {
        return false;
    }
}

app.get('/player', function (req, res) {
    var token = req.query.token;
    if (validateToken(token)) {
        // Jika token valid, tampilkan pemutar video
        res.send('Pemutar video di sini');
    } else {
        // Jika token tidak valid, tampilkan pesan kesalahan
        res.send('Token tidak valid');
    }
});

app.listen(3000, function () {
    console.log('Aplikasi berjalan di http://localhost:3000');
});
