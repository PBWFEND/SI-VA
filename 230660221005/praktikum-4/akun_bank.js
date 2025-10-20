// 📘 Studi Kasus 4: Pengelolaan Akun Bank Sederhana

// Membuat object akun
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Clara',
  saldo: 500000,

  // Method untuk setor uang
  setor: function(jumlah) {
    this.saldo += jumlah;
    console.log(`✅ Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil.`);
    console.log(`💰 Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}\n`);
  },

  // Method untuk tarik uang
  tarik: function(jumlah) {
    if (jumlah > this.saldo) {
      console.log(`❌ Saldo tidak mencukupi untuk penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')}.\n`);
    } else {
      this.saldo -= jumlah;
      console.log(`💸 Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil.`);
      console.log(`💰 Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}\n`);
    }
  }
};

// 💼 Demonstrasi penggunaan object akun
console.log("=== 💳 Informasi Awal Akun ===");
console.log(`Nomor Akun : ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal : Rp ${akun.saldo.toLocaleString('id-ID')}\n`);

// 🔹 Melakukan setoran
akun.setor(50000); // Setor Rp 50.000

// 🔹 Melakukan penarikan valid
akun.tarik(100000); // Tarik Rp 100.000

// 🔹 Melakukan penarikan melebihi saldo
akun.tarik(1000000); // Tarik Rp 1.000.000

// 🔹 Menampilkan saldo akhir
console.log(`🏦 Saldo akhir akun ${akun.namaPemilik}: Rp ${akun.saldo.toLocaleString('id-ID')}`);
