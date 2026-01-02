// soal3.js
const mahasiswa = {
  nama: "Elangga Yudistira",
  nim: "230660221109",
  jurusan: "Sistem Informasi",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`Mata kuliah '${namaMatkul}' berhasil ditambahkan.`);
  },

  tampilkanInfo() {
    console.log("=== Soal 3: Data Mahasiswa ===");
    console.log(`Nama     : ${this.nama}`);
    console.log(`NIM      : ${this.nim}`);
    console.log(`Jurusan  : ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul.join(", ")}`);
  },
};

// Demonstrasi
console.log("Nama:", mahasiswa.nama);
console.log("NIM :", mahasiswa.nim);
mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Basis Data");
mahasiswa.tampilkanInfo();
