// ===================================================
// PROGRAM PENGELOLAAN AKUN BANK SEDERHANA
// ===================================================

// --- Membuat object akun ---
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Brilian Pratama',
  saldo: 500000,

  // --- Method setor ---
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`);
  },

  // --- Method tarik ---
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`);
    }
  },
};

// ===================================================
// DEMONSTRASI PENGGUNAAN OBJECT AKUN
// ===================================================

console.log("==================================================");
console.log("DATA AKUN NASABAH");
console.log("==================================================");
console.log(`Nomor Akun  : ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal  : Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("==================================================\n");

// Setor uang
akun.setor(50000); // contoh setoran Rp 50.000

// Tarik uang (valid)
akun.tarik(100000); // contoh penarikan valid Rp 100.000

// Tarik uang (melebihi saldo)
akun.tarik(1000000); // contoh penarikan gagal

// Tampilkan saldo akhir
console.log("\n==================================================");
console.log(`Saldo Akhir : Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log("==================================================");
