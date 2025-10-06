/**
 * Fungsi untuk menghitung total pesanan setelah diberikan diskon.
 * @param {number} subtotal - Total harga pesanan sebelum diskon.
 * @param {number} persenDiskon - Persentase diskon yang diberikan (misalnya, 15 untuk 15%).
 * @returns {object} - Objek yang berisi rincian subtotal, nominal diskon, dan total bayar.
 */
function hitungTotalPesanan(subtotal, persenDiskon) {
  // Menghitung jumlah diskon dalam bentuk nominal
  const nominalDiskon = subtotal * (persenDiskon / 100);

  // Menghitung total yang harus dibayar setelah diskon
  const totalBayar = subtotal - nominalDiskon;

  // Mengembalikan hasil dalam bentuk objek
  return {
    subtotal: subtotal,
    diskon: nominalDiskon,
    total: totalBayar,
  };
}

// --- Contoh Penggunaan Sesuai Struk ---

// Data dari struk pembelian
const menuDipesan = "Pizza";
const jumlah = 2;
const subtotalPesanan = 110000;
const persenDiskon = 15;

// Memanggil fungsi untuk melakukan perhitungan
const hasilPerhitungan = hitungTotalPesanan(subtotalPesanan, persenDiskon);

// --- Menampilkan Hasil ---
console.log("--- Struk Pembelian Kafe Koding ---");
console.log(`Menu Dipesan   : ${menuDipesan}`);
console.log(`Jumlah         : ${jumlah}`);
console.log(`Subtotal       : Rp ${hasilPerhitungan.subtotal.toLocaleString("id-ID")}`);
console.log(`Diskon (${persenDiskon}%)      : - Rp ${hasilPerhitungan.diskon.toLocaleString("id-ID")}`);
console.log("-----------------------------------");
console.log(`Total Bayar    : Rp ${hasilPerhitungan.total.toLocaleString("id-ID")}`);
console.log("--- Terima Kasih ---");