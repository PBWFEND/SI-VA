// akun_bank.js
// Studi Kasus 4: Pengelolaan Akun Bank Sederhana

// Membuat objek akun
let akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Billy',
  saldo: 500000,

  // Metode untuk setor uang
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`);
  },

  // Metode untuk tarik uang
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi untuk penarikan.");
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`);
    }
  }
};

// Menampilkan saldo awal
console.log(`Saldo awal: Rp ${akun.saldo.toLocaleString('id-ID')}`);

// Melakukan setoran
akun.setor(50000);

// Melakukan penarikan dengan nominal valid
akun.tarik(100000);

// Melakukan penarikan dengan nominal melebihi saldo
akun.tarik(1000000);

// Menampilkan saldo akhir
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
