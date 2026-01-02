// mahasiswa.js

// 1. Definisi Class Mahasiswa
class Mahasiswa {
  
  // 2. Constructor untuk inisialisasi properti
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.status = "Aktif"; // nilai default
  }

  // 3. Method untuk memperkenalkan diri
  perkenalan() {
    console.log(
      `Halo, nama saya ${this.nama} (NIM: ${this.nim}), dari jurusan ${this.jurusan}.`
    );
  }

  // Method lain
  belajar() {
    console.log(`${this.nama} sedang belajar materi OOP...`);
  }
}

// --- Penggunaan Class ---
console.log("--- Membuat Objek Mahasiswa ---");

const mhs1 = new Mahasiswa("Andi Hermawan", "10119001", "Informatika");
const mhs2 = new Mahasiswa("Budi Setiawan", "10229005", "Sistem Informasi");

console.log(`Nama Mahasiswa 1: ${mhs1.nama}`);
console.log(`Status Mahasiswa 2: ${mhs2.status}`);

console.log("\n--- Memanggil Method ---");
mhs1.perkenalan();
mhs1.belajar();

console.log("");
mhs2.perkenalan();
mhs2.belajar();
