function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan = 0;
    let namaMenu = "";

    // Menentukan harga satuan dan nama menu
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
    let subtotal = hargaSatuan * jumlah;

    // Hitung diskon
    let diskon = 0;
    let persentaseDiskon = 0;

    if (subtotal > 100000) {
        persentaseDiskon = 15;
    } else if (subtotal > 50000) {
        persentaseDiskon = 10;
    }

    diskon = (subtotal * persentaseDiskon) / 100;
    let totalBayar = subtotal - diskon;

    // Format angka ke Rupiah
    const formatRupiah = (angka) => {
        return 'Rp ' + angka.toLocaleString('id-ID');
    };

    // Buat struk
    const struk = `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${persentaseDiskon}%)    : - ${formatRupiah(diskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
    `.trim();

    return struk;
}

// Contoh pemanggilan fungsi:
console.log(hitungTotalPesanan("PIZZA", 2));
