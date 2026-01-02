// Soal3.js – Object Literal & Methods

const mahasiswa = {
    nama: "Fajar",
    nim: "230660221093",
    jurusan: "Teknik Informatika",
    matkul: [],
  
    // Method untuk menambah mata kuliah baru
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
  console.log(`Nama: ${mahasiswa.nama}`);
  console.log(`NIM : ${mahasiswa.nim}`);
  
  // Tambahkan dua mata kuliah baru
  mahasiswa.tambahMatkul("Pemrograman Web");
  mahasiswa.tambahMatkul("Basis Data");
  
  // Tampilkan seluruh informasi
  mahasiswa.tampilkanInfo();
  