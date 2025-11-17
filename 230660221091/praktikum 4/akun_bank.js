// akun_bank.js

// Membuat object akun
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Abdul Azis Arrizqi',
  saldo: 500000,

  // Method untuk setor uang
  setor(jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  // Method untuk tarik uang
  tarik(jumlah) {
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

// ===============================
// Demonstrasi penggunaan object
// ===============================

console.log('=== Informasi Akun ===');
console.log(`Nomor Akun : ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal  : Rp ${akun.saldo.toLocaleString('id-ID')}`);

console.log('\n=== Transaksi ===');
akun.setor(50000);        // Setor Rp 50.000
akun.tarik(100000);       // Tarik Rp 100.000 (valid)
akun.tarik(600000);       // Tarik melebihi saldo (error)

console.log('\n=== Saldo Akhir ===');
console.log(`Rp ${akun.saldo.toLocaleString('id-ID')}`);
