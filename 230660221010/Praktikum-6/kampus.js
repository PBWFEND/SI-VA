// kampus.js

// === Class Parent ===
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// === Class Child (Pewarisan) ===
class Mahasiswa extends Orang {
  // Private field (enkapsulasi)
  #sks = 0;

  constructor(nama, umur, nim, jurusan) {
    super(nama, umur); // memanggil constructor Orang
    this.nim = nim;
    this.jurusan = jurusan;
  }

  ambilSKS(jumlah) {
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }
    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// === Demonstrasi Penggunaan ===
console.log("=== Demo Class Orang ===");
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log("\n=== Demo Class Mahasiswa ===");
const mhs1 = new Mahasiswa("Andi", 20, "20231001", "Informatika");
mhs1.sapa(); // dari parent class
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();

// Uji validasi
mhs1.ambilSKS(-2);
mhs1.ambilSKS("abc");

// Uji enkapsulasi (harus error jika di-uncomment)
// console.log(mhs1.#sks); // ❌ Tidak bisa diakses dari luar
