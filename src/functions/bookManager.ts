// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

import books from '../data/books';

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
// jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
// Function u/ menambahkan buku baru ke dalam koleksi
// Parameter: data buku sesuai tipe Bookimport { Book } from "../types";

// Function to add a new book to the collection

import { Book } from '../types';

// Function to add a new book to the collection
export function addBook(book: Book): void {
  books.push(book);
  console.log(`\nBuku: "${book.title}" sudah disimpan`);
}

// Function to display all books in the collection
export function listBooks(): void {
  console.log('\n=== SEMUA BUKU DI PERPUSTAKAAN ===');

  if (books.length === 0) {
    console.log('Tidak ada buku.');
    return;
  }

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(
      `${i + 1}. "${book.title}" by ${book.author} (${book.publicationYear})`
    );
  }
}

// Function to search for books by title
export function searchBook(title?: string): void {
  console.log('\n=== HASIL PENCARIAN ===');

  if (!title) {
    console.log('Tidak ada kata kunci pencarian. Menampilkan semua buku:');
    listBooks();
    return;
  }

  const searchLower = title.toLowerCase();
  const foundBooks = [];

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.title.toLowerCase().includes(searchLower)) {
      foundBooks.push(book);
    }
  }

  if (foundBooks.length === 0) {
    console.log(`Judul buku:"${title}" tidak ditemukan`);
  } else {
    console.log(`Ditemukan ${foundBooks.length} buku dengan judul "${title}":`);
    for (let i = 0; i < foundBooks.length; i++) {
      const book = foundBooks[i];
      console.log(
        `  - "${book.title}" by ${book.author} (${book.publicationYear})`
      );
    }
  }
}
