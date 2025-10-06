// kasir.js

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
        namaMenu = "Tidak Dikenal";
    }
  
    // Hitung subtotal
    let subtotal = hargaSatuan * jumlah;
  
    // Hitung diskon
    let diskon = 0;
    let persenDiskon = 0;
    if (subtotal > 100000) {
      persenDiskon = 15;
      diskon = subtotal * 0.15;
    } else if (subtotal > 50000) {
      persenDiskon = 10;
      diskon = subtotal * 0.1;
    }
  
    // Hitung total bayar
    let totalBayar = subtotal - diskon;
  
    // Format angka ke Rupiah
    function formatRupiah(angka) {
      return "Rp " + angka.toLocaleString("id-ID");
    }
  
    // Buat struk
    let struk = `--- Struk Pembelian Kafe Koding ---
  Menu Dipesan    : ${namaMenu}
  Jumlah          : ${jumlah}
  Subtotal        : ${formatRupiah(subtotal)}
  ${
    diskon > 0
      ? `Diskon (${persenDiskon}%)    : - ${formatRupiah(diskon)}\n`
      : ""
  }-----------------------------------
  Total Bayar     : ${formatRupiah(totalBayar)}
  --- Terima Kasih ---`;
  
    return struk;
  }
  
  // Contoh pemanggilan
  console.log(hitungTotalPesanan("PIZZA", 2));
  