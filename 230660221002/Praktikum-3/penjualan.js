// ===========================================
// File: penjualan.js
// Fitur: Filter, Map, dan Reduce
// ===========================================

// Data Transaksi
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// ===========================================
// Tugas 1: Filter
// ===========================================
// Membuat array baru berisi transaksi produk 'Mouse'
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// ===========================================
// Tugas 2: Map
// ===========================================
// Membuat laporan penjualan dengan format:
// "ID: [id], Produk: [produk], Total: Rp [harga * jumlah]"
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

// ===========================================
// Tugas 3: Reduce (Challenge)
// ===========================================
// Menghitung total pendapatan dari seluruh transaksi
const totalPendapatan = transaksi.reduce((acc, item) => {
  return acc + (item.harga * item.jumlah);
}, 0);

// ===========================================
// OUTPUT KE KONSOL
// ===========================================

console.log("===========================================");
console.log("=== Transaksi Produk Mouse ===");
console.log("===========================================");
console.table(transaksiMouse);

console.log("\n===========================================");
console.log("=== Laporan Penjualan ===");
console.log("===========================================");
laporanPenjualan.forEach(laporan => console.log(laporan));

console.log("\n===========================================");
console.log("=== Total Pendapatan ===");
console.log("===========================================");
console.log(`Rp ${totalPendapatan.toLocaleString('id-ID')}`);
