// Data transaksi penjualan
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// --- Tugas 1: Filter Transaksi Mouse ---
// Menggunakan method .filter() untuk membuat array baru yang hanya berisi
// transaksi dengan produk 'Mouse'.
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// --- Tugas 2: Laporan Penjualan (Map) ---
// Menggunakan method .map() untuk mengubah setiap objek transaksi menjadi
// sebuah string laporan yang diformat.
const laporanPenjualan = transaksi.map(item => {
  const totalHarga = item.harga * item.jumlah;
  const formatRupiah = totalHarga.toLocaleString('id-ID');
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${formatRupiah}`;
});

// --- Tugas 3: Total Pendapatan (Reduce) ---
// Menggunakan method .reduce() untuk mengakumulasi total pendapatan dari
// semua transaksi. Akumulator (total) dimulai dari 0.
const totalPendapatan = transaksi.reduce((total, item) => {
  return total + (item.harga * item.jumlah);
}, 0);
const formatTotalPendapatan = totalPendapatan.toLocaleString('id-ID');

// --- Cetak Hasil ke Konsol ---
console.log("--- Laporan Penjualan E-commerce ---");
console.log("\n"); // Memberi jarak

console.log("== Tugas 1: Transaksi Produk Mouse ==");
console.log(transaksiMouse);
console.log("\n");

console.log("== Tugas 2: Laporan Penjualan (String) ==");
console.log(laporanPenjualan);
console.log("\n");

console.log("== Tugas 3: Total Pendapatan ==");
console.log(`Total pendapatan dari semua transaksi adalah: Rp ${formatTotalPendapatan}`);