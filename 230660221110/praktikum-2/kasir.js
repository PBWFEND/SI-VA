function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan;

  // Menentukan harga satuan berdasarkan kode menu
  switch (kodeMenu.toUpperCase()) {
    case "KOPI":
      hargaSatuan = 25000;
      break;
    case "TEH":
      hargaSatuan = 20000;
      break;
    case "PIZZA":
      hargaSatuan = 55000;
      break;
    default:
      hargaSatuan = 0;
      break;
  }

  // Menghitung subtotal
  const subtotal = hargaSatuan * jumlah;

  // Menentukan diskon
  let diskon = 0;
  if (subtotal >= 100000) {
    diskon = subtotal * 0.15;
  }

  const total = subtotal - diskon;

  // Menampilkan hasil
  console.log(`Menu       : ${kodeMenu}`);
  console.log(`Jumlah     : ${jumlah}`);
  console.log(`Harga/item : Rp ${hargaSatuan.toLocaleString("id-ID")}`);
  console.log(`Subtotal   : Rp ${subtotal.toLocaleString("id-ID")}`);
  console.log(`Diskon     : Rp ${diskon.toLocaleString("id-ID")}`);
  console.log(`Total Bayar: Rp ${total.toLocaleString("id-ID")}`);
  console.log("-----------------------------");
}

// Contoh pemanggilan fungsi
hitungTotalPesanan("KOPI", 10);
hitungTotalPesanan("TEH", 7);
hitungTotalPesanan("PIZZA", 5);
