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
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

// Function u/ menambahkan buku baru ke dalam koleksi
// Parameter: data buku sesuai tipe Book
function addBook(book: Book): void {
  // Implementasi fungsi untuk menambahkan buku ke dalam koleksi
  books.push(book);
  console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}

// Function u/ menampilkan semua buku yang tersimpan
function listBooks(): void {
  if (books.length === 0) {
    console.log('Tidak ada buku yang tersimpan.');
    return;
  }
  console.log('Daftar Buku:');
  books.forEach((book, index) => {
    console.log(
      `${index + 1}. ${book.title} oleh ${book.author} (${book.publicationYear})`
    );
  });
}

// Function u/ mencari buku berdasarkan judul
// Parameter title bersifat opsional
function searchBook(title?: string): void {
  if (!title) {
    console.log('Judul tidak diberikan. Menampilkan semua buku:');
    listBooks();
    return;
  }
  const foundBooks = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );
  if (foundBooks.length === 0) {
    console.log(
      `Tidak ditemukan buku dengan judul yang mengandung "${title}".`
    );
  } else {
    console.log(`Buku yang ditemukan dengan judul mengandung "${title}":`);
    foundBooks.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} oleh ${book.author} (${book.publicationYear})`
      );
    });
  }
}

export { addBook, listBooks, searchBook };
