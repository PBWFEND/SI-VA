/**
 * kasir.js
 * * Script Node.js untuk menghitung total pesanan dengan diskon.
 *//**
 * Menghitung total pesanan berdasarkan kode menu dan jumlah.
 * * @param {string} kodeMenu - Kode menu (misalnya, 'KOPI', 'TEH', 'PIZZA').
 * @param {number} jumlah - Jumlah pesanan.
 * @returns {string} - String terformat yang berisi rincian pesanan.
 */
function hitungTotalPesanan(kodeMenu, jumlah) {
    // 1. Inisialisasi variabel
    let hargaSatuan = 0;
    let namaMenu = "";
    const kode = kodeMenu.toUpperCase(); // Pastikan kode dalam huruf kapital untuk perbandingan yang konsisten

    // 2. Tentukan harga satuan dan nama menu menggunakan switch-case
    switch (kode) {
        case 'KOPI':
            hargaSatuan = 25000;
            namaMenu = "Kopi";
            break;
        case 'TEH':
            hargaSatuan = 20000;
            namaMenu = "Teh";
            break;
        case 'PIZZA':
            hargaSatuan = 55000;
            namaMenu = "Pizza";
            break;
        default:
            hargaSatuan = 0;
            namaMenu = "Menu Tidak Dikenal";
            break;
    }

    // Jika menu tidak dikenal atau jumlah tidak valid, kembalikan pesan error
    if (hargaSatuan === 0 || jumlah <= 0) {
        if (hargaSatuan === 0 && jumlah > 0) {
            return `Kode menu '${kodeMenu}' tidak valid. Pesanan dibatalkan.`;
        }
        return "Input tidak valid. Pastikan kode menu benar dan jumlah lebih dari 0.";
    }

    // 3. Hitung subtotal
    const subtotal = hargaSatuan * jumlah;

    // 4. Logika diskon menggunakan if-else
    let persentaseDiskon = 0;

    if (subtotal > 100000) {
        persentaseDiskon = 0.15; // Diskon 15%
    } else if (subtotal > 50000) {
        persentaseDiskon = 0.10; // Diskon 10%
    } else {
        persentaseDiskon = 0;    // Tidak ada diskon
    }

    const nilaiDiskon = subtotal * persentaseDiskon;
    const totalAkhir = subtotal - nilaiDiskon;

    
    const formatRupiah = (angka) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    let rincian = `======================================
              RINCIAN PESANAN
======================================
Menu           : ${namaMenu} (${kode})
Harga Satuan   : ${formatRupiah(hargaSatuan)}
Jumlah Pesan   : ${jumlah}
--------------------------------------
Subtotal       : ${formatRupiah(subtotal)}
Diskon         : ${persentaseDiskon * 100}% (${formatRupiah(nilaiDiskon)})
--------------------------------------
TOTAL AKHIR    : ${formatRupiah(totalAkhir)}
======================================
--------- Terima Kasih ---------`;

    return rincian;
}



console.log("--- CONTOH 1: Diskon 15% (Subtotal > Rp 100.000) ---");
const pesanan1 = hitungTotalPesanan('PIZZA', 2); // 3 * 55.000 = 165.000
console.log(pesanan1);

// Ekspor fungsi jika script ini digunakan sebagai modul
module.exports = {
    hitungTotalPesanan
};