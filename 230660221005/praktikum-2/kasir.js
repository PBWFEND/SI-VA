// kasir.js

/**
 * Fungsi untuk menghitung total pesanan di Kafe Koding
 * @param {string} kodeMenu - kode menu (KOPI, TEH, PIZZA)
 * @param {number} jumlah - jumlah item yang dipesan
 * @returns {string} - struk pembelian terformat
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
      namaMenu = "Menu tidak dikenal";
  }

  // Hitung subtotal
  let subtotal = hargaSatuan * jumlah;

  // Tentukan diskon
  let diskon = 0;
  if (subtotal > 100000) {
    diskon = subtotal * 0.15;
  } else if (subtotal > 50000) {
    diskon = subtotal * 0.10;
  }

  // Hitung total akhir
  let total = subtotal - diskon;

  // Format angka jadi Rupiah
  function formatRupiah(angka) {
    return `Rp ${angka.toLocaleString("id-ID")}`;
  }

  // Return struk pembelian
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
${diskon > 0 ? `Diskon (${diskon / subtotal * 100}%) : - ${formatRupiah(diskon)}` : "Diskon          : - Rp 0"}
-----------------------------------
Total Bayar     : ${formatRupiah(total)}
--- Terima Kasih ---
  `;
}

// --- Uji Coba Fungsi ---
console.log(hitungTotalPesanan("PIZZA", 2));
console.log(hitungTotalPesanan("KOPI", 3));
console.log(hitungTotalPesanan("TEH", 1));
