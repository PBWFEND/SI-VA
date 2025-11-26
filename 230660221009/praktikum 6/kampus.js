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
  // Private field untuk enkapsulasi
  #sks = 0;

  constructor(nama, umur) {
    super(nama, umur); // panggil constructor parent (Orang)
  }

  ambilSKS(jumlah) {
    // Validasi input
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

// ============================
// Demonstrasi Penggunaan
// ============================

// 1. Instance dari Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();
console.log(""); // baris kosong

// 2. Instance dari Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa(); // mewarisi method dari Orang

// Ambil SKS (valid)
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);

// Lihat total SKS
mhs1.lihatSKS();

// Ambil SKS (tidak valid)
mhs1.ambilSKS(-2);
mhs1.ambilSKS("lima");

// ============================
// Simulasi percobaan akses langsung field privat
// ============================
console.log("\nPercobaan akses langsung ke field privat:");
try {
  // Gunakan eval agar error muncul saat runtime (bisa ditangkap try-catch)
  eval("console.log(mhs1.#sks)");
} catch (error) {
  console.log("❌ Tidak bisa mengakses #sks dari luar class!");
  console.log("Pesan error:", error.message);
}
