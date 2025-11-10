// soal3.js
// Object Mahasiswa dengan Method

const mahasiswa = {
  nama: "Rudi",
  nim: "12345",
  jurusan: "Informatika",
  matkul: [],
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },
  tampilkanInfo() {
    console.log("=== Data Mahasiswa ===");
    console.log(`Nama     : ${this.nama}`);
    console.log(`NIM      : ${this.nim}`);
    console.log(`Jurusan  : ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul.join(", ")}`);
  },
};

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Basis Data");
mahasiswa.tampilkanInfo();