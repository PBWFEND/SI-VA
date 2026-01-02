const mahasiswa = {
  nama: "Astia Sundari Putri",
  nim: "230660221020",
  jurusan: "Sistem Informasi",
  matkul: ["Pemrograman Berbasis Web"],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log("=== Data Mahasiswa ===");
    console.log(`Nama    : ${this.nama}`);
    console.log(`NIM     : ${this.nim}`);
    console.log(`Jurusan : ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((mk, index) => {
      console.log(`${index + 1}. ${mk}`);
    });
  },
};

// Demonstrasi
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

mahasiswa.tambahMatkul("Basis Data");
mahasiswa.tambahMatkul("Rekayasa Perangkat Lunak");

mahasiswa.tampilkanInfo();
