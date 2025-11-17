// Object mahasiswa dengan properti dan method
const mahasiswa = {
  nama: "Galih Permana Sidik",
  nim: "230660221002",
  jurusan: "Sistem Informasi",
  matkul: [],

  // Method untuk menambah mata kuliah
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  // Method untuk menampilkan seluruh data mahasiswa
  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log("Mata Kuliah:", this.matkul.join(", "));
  },
};

// Tampilkan nama dan NIM
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM: ${mahasiswa.nim}`);

// Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Algoritma");
mahasiswa.tambahMatkul("Basis Data");

// Tampilkan seluruh informasi mahasiswa
mahasiswa.tampilkanInfo();