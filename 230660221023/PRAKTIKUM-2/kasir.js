function hitungTotalPesanan(kodeMenu, jumlah) {
    let hargaSatuan = 0;
    let namaMenu = "";

    // Tentukan harga dan nama menu pakai switch-case
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

    // Tentukan diskon
    let diskon = 0;
    let persenDiskon = 0;

    if (subtotal > 100000) {
        persenDiskon = 15;
        diskon = subtotal * 0.15;
    } else if (subtotal > 50000) {
        persenDiskon = 10;
        diskon = subtotal * 0.10;
    }

    let totalAkhir = subtotal - diskon;

    // Format angka ke rupiah sederhana
    function formatRupiah(angka) {
        return "Rp " + angka.toLocaleString("id-ID");
    }

    // Return struk pembelian
    return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
${diskon > 0 ? `Diskon (${persenDiskon}%)    : - ${formatRupiah(diskon)}` : "Diskon         : -"}
-----------------------------------
Total Bayar     : ${formatRupiah(totalAkhir)}
--- Terima Kasih ---`;
}

// Contoh pemanggilan
console.log(hitungTotalPesanan("PIZZA", 2));
