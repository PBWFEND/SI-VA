// penjualan.js

const transaksi = [
    { id: 'TRX001', produk: 'Laptop', harga: 12000000, jumlah: 1 },
    { id: 'TRX002', produk: 'Mouse', harga: 150000, jumlah: 2 },
    { id: 'TRX003', produk: 'Keyboard', harga: 750000, jumlah: 1 },
    { id: 'TRX004', produk: 'Monitor', harga: 2500000, jumlah: 1 },
    { id: 'TRX005', produk: 'Mousepad', harga: 50000, jumlah: 3 },
    { id: 'TRX006', produk: 'Mouse', harga: 150000, jumlah: 1 },
  ];
  
  // ============================
  // Fungsi bantu format Rupiah
  // ============================
  function formatRupiah(angka) {
    return angka.toLocaleString('id-ID');
  }
  
  // ============================
  // Tugas 1: Filter transaksi Mouse
  // ============================
  const transaksiMouse = transaksi.filter(item => item.produk === 'Mouse');
  
  // ============================
  // Tugas 2: Map menjadi laporan penjualan
  // ============================
  const laporanPenjualan = transaksi.map(item => {
    const total = item.harga * item.jumlah;
    return `ID: ${item.id}, Produk: ${item.produk}, Total: Rp ${formatRupiah(total)}`;
  });
  
  // ============================
  // Tugas 3: Reduce - Total pendapatan
  // ============================
  const totalPendapatan = transaksi.reduce((acc, item) => acc + (item.harga * item.jumlah), 0);
  
  // ============================
  // Fungsi tambahan: Hitung total per produk
  // ============================
  function hitungTotalPerProduk(data) {
    const hasil = {};
  
    data.forEach(item => {
      const total = item.harga * item.jumlah;
      if (!hasil[item.produk]) {
        hasil[item.produk] = total;
      } else {
        hasil[item.produk] += total;
      }
    });
  
    return hasil;
  }
  
  const totalPerProduk = hitungTotalPerProduk(transaksi);
  
  // ============================
  // Cetak hasil ke konsol
  // ============================
  console.log("=====================================");
  console.log("        📦 DATA TRANSAKSI TOKO");
  console.log("=====================================");
  
  console.log("\n=== Transaksi Mouse ===");
  console.table(transaksiMouse);
  
  console.log("\n=== Laporan Penjualan ===");
  laporanPenjualan.forEach(item => console.log(item));
  
  console.log("\n=== Total Pendapatan ===");
  console.log(`Rp ${formatRupiah(totalPendapatan)}`);
  
  console.log("\n=== Total Penjualan per Produk ===");
  for (const [produk, total] of Object.entries(totalPerProduk)) {
    console.log(`${produk.padEnd(10)} : Rp ${formatRupiah(total)}`);
  }
  
  console.log("\n=====================================");
  console.log("       💰 TERIMA KASIH 💰");
  console.log("=====================================");
  