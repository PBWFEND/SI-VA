// soal3.js

const mahasiswa = {
  nama: "Rudi Hartono",
  nim: "12345678",
  jurusan: "Informatika",
  matkul: [],

  // Method untuk menambah mata kuliah
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`Mata kuliah '${namaMatkul}' berhasil ditambahkan.`);
  },

  // Method untuk menampilkan seluruh data
  tampilkanInfo() {
    console.log(`
=== Data Mahasiswa ===
Nama    : ${this.nama}
NIM     : ${this.nim}
Jurusan : ${this.jurusan}
Mata Kuliah: ${this.matkul.join(", ")}
    `);
  },
};

// Demonstrasi
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM: ${mahasiswa.nim}`);

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Keamanan Jaringan");

mahasiswa.tampilkanInfo();
