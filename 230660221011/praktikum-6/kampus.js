// kampus.js

// 1. Parent Class: Orang
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(
      `Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`
    );
  }
}

// 2. Child Class: Mahasiswa (mewarisi Orang)
class Mahasiswa extends Orang {
  
  // 4. Private field untuk Enkapsulasi data SKS
  #sks = 0;

  // 3. Constructor Mahasiswa
  constructor(nama, umur) {
    // Memanggil constructor parent (Orang) menggunakan 'super()'
    super(nama, umur); 
  }

  // 5. Method: ambilSKS (dengan validasi)
  ambilSKS(jumlah) {
    // Validasi: jumlah harus angka dan positif
    if (typeof jumlah === 'number' && jumlah > 0) {
      this.#sks += jumlah; // Menambah private field #sks
      console.log(
        `${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`
      );
    } else {
      console.log("Jumlah SKS harus angka positif!");
    }
  }

  // 6. Method: lihatSKS
  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// --- 7. Demonstrasi Penggunaan ---
// (Pastikan bagian ini juga sama persis)

console.log("--- Membuat Objek Orang ---");
// Instance dari class Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa(); // Memanggil method milik Orang

console.log("\n--- Membuat Objek Mahasiswa ---"); // <- INI HILANG DARI OUTPUT ANDA
// Instance dari class Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);

// Memanggil method 'sapa()' yang DIWARISI dari Orang
mhs1.sapa(); // <- INI JUGA HILANG DARI OUTPUT ANDA

// Mengambil SKS (valid)
mhs1.ambilSKS(3); // <- INI YANG MENJADI "KS: 3" DI KODE ANDA
mhs1.ambilSKS(4);

// Melihat SKS
mhs1.lihatSKS();

// Test validasi (input tidak valid)
mhs1.ambilSKS(-2); // Gagal
mhs1.ambilSKS("lima"); // Gagal