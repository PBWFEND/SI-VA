// Data transaksi
const transaksi = [
  { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
  { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
  { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
  { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
  { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
  { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
];

// TUGAS 1: Filter - Transaksi Mouse
const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');

// TUGAS 2: Map - Laporan Penjualan
const laporanPenjualan = transaksi.map(item => {
  const total = item.harga * item.jumlah;
  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${total.toLocaleString('id-ID')}`;
});

// TUGAS 3: Reduce - Total Pendapatan
const totalPendapatan = transaksi.reduce((accumulator, currentItem) => {
  return accumulator + (currentItem.harga * currentItem.jumlah);
}, 0);

// Menampilkan hasil ke konsol
console.log("====================================");
console.log("        LAPORAN PENJUALAN");
console.log("====================================");

console.log("\n1. TRANSAKSI MOUSE (Filter):");
console.log("------------------------------");
if (transaksiMouse.length > 0) {
  transaksiMouse.forEach(transaksi => {
    console.log(transaksi);
  });
} else {
  console.log("Tidak ada transaksi mouse");
}

console.log("\n2. LAPORAN PENJUALAN (Map):");
console.log("------------------------------");
laporanPenjualan.forEach(laporan => {
  console.log(laporan);
});

console.log("\n3. TOTAL PENDAPATAN (Reduce):");
console.log("------------------------------");
console.log(`Total Pendapatan: Rp ${totalPendapatan.toLocaleString('id-ID')}`);

console.log("\n====================================");
console.log("         DETAIL PERHITUNGAN");
console.log("====================================");

// Versi alternatif dengan for loop untuk pemahaman
console.log("\n--- Perhitungan Manual dengan For Loop ---");
let totalManual = 0;
for (let i = 0; i < transaksi.length; i++) {
  const item = transaksi[i];
  const subtotal = item.harga * item.jumlah;
  totalManual += subtotal;
  console.log(`${item.produk}: ${item.jumlah} x Rp ${item.harga.toLocaleString('id-ID')} = Rp ${subtotal.toLocaleString('id-ID')}`);
}
console.log(`Total Manual: Rp ${totalManual.toLocaleString('id-ID')}`);
