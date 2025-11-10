/**
 * Soal 3 – Object Literal & Methods
 * Menggunakan object literal, methods, dan keyword 'this'.
 */

const mahasiswa = {
  nama: "Muhammad Aulia Ramadhani",
  nim: "230660221013",
  jurusan: "Sistem Informasi",
  matkul: ["Struktur Data", "Basis Data"],

  // Method 1: Menambah mata kuliah
  tambahMatkul: function (namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`Info: Mata kuliah '${namaMatkul}' berhasil ditambahkan.`);
  },

  // Method 2: Menampilkan seluruh info
  // (Menggunakan function biasa agar 'this' merujuk ke object 'mahasiswa')
  tampilkanInfo: function () {
    console.log("\n--- Informasi Lengkap Mahasiswa ---");
    console.log(`Nama    : ${this.nama}`);
    console.log(`NIM     : ${this.nim}`);
    console.log(`Jurusan : ${this.jurusan}`);
    // Menampilkan array dengan rapi
    console.log(`Matkul  : ${this.matkul.join(', ')}`);
    console.log("-------------------------------------");
  },
};

// --- Langkah Demonstrasi ---

// 1. Tampilkan nama dan nim
console.log(`Nama Awal: ${mahasiswa.nama}`);
console.log(`NIM Awal : ${mahasiswa.nim}`);

// 2. Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Jaringan Komputer");
mahasiswa.tambahMatkul("Sistem Operasi");

// 3. Tampilkan seluruh informasi
mahasiswa.tampilkanInfo();