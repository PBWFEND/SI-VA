// penjualan.js
// ===================================================
// Studi Kasus 3: Pengolahan Data Penjualan
// ===================================================

// --- DATA TRANSAKSI ---
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// ===================================================
// 🧩 Tugas 1: FILTER
// ===================================================
// Buat array baru yang hanya berisi transaksi dengan produk "Mouse"
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// ===================================================
// 🧩 Tugas 2: MAP
// ===================================================
// Ubah setiap transaksi menjadi string berformat rapi
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

// ===================================================
// 🧩 Tugas 3: REDUCE (Challenge)
// ===================================================
// Hitung total pendapatan dari semua transaksi
const totalPendapatan = transaksi.reduce((acc, item) => {
  return acc + item.harga * item.jumlah;
}, 0);

// ===================================================
// 🧾 CETAK HASIL KE TERMINAL
// ===================================================

console.log("===============================================");
console.log("        LAPORAN PENJUALAN KAFE KODING");
console.log("===============================================\n");

console.log(">> Tugas 1: Filter (Transaksi Produk 'Mouse')");
console.log(transaksiMouse);

console.log("\n>> Tugas 2: Map (Laporan Penjualan)");
laporanPenjualan.forEach(data => console.log(data));

console.log("\n>> Tugas 3: Reduce (Total Pendapatan Keseluruhan)");
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);

console.log("\n===============================================");
