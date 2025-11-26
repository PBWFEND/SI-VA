// soal3.js
const mahasiswa = {
  nama: "Clara Desmiati",
  nim: "230660221005",
  jurusan: "Sistem Informasi",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log(`=== Data Mahasiswa ===`);
    console.log(`Nama    : ${this.nama}`);
    console.log(`NIM     : ${this.nim}`);
    console.log(`Jurusan : ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul.join(", ")}`);
  },
};

// Demonstrasi
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

mahasiswa.tambahMatkul("Pemrograman Berbasis Web Back End");
mahasiswa.tambahMatkul("Perencanaan Strategi Sistem Informasi");

mahasiswa.tampilkanInfo();
