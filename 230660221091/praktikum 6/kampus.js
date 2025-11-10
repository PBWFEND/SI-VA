// kampus.js

// ========================
// Class Orang
// ========================
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// ========================
// Class Mahasiswa (extends Orang)
// ========================
class Mahasiswa extends Orang {
  #sks = 0; // private field

  constructor(nama, umur) {
    super(nama, umur); // panggil constructor parent (Orang)
  }

  ambilSKS(jumlah) {
    // Validasi input
    if (typeof jumlah !== 'number' || jumlah <= 0) {
      console.log('Jumlah SKS harus angka positif!');
      return;
    }

    // Tambahkan ke total SKS
    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// ========================
// Demonstrasi Penggunaan
// ========================

// Instance dari Orang
const orang1 = new Orang('Budi', 25);
orang1.sapa();

console.log('');

// Instance dari Mahasiswa
const mhs1 = new Mahasiswa('Andi', 20);
mhs1.sapa();              // dari class Orang (inherited)
mhs1.ambilSKS(3);         // valid
mhs1.ambilSKS(4);         // valid
mhs1.lihatSKS();          // lihat total SKS
mhs1.ambilSKS(-2);        // tidak valid
mhs1.ambilSKS('banyak');  // tidak valid

console.log('');

// (Opsional) bukti bahwa #sks tidak bisa diakses langsung
try {
  console.log(mhs1.#sks); // akan error
} catch (err) {
  console.log('Error saat mengakses #sks secara langsung (enkapsulasi bekerja).');
}