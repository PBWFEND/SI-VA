const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// ----- (Filter) -----
// Membuat array baru yang hanya berisi transaksi produk 'Mouse'.
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');


// ----- (Map) -----
// Mengubah setiap objek transaksi menjadi format string laporan.
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});


// ----- (Reduce) -----
// Menjumlahkan total pendapatan dari semua transaksi.
const totalPendapatan = transaksi.reduce((akumulator, item) => {
  const subtotal = item.harga * item.jumlah;
  return akumulator + subtotal;
}, 0); // 0 adalah nilai awal untuk akumulator


// ----- Mencetak Semua Hasil ke Konsol -----

console.log("--- TUGAS 1: HASIL FILTER TRANSAKSI MOUSE ---");
console.log(transaksiMouse);
/*
Output yang diharapkan:
[
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 }
]
*/

console.log("\n--- TUGAS 2: HASIL MAP LAPORAN PENJUALAN ---");
console.log(laporanPenjualan);
/*
Output yang diharapkan:
[
  'ID: TRX001, Produk: Laptop, Total: Rp 12.000.000',
  'ID: TRX002, Produk: Mouse, Total: Rp 300.000',
  'ID: TRX003, Produk: Keyboard, Total: Rp 750.000',
  'ID: TRX004, Produk: Monitor, Total: Rp 2.500.000',
  'ID: TRX005, Produk: Mousepad, Total: Rp 150.000',
  'ID: TRX006, Produk: Mouse, Total: Rp 150.000'
]
*/

console.log("\n--- TUGAS 3: HASIL REDUCE TOTAL PENDAPATAN ---");
console.log(`Total Pendapatan dari Semua Transaksi: Rp ${totalPendapatan.toLocaleString('id-ID')}`);
/*
Output yang diharapkan:
Total Pendapatan dari Semua Transaksi: Rp 15.850.000
*/