// akun_bank.js
// ===================================================
// Studi Kasus 4: Pengelolaan Akun Bank Sederhana
// ===================================================

// --- OBJECT AKUN NASABAH ---
const akun = {
  nomorAkun: "ACC001",
  namaPemilik: "Brilian Pratama",
  saldo: 500000, // saldo awal

  // Method untuk setor tunai
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString("id-ID")}.`
    );
  },

  // Method untuk tarik tunai
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString("id-ID")} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString("id-ID")}.`
      );
    }
  },
};

// ===================================================
// DEMONSTRASI PENGGUNAAN OBJECT
// ===================================================

console.log("===============================================");
console.log("     SISTEM PENGELOLAAN AKUN BANK SEDERHANA");
console.log("===============================================");

console.log(`Nomor Akun   : ${akun.nomorAkun}`);
console.log(`Nama Pemilik : ${akun.namaPemilik}`);
console.log(`Saldo Awal   : Rp ${akun.saldo.toLocaleString("id-ID")}`);
console.log("-----------------------------------------------");

// Setor uang
akun.setor(50000); // menambah saldo

// Tarik uang dengan nominal valid
akun.tarik(100000); // saldo cukup

// Tarik uang dengan nominal melebihi saldo
akun.tarik(1000000); // saldo tidak cukup

console.log("-----------------------------------------------");
console.log(`Saldo Akhir  : Rp ${akun.saldo.toLocaleString("id-ID")}`);
console.log("===============================================");
