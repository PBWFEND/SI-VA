const mahasiswa = {
  nama: "Rudi",
  nim: "12345",
  jurusan: "Informatika",
  matkul: [],
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },
  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log(`Mata Kuliah: ${this.matkul.join(", ")}`);
  },
};

console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

mahasiswa.tambahMatkul("Algoritma");
mahasiswa.tambahMatkul("Basis Data");

mahasiswa.tampilkanInfo();
