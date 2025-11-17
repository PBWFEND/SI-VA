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
  
  // Child class: Mahasiswa (mewarisi Orang)
  class Mahasiswa extends Orang {
    #sks = 0; // private field
  
    constructor(nama, umur) {
      super(nama, umur); // panggil constructor parent
    }
  
    ambilSKS(jumlah) {
      if (typeof jumlah !== "number" || jumlah < 0) {
        console.log("Jumlah SKS harus berupa angka positif!");
        return;
      }
      this.#sks += jumlah;
      console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total: ${this.#sks}`);
    }
  
    lihatSKS() {
      console.log(`Total SKS ${this.nama}: ${this.#sks}`);
    }
  }
  
  // === Demonstrasi penggunaan ===
  
  // Instance dari Orang
  const orang1 = new Orang("Budi", 21);
  orang1.sapa();
  
  // Instance dari Mahasiswa
  const mhs1 = new Mahasiswa("Fajar", 21);
  mhs1.sapa(); // mewarisi method sapa() dari Orang
  
  mhs1.ambilSKS(3);
  mhs1.ambilSKS(4);
  mhs1.ambilSKS(-2); // tidak valid
  mhs1.ambilSKS("enam"); // tidak valid
  mhs1.lihatSKS();
  
  // Bukti enkapsulasi (akan error jika di-uncomment)
  // console.log(mhs1.#sks); // ❌ Error: Private field '#sks' must be declared in an enclosing class
  