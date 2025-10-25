// Membuat object akun
const akun = {
  nomorAkun: "ACC001",
  namaPemilik: "Ade Yusup Maulana",
  saldo: 500000,

  // Method untuk setor uang
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString()} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString()}.`
    );
  },

  // Method untuk tarik uang
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString()}.`
      );
    }
  },
};

// --- Demonstrasi penggunaan object akun ---

console.log(`Saldo awal: Rp ${akun.saldo.toLocaleString()}`);

// Melakukan setor
akun.setor(50000);

// Melakukan penarikan dengan nominal valid
akun.tarik(100000);

// Melakukan penarikan dengan nominal melebihi saldo
akun.tarik(1000000);

// Menampilkan saldo akhir
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString()}`);