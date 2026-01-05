// kasir.js
// ===================================================
// Studi Kasus 2: Program Kasir Kafe Sederhana
// Kafe Koding
// ===================================================

// Fungsi utama untuk menghitung total pesanan
function hitungTotalPesanan(kodeMenu, jumlah) {
  let namaMenu;
  let hargaSatuan;

  // --- Tentukan harga berdasarkan kode menu ---
  switch (kodeMenu.toUpperCase()) {
    case "KOPI":
      namaMenu = "Kopi";
      hargaSatuan = 25000;
      break;
    case "TEH":
      namaMenu = "Teh";
      hargaSatuan = 20000;
      break;
    case "PIZZA":
      namaMenu = "Pizza";
      hargaSatuan = 55000;
      break;
    default:
      namaMenu = "Menu Tidak Dikenal";
      hargaSatuan = 0;
  }

  // --- Hitung subtotal ---
  const subtotal = hargaSatuan * jumlah;

  // --- Hitung diskon berdasarkan subtotal ---
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  const jumlahDiskon = (subtotal * diskonPersen) / 100;
  const totalBayar = subtotal - jumlahDiskon;

  // --- Format angka ke format Rupiah ---
  const formatRupiah = (angka) => `Rp ${angka.toLocaleString("id-ID")}`;

  // --- Susun struk pembelian ---
  const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)    : - ${formatRupiah(jumlahDiskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;

  // Kembalikan struk sebagai hasil fungsi
  return struk;
}

// ===================================================
// Contoh pemanggilan fungsi
// ===================================================

console.log(hitungTotalPesanan("PIZZA", 2));
