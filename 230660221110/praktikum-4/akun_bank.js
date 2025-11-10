/**
 * Script Node.js untuk membuat dan mendemonstrasikan
 * penggunaan object akun bank.
 */

// 1. Buat sebuah object bernama akun
const akun = {
  // Properti
  nomorAkun: "ACC001",
  namaPemilik: "BRILIAN PRATAMA",
  saldo: 500000,

  // 2. Tambahkan dua method ke object akun

  /**
   * Method untuk menambah saldo.
   * @param {number} jumlah - Jumlah uang yang disetor.
   */
  setor: function (jumlah) {
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("ERROR: Jumlah setoran tidak valid.");
      return;
    }

    this.saldo += jumlah; // Tambahkan jumlah ke saldo

    // Format saldo baru untuk tampilan
    const saldoBaruFormatted = this.saldo.toLocaleString("id-ID");

    // Cetak pesan konfirmasi
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil.`
    );
    console.log(`Saldo baru: Rp ${saldoBaruFormatted}.`);
  },

  /**
   * Method untuk mengurangi saldo dengan validasi.
   * @param {number} jumlah - Jumlah uang yang ditarik.
   */
  tarik: function (jumlah) {
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("ERROR: Jumlah penarikan tidak valid.");
      return;
    }

    // Validasi: Jika jumlah yang ditarik lebih besar dari saldo
    if (jumlah > this.saldo) {
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString("id-ID")}:`);
      console.log("ERROR: Saldo tidak mencukupi untuk penarikan.");
      return; // Jangan ubah saldo
    }

    // Jika saldo mencukupi
    this.saldo -= jumlah; // Kurangi properti saldo

    // Format sisa saldo untuk tampilan
    const saldoSisaFormatted = this.saldo.toLocaleString("id-ID");

    // Cetak pesan konfirmasi
    console.log(
      `Penarikan sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil.`
    );
    console.log(`Saldo sisa: Rp ${saldoSisaFormatted}.`);
  },
};

// 3. Demonstrasi penggunaan object tersebut
console.log("=================================================");
console.log("           DEMONSTRASI AKUN BANK");
console.log("=================================================");
console.log(`Nomor Akun: ${akun.nomorAkun}`);
console.log(`Pemilik: ${akun.namaPemilik}`);

// Tampilkan saldo awal
console.log("\n--- Saldo Awal ---");
console.log(`Saldo saat ini: Rp ${akun.saldo.toLocaleString("id-ID")}.`);

// Panggil method setor() dengan nominal tertentu (misal 100.000)
console.log("\n--- Aktivitas Setor ---");
akun.setor(100000);

// Panggil method tarik() dengan nominal yang valid (misal 250.000)
console.log("\n--- Aktivitas Tarik (Valid) ---");
akun.tarik(250000);

// Panggil method tarik() dengan nominal yang melebihi saldo (misal 500.000)
console.log("\n--- Aktivitas Tarik (Gagal: Melebihi Saldo) ---");
akun.tarik(500000);

// Tampilkan saldo akhir
console.log("\n--- Saldo Akhir ---");
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString("id-ID")}.`);
console.log("=================================================");
