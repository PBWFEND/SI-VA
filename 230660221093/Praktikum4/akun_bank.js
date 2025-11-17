// akun_bank.js

// Membuat object akun
const akun = {
    nomorAkun: 'ACC001',
    namaPemilik: 'Fajar Ajay',
    saldo: 500000,
  
    // Method untuk setor uang
    setor: function(jumlah) {
      this.saldo += jumlah;
      console.log("\n----------------------------------------");
      console.log("💰 TRANSAKSI SETOR TUNAI");
      console.log(`Tanggal: ${new Date().toLocaleString()}`);
      console.log(`Nomor Akun : ${this.nomorAkun}`);
      console.log(`Nama Pemilik: ${this.namaPemilik}`);
      console.log(`Jumlah Setor : Rp ${jumlah.toLocaleString()}`);
      console.log(`Saldo Baru   : Rp ${this.saldo.toLocaleString()}`);
      console.log("----------------------------------------\n");
    },
  
    // Method untuk tarik uang
    tarik: function(jumlah) {
      console.log("\n----------------------------------------");
      console.log("🏧 TRANSAKSI PENARIKAN");
      console.log(`Tanggal: ${new Date().toLocaleString()}`);
      console.log(`Nomor Akun : ${this.nomorAkun}`);
      console.log(`Nama Pemilik: ${this.namaPemilik}`);
  
      if (jumlah > this.saldo) {
        console.log(`Jumlah Tarik : Rp ${jumlah.toLocaleString()}`);
        console.log("❌ Gagal: Saldo tidak mencukupi untuk penarikan.");
      } else {
        this.saldo -= jumlah;
        console.log(`Jumlah Tarik : Rp ${jumlah.toLocaleString()}`);
        console.log(`✅ Berhasil: Penarikan berhasil.`);
        console.log(`Saldo Sisa   : Rp ${this.saldo.toLocaleString()}`);
      }
  
      console.log("----------------------------------------\n");
    }
  };
  
  // Demonstrasi penggunaan
  console.log("========================================");
  console.log("🏦 BANK MINI DIGITAL");
  console.log("========================================");
  console.log(`Nomor Akun : ${akun.nomorAkun}`);
  console.log(`Nama Pemilik: ${akun.namaPemilik}`);
  console.log(`Saldo Awal  : Rp ${akun.saldo.toLocaleString()}`);
  console.log("========================================");
  
  // Transaksi
  akun.setor(50000);
  akun.tarik(100000);
  akun.tarik(1000000);
  
  // Menampilkan saldo akhir
  console.log("========================================");
  console.log("🏁 SALDO AKHIR");
  console.log(`Saldo Akhir: Rp ${akun.saldo.toLocaleString()}`);
  console.log("========================================");
  