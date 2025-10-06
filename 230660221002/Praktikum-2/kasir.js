// kasir.js

function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan;
  let namaMenu;

  // Menentukan harga berdasarkan kode menu
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
  }

  // Hitung subtotal
  const subtotal = hargaSatuan * jumlah;
  let diskon = 0;
  let persenDiskon = 0;

  // Logika diskon
  if (subtotal > 100000) {
    persenDiskon = 15;
    diskon = subtotal * 0.15;
  } else if (subtotal > 50000) {
    persenDiskon = 10;
    diskon = subtotal * 0.10;
  }

  const totalAkhir = subtotal - diskon;

  // Format angka menjadi Rupiah
  const formatRupiah = (angka) =>
    `Rp ${angka.toLocaleString("id-ID")}`;

  // Return string hasil struk
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${persenDiskon}%)    : - ${formatRupiah(diskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalAkhir)}
--- Terima Kasih ---
`;
}

// Pemanggilan fungsi
console.log(hitungTotalPesanan("PIZZA", 2));

module.exports = hitungTotalPesanan;
