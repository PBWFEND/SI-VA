// ===================================================
// PROGRAM KASIR KAFE KODING
// ===================================================

// Fungsi untuk menghitung total pesanan
function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan = 0;
  let namaMenu = "";

  // --- Menentukan harga berdasarkan kodeMenu ---
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

  // --- Hitung subtotal ---
  const subtotal = hargaSatuan * jumlah;

  // --- Logika diskon ---
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  const jumlahDiskon = (subtotal * diskonPersen) / 100;
  const totalBayar = subtotal - jumlahDiskon;

  // --- Format angka ke Rupiah ---
  const formatRupiah = (angka) => `Rp ${angka.toLocaleString("id-ID")}`;

  // --- Mengembalikan hasil dalam format string ---
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)    : - ${formatRupiah(jumlahDiskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;
}

// ===================================================
// Contoh pemanggilan fungsi
// ===================================================
console.log(hitungTotalPesanan("PIZZA", 2));
