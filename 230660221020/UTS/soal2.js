const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 350000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// Filter produk elektronik
const produkElektronik = dataProduk.filter(
  (produk) => produk.kategori === "Elektronik"
);

// Map nama produk
const namaProduk = dataProduk.map(
  (produk) => `(ID: ${produk.id}) ${produk.nama}`
);

console.log("Produk Elektronik:");
console.log(produkElektronik);

console.log("\nDaftar Nama Produk:");
console.log(namaProduk);
