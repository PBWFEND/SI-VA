// 1. Buat sebuah object bernama akun
const akun = {
  // Properti object
  nomorAkun: 'ACC001',
  namaPemilik: 'Nama Anda',
  saldo: 500000,

  /**
   * Method untuk menambahkan dana ke saldo.
   * @param {number} jumlah - Nominal yang akan disetorkan.
   */
  setor(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah setoran harus lebih besar dari 0.");
      return; // Hentikan eksekusi jika jumlah tidak valid
    }
    
    // Tambahkan jumlah ke saldo
    this.saldo += jumlah;
    
    // Cetak pesan konfirmasi
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  /**
   * Method untuk menarik dana dari saldo.
   * @param {number} jumlah - Nominal yang akan ditarik.
   */
  tarik(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah penarikan harus lebih besar dari 0.");
      return; // Hentikan eksekusi jika jumlah tidak valid
    }

    // Validasi saldo
    if (jumlah > this.saldo) {
      // 2a. Saldo tidak mencukupi
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      // 2b. Saldo mencukupi
      this.saldo -= jumlah; // Kurangi saldo
      
      // Cetak pesan konfirmasi
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
      );
    }
  }
};

// 3. Demonstrasi penggunaan object

console.log(`--- Selamat Datang, ${akun.namaPemilik} (No. Akun: ${akun.nomorAkun}) ---`);

// Tampilkan saldo awal
console.log(`Saldo awal Anda: Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("==============================================");

// Panggil method setor()
console.log("Melakukan setoran...");
akun.setor(150000);
console.log("----------------------------------------------");

// Panggil method tarik() dengan nominal yang valid
console.log("Melakukan penarikan (valid)...");
// Saldo sekarang: 500.000 + 150.000 = 650.000
akun.tarik(300000);
console.log("----------------------------------------------");

// Panggil method tarik() dengan nominal yang melebihi saldo
console.log("Melakukan penarikan (melebihi saldo)...");
// Saldo sekarang: 650.000 - 300.000 = 350.000
akun.tarik(500000); // Ini akan gagal
console.log("----------------------------------------------");

// Tampilkan saldo akhir
console.log(`Saldo akhir Anda: Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("==============================================");