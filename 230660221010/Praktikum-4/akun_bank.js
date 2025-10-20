// akun_bank.js

// --- Membuat Object Literal untuk Akun Bank ---
const akun = {
  // --- PROPERTIES ---
  nomorAkun: "ACC001",
  namaPemilik: "Dede Dian Permana",
  saldo: 500000, // saldo awal dalam Rupiah

  // --- METHODS ---

  // Method untuk setor tunai
  setor: function(jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString()} berhasil.`);
    console.log(`Saldo baru: Rp ${this.saldo.toLocaleString()}`);
  },

  // Method untuk tarik tunai
  tarik: function(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Error: Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil.`);
      console.log(`Saldo sisa: Rp ${this.saldo.toLocaleString()}`);
    }
  }
};

// --- Interaksi dengan Object Akun Bank ---

console.log("--- Informasi Awal Akun ---");
console.log(`Nomor Akun : ${akun.nomorAkun}`);
console.log(`Nama Pemilik : ${akun.namaPemilik}`);
console.log(`Saldo Awal : Rp ${akun.saldo.toLocaleString()}`);
console.log("--------------------------------\n");

// Menyetor uang
console.log(">> Melakukan Setoran...");
akun.setor(100000);
console.log("\n");

// Melakukan penarikan dengan saldo cukup
console.log(">> Melakukan Penarikan (saldo cukup)...");
akun.tarik(200000);
console.log("\n");

// Melakukan penarikan dengan saldo tidak cukup
console.log(">> Melakukan Penarikan (saldo tidak cukup)...");
akun.tarik(600000);
console.log("\n");

// Menampilkan saldo akhir
console.log("--- Saldo Akhir ---");
console.log(`Saldo Akhir: Rp ${akun.saldo.toLocaleString()}`);
console.log("--------------------");
