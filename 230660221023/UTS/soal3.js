/**
 * Soal 3: Object Literal & Methods
 * Mendefinisikan object dengan properti dan method (fungsi di dalam object)
 */

const mahasiswa = {
  nama: "Rudi Hartono",
  nim: "12345",
  jurusan: "Informatika",
  matkul: ["Dasar Pemrograman", "Kalkulus"],

  /**
   * Method untuk menambah mata kuliah baru ke array matkul
   * Menggunakan keyword 'this' untuk merujuk ke properti 'matkul'
   */
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`(Info: Mata kuliah '${namaMatkul}' berhasil ditambahkan.)`);
  },

  /**
   * Method untuk menampilkan seluruh info mahasiswa
   * Menggunakan 'this' dan template literals
   */
  tampilkanInfo() {
    console.log("\n--- Informasi Lengkap Mahasiswa ---");
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    // .join() digunakan agar array tampil lebih rapi
    console.log(`Mata Kuliah: ${this.matkul.join(", ")}`);
    console.log("-----------------------------------");
  },
};

// --- Uji Coba (Demonstrasi) ---
console.log("--- Soal 3: Object Literal & Methods ---");

// 1. Tampilkan nama dan nim
console.log(`Nama Awal: ${mahasiswa.nama}`);
console.log(`NIM: ${mahasiswa.nim}`);

// 2. Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Sistem Basis Data");
mahasiswa.tambahMatkul("Struktur Data");

// 3. Tampilkan seluruh informasi
mahasiswa.tampilkanInfo();