// Soal 3 – Object Literal & Methods

const mahasiswa = {
  nama: "Rudi Setiawan",
  nim: "202310045",
  jurusan: "Teknik Informatika",
  matkul: [],

  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
  },

  tampilkanInfo() {
    console.log(`Nama     : ${this.nama}`);
    console.log(`NIM      : ${this.nim}`);
    console.log(`Jurusan  : ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((m, i) => console.log(`  ${i + 1}. ${m}`));
  },
};

console.log("=== Soal 3: Object Literal & Methods ===");
console.log(`Mahasiswa: ${mahasiswa.nama} (${mahasiswa.nim})`);
mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Basis Data");
mahasiswa.tampilkanInfo();
console.log("\n");
