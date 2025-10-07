// kasir.js

/**
 * Fungsi untuk menghitung total pesanan di Kafe Koding
 * @param {string} kodeMenu - Kode menu ("KOPI", "TEH", "PIZZA")
 * @param {number} jumlah - Jumlah pesanan
 * @returns {string} - Rincian struk pembelian
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan;
  let namaMenu;

  // Tentukan harga satuan berdasarkan kode menu
  switch (kodeMenu.toUpperCase()) {
    case "KOPI":
      hargaSatuan = 25000;
      namaMenu = "Kopi";
      break;
    case "TEH":
      hargaSatuan = 20000;
      namaMenu = "Teh";
      break;
    case "PIZZA":
      hargaSatuan = 55000;
      namaMenu = "Pizza";
      break;
    default:
      hargaSatuan = 0;
      namaMenu = "Menu Tidak Dikenal";
      break;
  }

  // Hitung subtotal
  let subtotal = hargaSatuan * jumlah;

  // Hitung diskon
  let diskon = 0;
  if (subtotal > 100000) {
    diskon = subtotal * 0.15;
  } else if (subtotal > 50000) {
    diskon = subtotal * 0.10;
  }

  // Hitung total akhir
  let totalBayar = subtotal - diskon;

  // Format hasil ke string dengan format rupiah
  const formatRupiah = (angka) =>
    "Rp " + angka.toLocaleString("id-ID");

  // Buat struk pembelian
  const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskon > 0 ? (diskon / subtotal) * 100 + "%" : "0%"}) : - ${formatRupiah(diskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;

  return struk;
}

// --- Contoh Panggilan Fungsi ---
console.log(hitungTotalPesanan("PIZZA", 2));
console.log(hitungTotalPesanan("KOPI", 3));
console.log(hitungTotalPesanan("TEH", 1));
console.log(hitungTotalPesanan("SUSU", 2)); // menu tidak dikenal
