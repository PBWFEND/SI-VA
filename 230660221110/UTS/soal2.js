// Data Produk Awal
const dataProduk = [
  { id: 1, nama: "Laptop Asus", harga: 12000000, kategori: "Elektronik" },
  { id: 2, nama: "Buku OOP", harga: 100000, kategori: "Buku" },
  { id: 3, nama: "Mouse Logitech", harga: 35000, kategori: "Elektronik" },
  { id: 4, nama: "Novel 'Bumi'", harga: 85000, kategori: "Buku" },
];

// --- Tugas 1: Menggunakan .filter() ---

// 1. Gunakan .filter() untuk membuat produkElektronik yang hanya berisi produk kategori "Elektronik".
const produkElektronik = dataProduk.filter(
  (produk) => produk.kategori === "Elektronik"
);

// --- Tugas 2: Menggunakan .map() ---

// 2. Gunakan .map() untuk membuat namaProduk berisi string dengan format "(ID: [id]) [Nama Produk]".
const namaProduk = dataProduk.map(
  (produk) => `(ID: ${produk.id}) ${produk.nama}`
);

// --- Output yang Diharapkan ---

console.log("Output Tugas 1 (produkElektronik):");
console.log(produkElektronik);
console.log("\n--------------------------\n");

console.log("Output Tugas 2 (namaProduk):");
console.log(namaProduk);
