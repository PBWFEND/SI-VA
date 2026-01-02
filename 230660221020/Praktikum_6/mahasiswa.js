
class Mahasiswa {

  // 2. Constructor: dijalankan saat object dibuat
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.status = "Aktif"; // nilai default
  }

  // 3. Method perkenalan
  perkenalan() {
    console.log(
      `Halo, nama saya ${this.nama} (NIM: ${this.nim}), ` +
      `dari jurusan ${this.jurusan}.`
    );
  }

  // Method tambahan
  belajar() {
    console.log(`${this.nama} sedang belajar materi OOP...`);
  }
}

// ===============================
// Menggunakan Class
// ===============================

console.log("--- Membuat Objek Mahasiswa ---");

// 4. Membuat instance (object)
const mhs1 = new Mahasiswa(
  "Astia Sundari Putri",
  "230660221020",
  "Sistem Informasi"
);

const mhs2 = new Mahasiswa(
  "Budi Setiawan",
  "10229005",
  "Sistem Informasi"
);

// 5. Mengakses properti
console.log(`Nama Mahasiswa 1: ${mhs1.nama}`);
console.log(`Status Mahasiswa 2: ${mhs2.status}`);

console.log("\n--- Memanggil Method ---");

// 6. Memanggil method
mhs1.perkenalan();
mhs1.belajar();

console.log("");

mhs2.perkenalan();
mhs2.belajar();
