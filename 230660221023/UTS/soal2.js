/**
 * Soal 2: Pengolahan Data Array
 * Menggunakan Array Methods .filter() dan .map()
 */

const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// 1. Gunakan .filter() untuk produkElektronik
const produkElektronik = dataProduk.filter(
  (produk) => produk.kategori === "Elektronik"
);

// 2. Gunakan .map() untuk namaProduk
const namaProduk = dataProduk.map(
  (produk) => `(ID: ${produk.id}) ${produk.nama}`
);

// --- Uji Coba ---
console.log("--- Soal 2: Pengolahan Data Array ---");

console.log("\nProduk Kategori Elektronik:");
console.log(produkElektronik);

console.log("\nDaftar Nama Produk (Format Baru):");
console.log(namaProduk);