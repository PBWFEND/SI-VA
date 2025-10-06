/**
 * Menghitung total pesanan di Kafe Koding berdasarkan kode menu dan jumlah,
 * lalu memberikan diskon jika memenuhi syarat.
 *
 * @param {string} kodeMenu - Kode menu yang dipesan ('KOPI', 'TEH', 'PIZZA').
 * @param {number} jumlah - Jumlah item yang dipesan.
 * @returns {string} String terformat yang berisi rincian struk pembelian.
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan = 0;
  let namaMenu = '';

  // 1. Menentukan harga satuan dan nama menu menggunakan switch-case
  // Menggunakan .toUpperCase() agar input tidak case-sensitive (misal: "pizza" tetap valid)
  switch (kodeMenu.toUpperCase()) {
    case 'KOPI':
      hargaSatuan = 25000;
      namaMenu = 'Kopi';
      break;
    case 'TEH':
      hargaSatuan = 20000;
      namaMenu = 'Teh';
      break;
    case 'PIZZA':
      hargaSatuan = 55000;
      namaMenu = 'Pizza';
      break;
    default:
      // Jika kode menu tidak valid, kembalikan pesan error
      return `Error: Kode menu "${kodeMenu}" tidak valid.`;
  }

  // 2. Menghitung subtotal
  const subtotal = hargaSatuan * jumlah;

  // 3. Menentukan diskon menggunakan if-else
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  const nilaiDiskon = subtotal * (diskonPersen / 100);
  const totalAkhir = subtotal - nilaiDiskon;

  // Helper function untuk format mata uang Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka).replace(/\s/g, ' '); // Menjaga spasi setelah "Rp"
  };


  // 4. Mengembalikan string terformat sesuai contoh output
  let struk = `--- Struk Pembelian Kafe Koding ---\n`;
  struk += `Menu Dipesan    : ${namaMenu}\n`;
  struk += `Jumlah          : ${jumlah}\n`;
  struk += `Subtotal        : ${formatRupiah(subtotal)}\n`;

  if (nilaiDiskon > 0) {
    struk += `Diskon (${diskonPersen}%)    : - ${formatRupiah(nilaiDiskon)}\n`;
  }

  struk += `-----------------------------------\n`;
  struk += `Total Bayar     : ${formatRupiah(totalAkhir)}\n`;
  struk += `--- Terima Kasih ---`;

  return struk;
}

// --- Contoh Penggunaan Fungsi ---

// Contoh 1: Sesuai dengan dokumen (Pembelian Pizza 2 buah)
console.log("Contoh 1: Pembelian Pizza");
const pesanan1 = hitungTotalPesanan("PIZZA", 2);
console.log(pesanan1);
console.log("\n===================================\n");

// Contoh 2: Pembelian yang mendapatkan diskon 10% (3 Kopi = Rp 75.000)
console.log("Contoh 2: Pembelian Kopi (Diskon 10%)");
const pesanan2 = hitungTotalPesanan("KOPI", 3);
console.log(pesanan2);
console.log("\n===================================\n");

// Contoh 3: Pembelian yang tidak mendapatkan diskon (1 Teh = Rp 20.000)
console.log("Contoh 3: Pembelian Teh (Tanpa Diskon)");
const pesanan3 = hitungTotalPesanan("TEH", 1);
console.log(pesanan3);
console.log("\n===================================\n");

// Contoh 4: Kode menu tidak valid
console.log("Contoh 4: Kode Menu Tidak Valid");
const pesanan4 = hitungTotalPesanan("NASI", 2);
console.log(pesanan4);