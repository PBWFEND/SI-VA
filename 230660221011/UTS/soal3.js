/**
 * Soal 3: Object Literal & Methods
 */

const mahasiswa = {
  nama: "Dina Salwa Mannatu",
  nim: "230660221011",
  jurusan: "Sistem Informasi",
  matkul: [], // Awalnya array kosong

  tambahMatkul: function (namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`> Mata kuliah "${namaMatkul}" berhasil ditambahkan.`);
  },

  tampilkanInfo: function () {
    console.log("\n--- Info Lengkap Mahasiswa ---");
    console.log(`Nama    : ${this.nama}`);
    console.log(`NIM     : ${this.nim}`);
    console.log(`Jurusan : ${this.jurusan}`);
    console.log(`Matkul  : ${this.matkul.join(", ")}`);
    console.log("-------------------------------");
  },
};

// --- Langkah Demonstrasi ---
console.log("--- Data Awal ---");
console.log(`Nama Mahasiswa: ${mahasiswa.nama}`);
console.log(`NIM Mahasiswa : ${mahasiswa.nim}`);
console.log("\n--- Menambah Mata Kuliah ---");

mahasiswa.tambahMatkul("Dasar Pemrograman");
mahasiswa.tambahMatkul("Basis Data");

mahasiswa.tampilkanInfo();