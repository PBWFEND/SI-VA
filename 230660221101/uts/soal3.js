// soal3.js

const mahasiswa = {
  nama: "Amelia Putri Latifah",
  nim: "230660221101",
  jurusan: "Sistem Informasi",
  matkul: ["Pemrograman Berbasis Web Back End", "Analisis Perancangan Berorientasi Objek"], // Anda bisa mulai dengan array ini atau kosong

  // Method untuk menambah matkul
  // Gunakan function biasa agar 'this' berfungsi
  tambahMatkul(namaMatkul) {
    this.matkul.push(namaMatkul);
    console.log(`Mata kuliah "${namaMatkul}" berhasil ditambahkan.`);
  },

  // Method untuk menampilkan info
  tampilkanInfo() {
    console.log("\n--- Info Mahasiswa ---");
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Jurusan: ${this.jurusan}`);
    
    // Looping untuk menampilkan daftar matkul
    console.log("Mata Kuliah:");
    this.matkul.forEach((matkul, index) => {
      console.log(`  ${index + 1}. ${matkul}`);
    });
  }
};

// --- Langkah Demonstrasi ---

// 1. Tampilkan nama dan nim
console.log(`Nama Awal: ${mahasiswa.nama}`);
console.log(`NIM: ${mahasiswa.nim}`);

// 2. Tambahkan dua mata kuliah baru
mahasiswa.tambahMatkul("Big Data");
mahasiswa.tambahMatkul("Digital Start-Up");

// 3. Tampilkan seluruh informasi
mahasiswa.tampilkanInfo();