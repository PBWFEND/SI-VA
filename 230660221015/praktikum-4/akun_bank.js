// akun_bank.js

// Membuat object akun
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Febry Nursyahbriyana',
  saldo: 500000,

  // Method untuk setor uang
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  // Method untuk tarik uang
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log('Saldo tidak mencukupi untuk penarikan.');
    } else {
      this.saldo -= jumlah;
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
      );
    }
  },
};

// --- Demonstrasi penggunaan object akun ---
console.log('=== Informasi Akun ===');
console.log(`Nomor Akun : ${akun.nomorAkun}`);
console.log(`Nama Pemilik : ${akun.namaPemilik}`);
console.log(`Saldo Awal   : Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log('========================\n');

// Menyetor uang
akun.setor(50000);

// Menarik uang dengan nominal valid
akun.tarik(100000);

// Menarik uang dengan nominal melebihi saldo
akun.tarik(1000000);

// Menampilkan saldo akhir
console.log(`\nSaldo Akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
