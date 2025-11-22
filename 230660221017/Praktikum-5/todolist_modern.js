// todo_modern.js

// Kumpulan data awal berupa objek-objek tugas
let daftarTugas = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// Fungsi untuk menambahkan tugas baru ke daftarTugas
const tambahItem = (judulTugas) => {
  const idTerbaru = daftarTugas.length > 0 
    ? daftarTugas[daftarTugas.length - 1].id + 1 
    : 1;

  daftarTugas.push({
    id: idTerbaru,
    nama: judulTugas,
    selesai: false,
  });

  console.log(`Tugas "${judulTugas}" berhasil dimasukkan ke daftar.`);
};

// Panggil fungsi untuk menambah satu tugas baru
tambahItem("Review kode teman");

// Menampilkan seluruh tugas yang tersedia
console.log("\n=== Seluruh Tugas Terdaftar ===");
daftarTugas.forEach(({ nama, selesai }) => {
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// Menampilkan tugas yang belum ditandai selesai
console.log("\n=== Tugas yang Belum Diselesaikan ===");
const belumSelesai = daftarTugas.filter(({ selesai }) => !selesai);

// Cetak tugas yang masih pending
belumSelesai.forEach(({ nama }) => console.log(`- ${nama}`));

// Membuat daftar hanya berisi nama tugas
console.log("\n=== Daftar Nama Tugas ===");
const listNamaTugas = daftarTugas.map(({ nama }) => nama);
console.log(listNamaTugas);
