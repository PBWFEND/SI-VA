// ============================
// Parent Class: Orang
// ============================
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// ============================
// Child Class: Mahasiswa (extends Orang)
// ============================
class Mahasiswa extends Orang {
  // Private field untuk SKS
  #sks = 0;

  constructor(nama, umur) {
    super(nama, umur); // panggil constructor parent
  }

  ambilSKS(jumlah) {
    // Validasi input
    if (typeof jumlah !== "number" || jumlah < 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    // Tambahkan SKS
    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// ============================
// Demonstrasi Penggunaan
// ============================

// Instance dari Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();
console.log(); // baris kosong agar output rapi

// Instance dari Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa();
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();
mhs1.ambilSKS(-2);
mhs1.ambilSKS("enam");

// (Opsional) Membuktikan enkapsulasi — ini akan error jika di-uncomment
// console.log(mhs1.#sks); // ❌ SyntaxError: Private field '#sks' must be declared in an enclosing class
