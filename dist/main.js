"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Function Start BMA
// Function TampilMenu
// 1-Function userToAddBook
//    Function addBook (from userToAddBook to
//    addBook in bookManager
const bookManager_1 = require("./functions/bookManager");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
console.log('Book Management Application - Week 6');
console.log('=====================================');
const prompt = (0, prompt_sync_1.default)();
function menuPilihan() {
    console.log('\nBook Management Application:');
    console.log('1. Tambah Buku');
    console.log('2. Tampilkan Semua Buku');
    console.log('3. Cari Buku Berdasarkan Judul');
    console.log('4. Keluar');
    console.log('=====================================');
}
function handleAddBook() {
    console.log('\n--- TAMBAH BUKU BARU ---');
    const title = prompt('Masukkan judul buku: ');
    const author = prompt('Masukkan nama penulis: ');
    const publicationYear = parseInt(prompt('Masukkan tahun publikasi: '));
    // Validasi input
    if (!title || !author || isNaN(publicationYear)) {
        console.log('Input tidak valid. Pastikan semua field diisi dengan benar.');
        return;
    }
    // Panggil fungsi addBook yang sudah diimport
    (0, bookManager_1.addBook)({ title, author, publicationYear });
}
function handleSearchBook() {
    console.log('\n--- CARI BUKU ---');
    const keyword = prompt('Masukkan judul buku yang dicari (atau Enter untuk lihat semua): ');
    if (keyword.trim() === '') {
        (0, bookManager_1.searchBook)();
    }
    else {
        (0, bookManager_1.searchBook)(keyword);
    }
}
function runApp() {
    while (true) {
        menuPilihan();
        const pilihan = prompt('Pilih menu (1-4): ');
        switch (pilihan) {
            case '1':
                handleAddBook();
                break;
            case '2':
                (0, bookManager_1.listBooks)();
                break;
            case '3':
                handleSearchBook();
                break;
            case '4':
                console.log('\nTerima kasih! Sampai jumpa.');
                return;
            default:
                console.log('Pilihan tidak valid. Silakan pilih 1-4.');
        }
    }
}
// Jalankan aplikasi
runApp();
