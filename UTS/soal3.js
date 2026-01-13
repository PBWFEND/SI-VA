const mahasiswa = {
  nama: "Rina",
  nim: "20221001",
  jurusan: "Informatika",
  matkul: ["Algoritma", "Basis Data"],

  tambahMatkul: function(namaMatkul) {
    if (!namaMatkul || typeof namaMatkul !== "string") {
      console.log("Nama mata kuliah tidak valid.");
      return;
    }
    this.matkul.push(namaMatkul);
    console.log(`Matkul "${namaMatkul}" ditambahkan.`);
  },

  tampilkanInfo: function() {
    console.log("=== Informasi Mahasiswa ===");
    console.log(`Nama : ${this.nama}`);
    console.log(`NIM  : ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log("Mata Kuliah:");
    this.matkul.forEach((m, i) => console.log(`  ${i + 1}. ${m}`));
  }
};

console.log(mahasiswa.nama, "-", mahasiswa.nim);
mahasiswa.tambahMatkul("Pemrograman Web");
mahasiswa.tambahMatkul("Keamanan Jaringan");
mahasiswa.tampilkanInfo();
