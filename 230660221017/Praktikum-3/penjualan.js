// ===================================================
// PROGRAM PENGOLAHAN DATA PENJUALAN
// ===================================================

// --- Data transaksi ---
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// ===================================================
// Tugas 1: Filter transaksi hanya untuk produk 'Mouse'
// ===================================================
const transaksiMouse = transaksi.filter((item) => item.produk === 'Mouse');

// ===================================================
// Tugas 2: Map untuk membuat laporan penjualan
// Format: "ID: [id], Produk: [produk], Total: Rp [harga * jumlah]"
// ===================================================
const laporanPenjualan = transaksi.map((item) => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

// ===================================================
// Tugas 3: Reduce untuk menghitung total pendapatan
// ===================================================
const totalPendapatan = transaksi.reduce((acc, item) => acc + (item.harga * item.jumlah), 0);

// ===================================================
// CETAK HASIL KE TERMINAL
// ===================================================

console.log("==================================================");
console.log("DATA TRANSAKSI PRODUK 'MOUSE'");
console.log("==================================================");
console.log(transaksiMouse);
console.log("\n");

console.log("==================================================");
console.log("LAPORAN PENJUALAN (MAP)");
console.log("==================================================");
laporanPenjualan.forEach((laporan) => console.log(laporan));
console.log("\n");

console.log("==================================================");
console.log("TOTAL PENDAPATAN (REDUCE)");
console.log("==================================================");
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);
console.log("==================================================");
