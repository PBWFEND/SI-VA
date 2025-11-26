// --- Helper untuk Warna & Format ---
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
};

/**
 * Fungsi untuk memformat angka menjadi format mata uang Rupiah.
 * @param {number} number 
 * @returns {string} 
 */
const formatUang = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
};

// --- Blueprint untuk Akun Bank (Menggunakan Class) ---
class AkunBank {
  constructor(nomorAkun, namaPemilik, saldoAwal) {
    this.nomorAkun = nomorAkun;
    this.namaPemilik = namaPemilik;
    this.saldo = saldoAwal;
    this.riwayatTransaksi = []; 
  }

  // Method untuk mencatat transaksi
  _catatTransaksi(tipe, jumlah) {
    const transaksi = {
      tipe: tipe,
      jumlah: jumlah,
      tanggal: new Date().toLocaleString('id-ID'),
      saldoAkhir: this.saldo
    };
    this.riwayatTransaksi.push(transaksi);
  }

 
  setor(jumlah) {
    if (jumlah <= 0) {
      console.log(`${colors.red} Jumlah setoran harus lebih dari nol.${colors.reset}`);
      return;
    }
    this.saldo += jumlah;
    this._catatTransaksi('SETOR', jumlah);
    console.log(`${colors.green} Setoran sebesar ${formatUang(jumlah)} berhasil. Saldo baru: ${formatUang(this.saldo)}${colors.reset}`);
  }

  
  tarik(jumlah) {
    if (jumlah > this.saldo) {
      console.log(`${colors.red}GAGAL! Saldo tidak mencukupi untuk penarikan ${formatUang(jumlah)}.${colors.reset}`);
    } else {
      this.saldo -= jumlah;
      this._catatTransaksi('TARIK', jumlah);
      console.log(`${colors.green}Penarikan sebesar ${formatUang(jumlah)} berhasil. Saldo sisa: ${formatUang(this.saldo)}${colors.reset}`);
    }
  }

  // Fitur tambahan: Cek Saldo
  cekSaldo() {
    console.log(`${colors.blue}Saldo Anda saat ini adalah: ${formatUang(this.saldo)}${colors.reset}`);
  }

  // Fitur tambahan: Cetak Riwayat Transaksi
  cetakRiwayat() {
    console.log(`\n${colors.yellow}--- RIWAYAT TRANSAKSI: ${this.nomorAkun} ---${colors.reset}`);
    if (this.riwayatTransaksi.length === 0) {
        console.log("Belum ada transaksi.");
    } else {
        this.riwayatTransaksi.forEach(trx => {
            const warna = trx.tipe === 'SETOR' ? colors.green : colors.red;
            console.log(`[${trx.tanggal}] ${warna}${trx.tipe.padEnd(5)}${colors.reset} | Jumlah: ${formatUang(trx.jumlah).padEnd(15)} | Saldo Akhir: ${formatUang(trx.saldoAkhir)}`);
        });
    }
    console.log(`${colors.yellow}---------------------------------------------${colors.reset}`);
  }
}


// =======================================================
// --- DEMONSTRASI PENGGUNAAN (SESUAI TUGAS) ---
// =======================================================

console.log("SELAMAT DATANG DI BANK DIGITAL TIRA\n");

// Membuat object akun dari class AkunBank
const akunSaya = new AkunBank('ACC007', 'Tira Azzahra', 500000);

// 1. Menampilkan saldo awal
console.log(`Halo ${akunSaya.namaPemilik}, selamat datang kembali!`);
akunSaya.cekSaldo();
console.log("---------------------------------------------");

// 2. Panggil method setor()
console.log("\nMelakukan setoran...");
akunSaya.setor(250000);
console.log("---------------------------------------------");

// 3. Panggil method tarik() dengan nominal yang valid
console.log("\nMelakukan penarikan pertama...");
akunSaya.tarik(100000);
console.log("---------------------------------------------");

// 4. Panggil method tarik() dengan nominal yang melebihi saldo
console.log("\nMencoba penarikan kedua (melebihi saldo)...");
akunSaya.tarik(1000000);
console.log("---------------------------------------------");

// 5. Menampilkan saldo akhir
console.log("\nMenampilkan saldo akhir Anda...");
akunSaya.cekSaldo();
console.log("---------------------------------------------");


// Menampilkan fitur baru: Riwayat Transaksi
akunSaya.cetakRiwayat();