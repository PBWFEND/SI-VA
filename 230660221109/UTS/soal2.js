// soal2.js
const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// Filter produk kategori Elektronik
const produkElektronik = dataProduk.filter((p) => p.kategori === "Elektronik");

// Map untuk membuat daftar nama produk
const namaProduk = dataProduk.map((p) => `(ID: ${p.id}) ${p.nama}`);

// Output
console.log("=== Soal 2: Pengolahan Data Array ===");
console.log("Produk Elektronik:", produkElektronik);
console.log("Daftar Nama Produk:", namaProduk);
