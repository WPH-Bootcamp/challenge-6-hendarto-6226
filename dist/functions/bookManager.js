"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = __importDefault(require("../data/books"));
// Function to add a new book to the collection
function addBook(book) {
    books_1.default.push(book);
    console.log(`\nBuku: "${book.title}" sudah disimpan`);
}
// Function to display all books in the collection
function listBooks() {
    console.log('\n=== SEMUA BUKU DI PERPUSTAKAAN ===');
    if (books_1.default.length === 0) {
        console.log('Tidak ada buku.');
        return;
    }
    for (let i = 0; i < books_1.default.length; i++) {
        const book = books_1.default[i];
        console.log(`${i + 1}. "${book.title}" by ${book.author} (${book.publicationYear})`);
    }
}
// Function to search for books by title
function searchBook(title) {
    console.log('\n=== HASIL PENCARIAN ===');
    if (!title) {
        console.log('Tidak ada kata kunci pencarian. Menampilkan semua buku:');
        listBooks();
        return;
    }
    const searchLower = title.toLowerCase();
    const foundBooks = [];
    for (let i = 0; i < books_1.default.length; i++) {
        const book = books_1.default[i];
        if (book.title.toLowerCase().includes(searchLower)) {
            foundBooks.push(book);
        }
    }
    if (foundBooks.length === 0) {
        console.log(`Judul buku:"${title}" tidak ditemukan`);
    }
    else {
        console.log(`Ditemukan ${foundBooks.length} buku dengan judul "${title}":`);
        for (let i = 0; i < foundBooks.length; i++) {
            const book = foundBooks[i];
            console.log(`  - "${book.title}" by ${book.author} (${book.publicationYear})`);
        }
    }
}
