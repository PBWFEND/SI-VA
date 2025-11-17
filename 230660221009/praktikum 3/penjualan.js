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

// --- Tugas 1: Filter (hanya produk 'Mouse') ---
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

console.log("=== TUGAS 1: Transaksi Mouse ===");
console.log(transaksiMouse);
console.log(); // baris kosong agar rapi

// --- Tugas 2: Map (ubah jadi format laporan string) ---
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

console.log("=== TUGAS 2: Laporan Penjualan ===");
laporanPenjualan.forEach(laporan => console.log(laporan));
console.log();

// --- Tugas 3: Reduce (hitung total pendapatan) ---
const totalPendapatan = transaksi.reduce((total, item) => {
  return total + (item.harga * item.jumlah);
}, 0);

console.log("=== TUGAS 3: Total Pendapatan ===");
console.log(`Rp ${totalPendapatan.toLocaleString('id-ID')}`);