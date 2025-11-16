// Definisikan objek mahasiswa menggunakan Object Literal (ES6+)
const mahasiswa = {
  // Properti
  nama: "Citra Dewi",
  nim: "19870021",
  jurusan: "Sistem Informasi",
  matkul: ["Analisis & Desain Sistem", "Jaringan Komputer"], // Array daftar mata kuliah

  // --- Method 1: tambahMatkul ---
  tambahMatkul(namaMatkulBaru) {
    // Menggunakan this untuk mengakses properti matkul di dalam objek
    this.matkul.push(namaMatkulBaru);
    console.log(`\n✅ Mata kuliah "${namaMatkulBaru}" berhasil ditambahkan.`);
  },

  // --- Method 2: tampilkanInfo ---
  tampilkanInfo() {
    console.log("==========================================");
    console.log("           DETAIL DATA MAHASISWA          ");
    console.log("==========================================");
    console.log(`Nama      : ${this.nama}`);
    console.log(`NIM       : ${this.nim}`);
    console.log(`Jurusan   : ${this.jurusan}`);
    console.log(`Daftar Mata Kuliah (${this.matkul.length}):`);

    // Menampilkan daftar mata kuliah menggunakan forEach
    this.matkul.forEach((mk, index) => {
      console.log(`  - ${index + 1}. ${mk}`);
    });
    console.log("==========================================");
  },
};

// ============================================
//           LANGKAH DEMONSTRASI
// ============================================

// 1. Tampilkan nama dan nim
console.log(`\n1. Tampilan Nama dan NIM Awal:`);
console.log(`Nama: ${mahasiswa.nama}`);
console.log(`NIM : ${mahasiswa.nim}`);

// 2. Tambahkan dua mata kuliah baru
console.log("\n2. Menambahkan dua mata kuliah baru...");
mahasiswa.tambahMatkul("Pemrograman Berorientasi Objek");
mahasiswa.tambahMatkul("Tata Kelola TI");

// 3. Tampilkan seluruh informasi dengan tampilkanInfo()
console.log("\n3. Memanggil tampilkanInfo() untuk seluruh data:");
mahasiswa.tampilkanInfo();
