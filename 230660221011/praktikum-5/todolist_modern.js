// todolist_modern.js
// (Hasil refactor dari todolist.js Modul 3)

// 1. Inisialisasi data array of objects
let tasks = [
  { id: 1, nama: "Mengerjakan tugas backend", selesai: false },
  { id: 2, nama: "Belajar materi NodeJS", selesai: true },
  { id: 3, nama: "Membuat folder praktikum", selesai: false },
  { id: 4, nama: "Membaca dokumentasi Express", selesai: true },
];

// 2. Menambah tugas baru menggunakan .push()
// (Tidak ada perubahan di fungsi ini)
function tambahTugas(namaTugas) {
  const idBaru = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({
    id: idBaru,
    nama: namaTugas,
    selesai: false,
  });
  console.log(`Tugas "${namaTugas}" berhasil ditambahkan!`);
}

// Menjalankan fungsi tambah tugas
tambahTugas("Review kode teman");

// 3. Menampilkan semua tugas menggunakan .forEach()
// REFACTOR (Tugas 3): Menggunakan Destructuring
console.log("\n--- Daftar Semua Tugas ---");
tasks.forEach((task) => {
  // Destructuring object 'task'
  const { nama, selesai } = task;

  // Menggunakan variabel hasil destructuring
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// 4. Menyaring tugas yang belum selesai menggunakan .filter()
// REFACTOR (Tantangan Ekstra): Arrow function 1 baris (implicit return)
console.log("\n--- Tugas yang Belum Selesai ---");
const tugasBelumSelesai = tasks.filter((task) => !task.selesai);

/*
  // Kode sebelumnya:
  const tugasBelumSelesai = tasks.filter((task) => {
    return task.selesai === false;
  });
*/

// Menampilkan hasil filter (Kode ini sudah modern)
tugasBelumSelesai.forEach(task => console.log(`- ${task.nama}`));

// 5. Membuat daftar nama tugas saja menggunakan .map()
// REFACTOR (Tantangan Ekstra): Arrow function 1 baris (implicit return)
console.log("\n--- Ringkasan Nama Tugas (Map) ---");
const namaTugas = tasks.map((task) => task.nama);

/*
  // Kode sebelumnya:
  const namaTugas = tasks.map((task) => {
    return task.nama;
  });
*/

console.log(namaTugas);