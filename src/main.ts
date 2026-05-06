// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

// Function Start BMA
// Function TampilMenu 
// 1-Function userToAddBook
//    Function addBook (from userToAddBook to        
//    addBook in bookManager 



console.log("Book Management Application - Week 6");
console.log("=====================================");

// Mulai pengujian di bawah ini

const prompt = require('prompt-sync')();
import { addBook, listBooks, searchBook } from './functions/bookManager';
import { Book } from './types/index'; 


function menuPilihan(): void {
  console.log("\nBook Management Application:");
  console.log("1. Tambah Buku");
  console.log("2. Tampilkan Semua Buku");
  console.log("3. Cari Buku Berdasarkan Judul");
  console.log("4. Keluar");
  console.log("=====================================");
}

Function AddBook(book: Book): void {
  console.log(`Menambahkan buku: `);
  const title = prompt("Masukkan judul buku: ");
  const author = prompt("Masukkan nama penulis: ");
  const publicationYear = parseInt(prompt("Masukkan tahun publikasi: "));
  
  // Validasi input
  if (!title || !author || isNaN(publicationYear)) {
    console.log("Input tidak valid. Pastikan semua field diisi dengan benar.");
    return;
  }

  