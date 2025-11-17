function hitungTotalPesanan(kodeMenu, jumlah) {
  let namaMenu;
  let hargaSatuan;

  // Menentukan harga berdasarkan kode menu
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
      namaMenu = "Tidak Dikenal";
      hargaSatuan = 0;
      break;
  }

  // Hitung subtotal
  const subtotal = hargaSatuan * jumlah;

  // Logika diskon
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  // Hitung total diskon dan total bayar
  const totalDiskon = (subtotal * diskonPersen) / 100;
  const totalBayar = subtotal - totalDiskon;

  // Format angka ke dalam format rupiah
  const formatRupiah = (angka) =>
    "Rp " + angka.toLocaleString("id-ID");

  // Hasil akhir (string terformat)
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)    : - ${formatRupiah(totalDiskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;
}

// ⚡ Panggil fungsi di sini supaya ada output
console.log(hitungTotalPesanan("PIZZA", 2));
