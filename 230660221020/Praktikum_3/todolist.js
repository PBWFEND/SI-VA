// ================================================
// Praktikum 3: Looping & Array
// Nama : Astia Sundari Putri
// NIM  : 230660221020
// ================================================

// 1. Inisialisasi data array of objects (daftar tugas)
let tasks = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// 2. Fungsi untuk menambah tugas baru menggunakan .push()
function tambahTugas(namaTugas) {
  const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({
    id: idBaru,
    nama: namaTugas,
    selesai: false,
  });
  console.log(`✅ Tugas "${namaTugas}" berhasil ditambahkan!`);
}

// Menjalankan fungsi tambah tugas
tambahTugas("Review kode teman");

// 3. Menampilkan semua tugas menggunakan .forEach()
console.log("\n--- 📋 Daftar Semua Tugas ---");
tasks.forEach((task) => {
  const status = task.selesai ? "[✓]" : "[x]";
  console.log(`${status} ${task.nama}`);
});

// 4. Menyaring tugas yang belum selesai menggunakan .filter()
console.log("\n--- 🔍 Tugas yang Belum Selesai ---");
const tugasBelumSelesai = tasks.filter((task) => !task.selesai);
tugasBelumSelesai.forEach((task) => console.log(`- ${task.nama}`));

// 5. Membuat daftar nama tugas saja menggunakan .map()
console.log("\n--- 🧠 Ringkasan Nama Tugas (Map) ---");
const namaTugas = tasks.map((task) => task.nama);
console.log(namaTugas);

// 6. Bonus: Tambah dan hapus tugas menggunakan push() dan pop()
console.log("\n--- ✏️ Manipulasi Array Tambah & Hapus ---");
// Menambah tugas
tasks.push({ id: 6, nama: "Mengerjakan laporan praktikum", selesai: false });
console.log("Tugas baru ditambahkan:", tasks[tasks.length - 1].nama);

// Menghapus tugas terakhir
const hapusTerakhir = tasks.pop();
console.log(`Tugas "${hapusTerakhir.nama}" telah dihapus.`);

// 7. Menampilkan jumlah total tugas
console.log(`\n📊 Total tugas saat ini: ${tasks.length} buah`);
