// Objek mahasiswa dengan atribut dan fungsi-fungsi pendukung
const mahasiswa = {
  nama: "Sesi Pramesti",
  nim: "230660221017",
  jurusan: "Sistem Informasi",
  matkul: [],

  // Menambah mata kuliah ke array
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  // Menampilkan seluruh informasi mahasiswa
  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log("Mata Kuliah:", this.matkul.join(", "));
  },
};

// Tampilkan nama dan NIM terlebih dahulu
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM: ${mahasiswa.nim}`);

// Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Front-end");
mahasiswa.tambahMatkul("Back-end");

// Tampilkan seluruh informasi mahasiswa
mahasiswa.tampilkanInfo();