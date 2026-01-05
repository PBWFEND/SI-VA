// soal3.js
const mahasiswa = {
  nama: "Febry Nursyahbriyana",
  nim: "230660221015",
  jurusan: "Sistem Informasi",
  matkul: [],
  
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },
  
  tampilkanInfo() {
    console.log(`
=== Data Mahasiswa ===
Nama    : ${this.nama}
NIM     : ${this.nim}
Jurusan : ${this.jurusan}
Mata Kuliah:
- ${this.matkul.join("\n- ")}
`);
  },
};

// Demonstrasi
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Kecerdasan Buatan");

mahasiswa.tampilkanInfo();
