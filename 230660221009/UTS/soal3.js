// soal3.js
// Soal 3 – Object Literal & Methods

// Membuat object mahasiswa
const mahasiswa = {
  nama: "Ade Yusup Maulana",
  nim: "230660221009",
  jurusan: "Sistem Informasi",
  matkul: [],

  // Method untuk menambah mata kuliah
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  // Method untuk menampilkan seluruh informasi mahasiswa
  tampilkanInfo() {
    console.log("=== Data Mahasiswa ===");
    console.log(`Nama     : ${this.nama}`);
    console.log(`NIM      : ${this.nim}`);
    console.log(`Jurusan  : ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((mk, index) => {
      console.log(`  ${index + 1}. ${mk}`);
    });
  },
};

// Langkah demonstrasi
console.log("Nama:", mahasiswa.nama);
console.log("NIM :", mahasiswa.nim);

// Menambah dua mata kuliah baru
mahasiswa.tambahMatkul("Pemrograman Berbasis Web Backend");
mahasiswa.tambahMatkul("Basis Data");

// Menampilkan seluruh informasi
mahasiswa.tampilkanInfo();