// penjualan.js

// --- Data Transaksi ---
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// --- Tugas 1: Filter ---
// Ambil hanya transaksi yang produknya 'Mouse'
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

console.log('--- Transaksi Produk Mouse ---');
console.log(transaksiMouse);
console.log('----------------------------------\n');

// --- Tugas 2: Map ---
// Ubah setiap transaksi menjadi string laporan
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

console.log('--- Laporan Penjualan ---');
laporanPenjualan.forEach(laporan => console.log(laporan));
console.log('----------------------------------\n');

// --- Tugas 3: Reduce ---
// Hitung total pendapatan dari semua transaksi
const totalPendapatan = transaksi.reduce((total, item) => {
  return total + item.harga * item.jumlah;
}, 0);

console.log('--- Total Pendapatan ---');
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);
console.log('----------------------------------');
