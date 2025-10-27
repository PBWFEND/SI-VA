// todolist_modern.js

// Data awal berupa kumpulan objek tugas
let tasks = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// Fungsi untuk menambahkan item tugas baru ke dalam array
const tambahTugas = (namaTugas) => {
  const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({
    id: idBaru,
    nama: namaTugas,
    selesai: false,
  });
  console.log(`Tugas baru "${namaTugas}" telah berhasil ditambahkan.`);
};

// Jalankan fungsi untuk menambah tugas
tambahTugas("Review kode teman");

// Menampilkan seluruh daftar tugas (dengan destructuring agar kode lebih ringkas)
console.log("\n=== Daftar Tugas Saat Ini ===");
tasks.forEach(({ nama, selesai }) => {
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// Menampilkan hanya tugas yang statusnya belum selesai (menggunakan arrow + implicit return)
console.log("\n=== Daftar Tugas Belum Selesai ===");
const tugasBelumSelesai = tasks.filter(({ selesai }) => !selesai);

// Cetak hasil filter di atas
tugasBelumSelesai.forEach(({ nama }) => console.log(`- ${nama}`));

// Membuat daftar hanya berisi nama-nama tugas (arrow + implicit return)
console.log("\n=== Ringkasan Nama Semua Tugas ===");
const namaTugas = tasks.map(({ nama }) => nama);
console.log(namaTugas);
