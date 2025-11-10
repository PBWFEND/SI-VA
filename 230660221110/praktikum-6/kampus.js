// File: kampus.js

/**
 * Class Orang (Parent Class)
 * Memiliki properti dasar dan method sapa()
 */
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

/**
 * Class Mahasiswa (Child Class)
 * Mewarisi dari Orang dan menambahkan properti SKS yang terenkapsulasi.
 */
class Mahasiswa extends Orang {
  // Private field untuk total SKS (Encapsulation)
  #sks = 0;

  constructor(nama, umur, nim) {
    // Memanggil constructor parent (Orang)
    super(nama, umur);
    this.nim = nim;
  }

  /**
   * Method untuk menambah SKS.
   * Menerapkan validasi untuk enkapsulasi yang aman.
   */
  ambilSKS(jumlah) {
    // Validasi
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    this.#sks += jumlah;
    console.log(
      `${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`
    );
  }

  /**
   * Method untuk melihat total SKS saat ini.
   */
  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// --- Demonstrasi Penggunaan ---
console.log("--- Demonstrasi Class Orang ---");
const orangBudi = new Orang("Komarudin", 25);
orangBudi.sapa();
console.log("\n--- Demonstrasi Class Mahasiswa ---");

const mhsAndi = new Mahasiswa("Ilham", 20, "12345");

// Panggil method dari Parent Class (Orang)
mhsAndi.sapa();

// Panggil method Mahasiswa dan test validasi
mhsAndi.ambilSKS(3);
mhsAndi.ambilSKS(4);
mhsAndi.ambilSKS(0); // Test invalid: nol
mhsAndi.ambilSKS(-2); // Test invalid: negatif
mhsAndi.ambilSKS("lima"); // Test invalid: bukan angka

// Panggil method untuk melihat hasil akhir SKS
mhsAndi.lihatSKS();

// (Opsional) Coba akses langsung private field (akan menyebabkan error)
try {
  console.log(mhsAndi.#sks);
} catch (error) {
  console.log(
    "\n[Error Enkapsulasi Diharapkan]: Tidak bisa mengakses #sks secara langsung dari luar kelas."
  );
}

/*
Untuk menjalankan kode ini, simpan sebagai kampus.js dan jalankan di terminal:
node kampus.js
*/
