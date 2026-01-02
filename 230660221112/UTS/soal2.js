// Soal 2 – Pengolahan Data Array

const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

const produkElektronik = dataProduk.filter(
  (produk) => produk.kategori === "Elektronik"
);

const namaProduk = dataProduk.map(
  (produk) => `(ID: ${produk.id}) ${produk.nama}`
);

console.log("=== Soal 2: Pengolahan Data Array ===");
console.log("Produk Elektronik:", produkElektronik);
console.log("Daftar Nama Produk:", namaProduk);
console.log("\n");
