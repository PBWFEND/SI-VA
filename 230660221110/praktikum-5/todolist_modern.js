// Data Tugas (Asumsi)
const tasks = [
  { nama: "Belajar JavaScript Modern", selesai: true },
  { nama: "Mengerjakan Praktikum-5", selesai: false },
  { nama: "Mempersiapkan Presentasi", selesai: true },
  { nama: "Membaca Dokumentasi Node.js", selesai: false },
];

console.log(
  "--- 📝 Daftar Tugas Lengkap (forEach, Arrow Function, Destructuring) ---"
);

// 1. Refactor: .forEach() menggunakan Arrow Function dan Destructuring
// tasks.forEach(({ nama, selesai }) => { ... })
tasks.forEach(({ nama, selesai }) => {
  // Destructuring: 'nama' dan 'selesai' langsung tersedia
  const status = selesai ? "[V]" : "[x]";
  console.log(`${status} ${nama}`);
});

console.log(
  "\n--- ✅ Tugas Selesai (filter, Implicit Return, Destructuring) ---"
);

// 2. Refactor: .filter() menggunakan Arrow Function satu baris (Implicit Return) dan Destructuring
// const tugasSelesai = tasks.filter(({ selesai }) => selesai);
const tugasSelesai = tasks.filter(({ selesai }) => selesai);

console.log(tugasSelesai);

console.log(
  "\n--- 🏷️ Nama Tugas Belum Selesai (filter & map, Implicit Return) ---"
);

// 3. Gabungan Refactor: .filter() dan .map() menggunakan Implicit Return
const namaTugasBelumSelesai = tasks
  // Filter tugas yang belum selesai (Implicit Return & Destructuring)
  .filter(({ selesai }) => !selesai)
  // Ambil hanya nama tugas dan ubah ke huruf kapital (Implicit Return & Destructuring)
  .map(({ nama }) => nama.toUpperCase());

console.log(namaTugasBelumSelesai);

/*
Penjelasan Implementasi Refactoring:
------------------------------------

1.  forEach:
    -   function (task) diganti menjadi **(task) =>**.
    -   Parameter (task) diganti menjadi **({ nama, selesai })** untuk Destructuring.
    -   Di dalamnya, kita bisa langsung menggunakan variabel 'nama' dan 'selesai'.

2.  filter:
    -   tasks.filter((task) => { return task.selesai; })
    -   Diubah menjadi: **tasks.filter(({ selesai }) => selesai);**
    -   Ini adalah **Arrow Function satu baris** (menghilangkan `{}` dan `return`), sehingga **selesai** secara otomatis menjadi nilai yang dikembalikan (*implicit return*).

3.  map:
    -   Di dalam .map(), kode diubah menjadi **.map(({ nama }) => nama.toUpperCase());**
    -   Menggunakan Destructuring **({ nama })** dan **Implicit Return**.
*/
