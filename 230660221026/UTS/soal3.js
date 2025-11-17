// Soal 3 – Object Literal & Methods

const mahasiswa = {
  nama: "Wendi Feriyanda",
  nim: "230660221026",
  jurusan: "Sistem Informasi",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log(`Nama     : ${this.nama}`);
    console.log(`NIM      : ${this.nim}`);
    console.log(`Jurusan  : ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul.join(", ")}`);
  }
};

// Demonstrasi
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);
mahasiswa.tambahMatkul("Pemrograman Web BackEnd");
mahasiswa.tambahMatkul("Analisis Sistem Informasi");
mahasiswa.tampilkanInfo();