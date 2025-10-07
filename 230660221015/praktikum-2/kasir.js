// Program Kasir Sederhana - Kafe Koding
// 230660221015

function prosesPembelian() {
    // Data menu kafe
    const menuKafe = {
        "KOPI": { nama: "Kopi", harga: 25000 },
        "TEH": { nama: "Teh", harga: 20000 },
        "PIZZA": { nama: "Pizza", harga: 55000 }
    };
    
    // Input pemesanan
    const kodeMenu = "PIZZA";  // Bisa diganti dengan input
    const jumlahPesanan = 2;   // Bisa diganti dengan input
    
    // Cek menu tersedia
    const menu = menuKafe[kodeMenu.toUpperCase()];
    
    if (!menu) {
        return "Menu tidak ditemukan!";
    }
    
    // Hitung subtotal
    const subtotal = menu.harga * jumlahPesanan;
    
    // Tentukan diskon
    let persentaseDiskon = 0;
    if (subtotal > 100000) {
        persentaseDiskon = 15;
    } else if (subtotal > 50000) {
        persentaseDiskon = 10;
    }
    
    const jumlahDiskon = subtotal * (persentaseDiskon / 100);
    const totalBayar = subtotal - jumlahDiskon;
    
    // Format ke Rupiah
    const formatRupiah = (angka) => `Rp ${angka.toLocaleString('id-ID')}`;
    
    // Generate struk
    const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${menu.nama}
Jumlah          : ${jumlahPesanan}
Harga Satuan    : ${formatRupiah(menu.harga)}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${persentaseDiskon}%)    : - ${formatRupiah(jumlahDiskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
`;
    
    return struk;
}

// Jalankan program
console.log(prosesPembelian());

// Export untuk testing (jika diperlukan)
module.exports = prosesPembelian;