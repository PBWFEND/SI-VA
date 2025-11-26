// akun_bank.js

// 1. Membuat Object Literal untuk akun bank
const akun = {
  // --- PROPERTIES ---
  nomorAkun: 'ACC001',
  namaPemilik: 'Muhammad Aulia Ramadhani', // Sesuai permintaan
  saldo: 500000,          // Saldo awal

  // --- METHODS ---

  /**
   * Method untuk menambah saldo (setor tunai).
   * @param {number} jumlah - Jumlah uang yang akan disetor.
   */
  setor: function(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah setoran harus lebih besar dari 0.");
      return;
    }
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  /**
   * Method untuk mengurangi saldo (tarik tunai).
   * @param {number} jumlah - Jumlah uang yang akan ditarik.
   */
  tarik(jumlah) { // Menggunakan sintaks modern
    if (jumlah <= 0) {
      console.log("Error: Jumlah penarikan harus lebih besar dari 0.");
      return;
    }

    // 2. Validasi penarikan
    if (jumlah > this.saldo) {
      console.log(
        `Error: Saldo tidak mencukupi untuk penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')}.`
      );
    } else {
      this.saldo -= jumlah;
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
      );
    }
  }
};

// 3. --- Demonstrasi Penggunaan Object Akun ---

console.log("--- Selamat Datang di Bank Sederhana ---");
console.log(`Pemilik Akun: ${akun.namaPemilik}`);
console.log(`Nomor Akun: ${akun.nomorAkun}`);
console.log("----------------------------------------\n");

// Menampilkan saldo awal
console.log(`Saldo awal: Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("\n");

// Panggil method setor()
console.log(">> Melakukan setoran Rp 250.000...");
akun.setor(250000); // Saldo menjadi 750.000
console.log("\n");

// Panggil method tarik() (valid)
console.log(">> Melakukan penarikan Rp 100.000...");
akun.tarik(100000); // Saldo menjadi 650.000
console.log("\n");

// Panggil method tarik() (invalid / melebihi saldo)
console.log(">> Mencoba penarikan Rp 700.000...");
akun.tarik(700000); // Seharusnya menampilkan error
console.log("\n");

// Menampilkan saldo akhir
console.log("--- Informasi Saldo Akhir ---");
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`); // Saldo tetap 650.000
console.log("-------------------------------");