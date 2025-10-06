/**
 * Menghitung total pesanan di Kafe Koding berdasarkan menu dan jumlah,
 * lalu memberikan diskon jika memenuhi syarat.
 *
 * @param {string} kodeMenu - Kode menu yang dipesan (KOPI, TEH, PIZZA).
 * @param {number} jumlah - Jumlah item yang dipesan.
 * @returns {string} - String struk pembelian yang sudah terformat.
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
  // 1. Inisialisasi variabel awal
  let hargaSatuan = 0;
  let namaMenu = "";

  // Validasi input untuk memastikan kodeMenu adalah string dan jumlah adalah angka
  if (typeof kodeMenu !== 'string' || typeof jumlah !== 'number' || jumlah <= 0) {
    return "Input tidak valid. Harap periksa kembali pesanan Anda.";
  }
  
  // 2. Gunakan switch-case untuk menentukan harga berdasarkan kodeMenu
  // Mengubah kodeMenu menjadi huruf besar agar tidak case-sensitive (e.g., "kopi" tetap valid)
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
      // Jika kode tidak ditemukan, kembalikan pesan error
      return `--- Pesan Error ---\nMenu dengan kode "${kodeMenu}" tidak ditemukan.`;
  }

  // 3. Hitung subtotal
  const subtotal = hargaSatuan * jumlah;

  // 4. Gunakan if-else untuk logika diskon
  let diskonPersen = 0;
  let diskonNominal = 0;

  if (subtotal > 100000) {
    diskonPersen = 15;
    diskonNominal = subtotal * 0.15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
    diskonNominal = subtotal * 0.10;
  }

  // 5. Hitung total akhir setelah diskon
  const totalBayar = subtotal - diskonNominal;

  // 6. Format angka ke dalam format Rupiah (e.g., 110000 -> "Rp 110.000")
  const formatRupiah = (angka) => {
    return `Rp ${angka.toLocaleString("id-ID")}`;
  };
  
  // 7. Kembalikan (return) string struk yang sudah terformat
  const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)    : - ${formatRupiah(diskonNominal)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
  `;

  return struk.trim(); // .trim() untuk menghapus spasi kosong di awal dan akhir
}

// --- Contoh Penggunaan Fungsi ---

// Contoh 1: Sesuai permintaan (mendapat diskon 15%)
console.log("--- CONTOH 1: Pizza x 2 ---");
console.log(hitungTotalPesanan("PIZZA", 2));

// Contoh 2: Pembelian yang mendapat diskon 10%
console.log("\n--- CONTOH 2: Teh x 3 ---");
console.log(hitungTotalPesanan("TEH", 3));

// Contoh 3: Pembelian tanpa diskon
console.log("\n--- CONTOH 3: Kopi x 1 ---");
console.log(hitungTotalPesanan("KOPI", 1));

// Contoh 4: Kode menu tidak valid
console.log("\n--- CONTOH 4: Menu Salah ---");
console.log(hitungTotalPesanan("NASI", 2));