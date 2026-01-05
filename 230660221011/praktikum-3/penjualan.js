// Data Transaksi Awal
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// -----------------------------------------------------------------

// Tugas 1 (Filter): Transaksi produk 'Mouse'
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// -----------------------------------------------------------------

// Tugas 2 (Map): Laporan penjualan dalam format string
const laporanPenjualan = transaksi.map(item => {
  // Hitung total harga untuk item ini
  const total = item.harga * item.jumlah;
  
  // Format total harga ke Rupiah (id-ID)
  const totalFormatted = total.toLocaleString('id-ID');
  
  // Kembalikan string sesuai format
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${totalFormatted}`;
});

// -----------------------------------------------------------------

// Tugas 3 (Reduce): Hitung total pendapatan
// 'akumulator' menyimpan total yang sedang berjalan
// 'item' adalah data transaksi saat ini
// 0 adalah nilai awal untuk 'akumulator'
const totalPendapatan = transaksi.reduce((akumulator, item) => {
  const totalPerItem = item.harga * item.jumlah;
  return akumulator + totalPerItem;
}, 0);

// -----------------------------------------------------------------

// Tugas 5: Cetak semua hasil ke konsol

console.log("--- LAPORAN PENJUALAN SEDERHANA ---");

console.log("\n## TUGAS 1: TRANSAKSI MOUSE ##");
console.log(transaksiMouse);

console.log("\n## TUGAS 2: LAPORAN PENJUALAN (FORMAT STRING) ##");
console.log(laporanPenjualan);

console.log("\n## TUGAS 3: TOTAL PENDAPATAN ##");
// Format juga total pendapatan agar mudah dibaca
console.log(`Total Seluruh Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);