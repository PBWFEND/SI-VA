// ===========================================
// 📊 STUDI KASUS 3: PENGOLAHAN DATA PENJUALAN
// ===========================================

// Data transaksi
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// ===========================================
// 🧩 Tugas 1: Filter transaksi 'Mouse'
// ===========================================
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

console.log('=== TUGAS 1: TRANSAKSI MOUSE ===');
console.table(transaksiMouse);

// ===========================================
// 🧾 Tugas 2: Map → Laporan Penjualan
// Format: "ID: [id], Produk: [produk], Total: Rp [harga * jumlah]"
// ===========================================
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

console.log('\n=== TUGAS 2: LAPORAN PENJUALAN ===');
laporanPenjualan.forEach(laporan => console.log(laporan));

// ===========================================
// 💰 Tugas 3: Reduce → Total Pendapatan
// ===========================================
const totalPendapatan = transaksi.reduce((total, item) => total + (item.harga * item.jumlah), 0);

console.log('\n=== TUGAS 3: TOTAL PENDAPATAN ===');
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);
