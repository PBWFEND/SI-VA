// kasir.js

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
      namaMenu = "Menu tidak dikenal";
  }

  // Hitung subtotal
  let subtotal = hargaSatuan * jumlah;

  // Hitung diskon
  let diskon = 0;
  let persenDiskon = 0;

  if (subtotal > 100000) {
    persenDiskon = 15;
    diskon = subtotal * 0.15;
  } else if (subtotal > 50000) {
    persenDiskon = 10;
    diskon = subtotal * 0.10;
  }

  // Hitung total akhir
  let totalAkhir = subtotal - diskon;

  // Format angka ke rupiah
  const formatRupiah = (angka) => {
    return "Rp " + angka.toLocaleString("id-ID");
  };

  // Kembalikan struk
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
${diskon > 0 ? `Diskon (${persenDiskon}%)   : - ${formatRupiah(diskon)}` : "Diskon          : -"}
-----------------------------------
Total Bayar     : ${formatRupiah(totalAkhir)}
--- Terima Kasih ---
`;
}

// Contoh pemanggilan fungsi
console.log(hitungTotalPesanan("PIZZA", 2));