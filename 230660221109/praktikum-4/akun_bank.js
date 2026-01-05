// akun_bank.js

// Membuat object literal untuk akun bank
const akun = {
  // --- PROPERTIES ---
  nomorAkun: "ACC001",
  namaPemilik: "Elangga Yudistira",
  saldo: 500000, // Saldo awal

  // --- METHODS ---

  // Method untuk setor uang
  setor: function(jumlah) {
    // Validasi input harus angka positif
    if (jumlah <= 0) {
      console.log("Jumlah setoran tidak valid!");
      return;
    }

    // Tambahkan ke saldo
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil.`);
    console.log(`Saldo baru: Rp ${this.saldo.toLocaleString("id-ID")}`);
  },

  // Method untuk tarik uang
  tarik: function(jumlah) {
    // Validasi input harus angka positif
    if (jumlah <= 0) {
      console.log("Jumlah penarikan tidak valid!");
      return;
    }

    // Cek apakah saldo mencukupi
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil.`);
      console.log(`Saldo sisa: Rp ${this.saldo.toLocaleString("id-ID")}`);
    }
  }
};

// --- DEMONSTRASI PENGGUNAAN OBJECT ---

console.log("=== Informasi Awal Akun ===");
console.log(`Nomor Akun : ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal  : Rp ${akun.saldo.toLocaleString("id-ID")}`);
console.log("===========================\n");

// Melakukan setoran
console.log(">> Melakukan Setoran...");
akun.setor(50000);
console.log("\n");

// Melakukan penarikan dengan nominal valid
console.log(">> Melakukan Penarikan (valid)...");
akun.tarik(100000);
console.log("\n");

// Melakukan penarikan melebihi saldo
console.log(">> Melakukan Penarikan (melebihi saldo)...");
akun.tarik(600000);
console.log("\n");

// Menampilkan saldo akhir
console.log("=== Saldo Akhir Akun ===");
console.log(`Saldo Akhir: Rp ${akun.saldo.toLocaleString("id-ID")}`);
