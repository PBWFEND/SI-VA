// Parent Class
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// Child Class
class Mahasiswa extends Orang {
  #sks = 0; // Private field untuk enkapsulasi

  constructor(nama, umur) {
    super(nama, umur); // Panggil constructor parent
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

// Demonstrasi penggunaan
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log(); // spasi output

const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa();
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();
mhs1.ambilSKS(-2);   // Invalid
mhs1.ambilSKS("5");  // Invalid