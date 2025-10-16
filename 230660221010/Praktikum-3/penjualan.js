// penjualan.js

// 1. Data transaksi
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// ===============================
// Tugas 1: Filter transaksi Mouse
// ===============================
const transaksiMouse = transaksi.filter((item) => item.produk === 'Mouse');

console.log('--- Tugas 1: Transaksi Produk Mouse ---');
console.log(transaksiMouse);

// ==============================================
// Tugas 2: Map → Membuat laporan penjualan string
// ==============================================
const laporanPenjualan = transaksi.map((item) => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

console.log('\n--- Tugas 2: Laporan Penjualan ---');
laporanPenjualan.forEach((laporan) => console.log(laporan));

// ===========================================
// Tugas 3: Reduce → Hitung total pendapatan
// ===========================================
const totalPendapatan = transaksi.reduce((acc, item) => {
  return acc + item.harga * item.jumlah;
}, 0);

console.log('\n--- Tugas 3: Total Pendapatan ---');
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);
