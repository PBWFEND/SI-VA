/**
 * Soal 2 – Pengolahan Data Array
 * Menggunakan .filter() dan .map()
 */

const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id:3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// 1. Filter produk elektronik
const produkElektronik = dataProduk.filter(
  (produk) => produk.kategori === "Elektronik"
);

// 2. Map nama produk dengan format baru
const namaProduk = dataProduk.map(
  (produk) => `(ID: ${produk.id}) ${produk.nama}`
);

// --- Tampilkan Hasil ---
console.log("--- Produk Kategori Elektronik ---");
console.log(produkElektronik);

console.log("\n--- Daftar Nama Produk ---");
console.log(namaProduk);