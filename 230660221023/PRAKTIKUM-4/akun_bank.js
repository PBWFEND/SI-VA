// akun_bank.js

// Membuat object akun
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Nisa Rahmawati',
  saldo: 500000,

  // Method untuk setor tunai
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  // Method untuk tarik tunai
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log('Saldo tidak mencukupi untuk penarikan.');
    } else {
      this.saldo -= jumlah;
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
      );
    }
  }
};

// Demonstrasi penggunaan object akun
console.log(`Saldo awal: Rp ${akun.saldo.toLocaleString('id-ID')}`);

// Setor tunai
akun.setor(50000);

// Tarik tunai dengan nominal valid
akun.tarik(100000);

// Tarik tunai dengan nominal melebihi saldo
akun.tarik(1000000);

// Tampilkan saldo akhir
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
