/**
 * Script Node.js untuk menganalisis data transaksi menggunakan
 * method Array bawaan: Filter, Map, dan Reduce.
 */

// 1. Data Transaksi
const transaksi = [
  { id: "TRX001", produk: "Laptop", harga: 12000000, jumlah: 1 },
  { id: "TRX002", produk: "Mouse", harga: 150000, jumlah: 2 },
  { id: "TRX003", produk: "Keyboard", harga: 750000, jumlah: 1 },
  { id: "TRX004", produk: "Monitor", harga: 2500000, jumlah: 1 },
  { id: "TRX005", produk: "Mousepad", harga: 50000, jumlah: 3 },
  { id: "TRX006", produk: "Mouse", harga: 150000, jumlah: 1 },
];

console.log("=================================================");
console.log("         ANALISIS DATA TRANSAKSI PENJUALAN       ");
console.log("=================================================");

// 2. Tugas 1 (Filter): Buat array baru bernama transaksiMouse
//    yang berisi transaksi untuk produk 'Mouse'.
const transaksiMouse = transaksi.filter((item) => item.produk === "Mouse");

// 3. Tugas 2 (Map): Buat array baru bernama laporanPenjualan.
//    Transformasi transaksi menjadi array string dengan format:
//    "ID: [id], Produk: [produk], Total: Rp [harga * jumlah]"
const laporanPenjualan = transaksi.map((item) => {
  const totalHarga = item.harga * item.jumlah;
  // Gunakan toLocaleString untuk format angka mata uang
  const totalFormatted = totalHarga.toLocaleString("id-ID");

  return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${totalFormatted}`;
});

// 4. Tugas 3 (Reduce - Challenge): Hitung total pendapatan dari semua transaksi.
const totalPendapatan = transaksi.reduce((akumulator, item) => {
  // Akumulator adalah nilai total sejauh ini
  // item.harga * item.jumlah adalah pendapatan untuk transaksi saat ini
  return akumulator + item.harga * item.jumlah;
}, 0); // Nilai awal (initial value) untuk akumulator adalah 0

// 5. Cetak semua hasil ke konsol dengan judul yang jelas.

// Cetak Hasil Filter (transaksiMouse)
console.log("\n--- [HASIL FILTER] Transaksi Produk 'Mouse' ---");
console.log(transaksiMouse);

// Cetak Hasil Map (laporanPenjualan)
console.log("\n--- [HASIL MAP] Laporan Penjualan (Total Per Item) ---");
laporanPenjualan.forEach((laporan) => console.log(laporan));

// Cetak Hasil Reduce (totalPendapatan)
console.log("\n--- [HASIL REDUCE] Total Pendapatan Keseluruhan ---");
// Format total pendapatan agar mudah dibaca
const totalPendapatanFormatted = totalPendapatan.toLocaleString("id-ID");
console.log(`Total Pendapatan: Rp ${totalPendapatanFormatted}`);

console.log("=================================================");
