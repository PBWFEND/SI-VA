// kampus.js

// Parent class: Orang
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

class Mahasiswa extends Orang {
  #sks = 0;

  constructor(nama, umur) {
    super(nama, umur); 
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


// Instance dari Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log("");

// Instance dari Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa();

// Panggil method ambilSKS dengan beberapa nilai
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();

// Uji input tidak valid
mhs1.ambilSKS(-2);
mhs1.ambilSKS("tiga");

// (Opsional) coba akses langsung field privat (akan error)
// console.log(mhs1.#sks); // ❌ SyntaxError: Private field '#sks' must be declared in an enclosing class
