function hitungTotalPesanan(kodeMenu, jumlah) {
    // Menentukan nama menu dan harga satuan berdasarkan kode
    let namaMenu;
    let hargaSatuan;
    
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
            namaMenu = "Menu tidak dikenali";
            hargaSatuan = 0;
    }
    
    // Menghitung subtotal
    let subtotal = hargaSatuan * jumlah;
    
    // Menentukan diskon
    let persentaseDiskon;
    if (subtotal > 100000) {
        persentaseDiskon = 15;
    } else if (subtotal > 50000) {
        persentaseDiskon = 10;
    } else {
        persentaseDiskon = 0;
    }
    
    // Menghitung nilai diskon dan total akhir
    let nilaiDiskon = (subtotal * persentaseDiskon) / 100;
    let totalBayar = subtotal - nilaiDiskon;
    
    // Format angka ke Rupiah
    function formatRupiah(angka) {
        return "Rp " + angka.toLocaleString('id-ID');
    }
    
    // Membuat string output
    let output = "--- Struk Pembelian Kafe Koding ---\n";
    output += `Menu Dipesan    : ${namaMenu}\n`;
    output += `Jumlah          : ${jumlah}\n`;
    output += `Subtotal        : ${formatRupiah(subtotal)}\n`;
    
    if (persentaseDiskon > 0) {
        output += `Diskon (${persentaseDiskon}%)    : - ${formatRupiah(nilaiDiskon)}\n`;
    } else {
        output += `Diskon          : - ${formatRupiah(0)}\n`;
    }
    
    output += "-----------------------------------\n";
    output += `Total Bayar     : ${formatRupiah(totalBayar)}\n`;
    output += "--- Terima Kasih ---";
    
    return output;
}

// Contoh penggunaan
console.log(hitungTotalPesanan("PIZZA", 2));
console.log("\n" + "=".repeat(50) + "\n");
console.log(hitungTotalPesanan("KOPI", 3));
console.log("\n" + "=".repeat(50) + "\n");
console.log(hitungTotalPesanan("TEH", 1));
console.log("\n" + "=".repeat(50) + "\n");
console.log(hitungTotalPesanan("BURGER", 2)); // Menu tidak tersedia