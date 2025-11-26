// Daftar tugas (contoh data)
const tasks = [
  { nama: "Belajar JavaScript", selesai: true },
  { nama: "Mengerjakan tugas kampus", selesai: false },
  { nama: "Olahraga pagi", selesai: true },
  { nama: "Bersih-bersih kamar", selesai: false }
];

// 🔹 Menampilkan semua tugas (Refactor: Arrow Function + Destructuring)
console.log("📋 Daftar Tugas:");
tasks.forEach(({ nama, selesai }) => {
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

// 🔹 Menampilkan tugas yang sudah selesai (Refactor: Arrow Function satu baris)
const tugasSelesai = tasks.filter(task => task.selesai);
console.log("\n✅ Tugas Selesai:");
tugasSelesai.forEach(({ nama }) => console.log(`- ${nama}`));

// 🔹 Menampilkan tugas yang belum selesai (Arrow Function satu baris)
const tugasBelumSelesai = tasks.filter(task => !task.selesai);
console.log("\n❌ Tugas Belum Selesai:");
tugasBelumSelesai.forEach(({ nama }) => console.log(`- ${nama}`));

// 🔹 Membuat array baru berisi nama tugas dalam format tertentu (Arrow Function satu baris + map)
const daftarNamaTugas = tasks.map(({ nama, selesai }) => 
  `${selesai ? "✔️" : "❌"} ${nama}`
);
console.log("\n🗂️ Daftar Nama Tugas (dengan status):");
daftarNamaTugas.forEach(item => console.log(item));

// 🔹 Contoh tambahan: Menghitung jumlah tugas selesai (Arrow Function satu baris)
const jumlahSelesai = tasks.filter(task => task.selesai).length;
console.log(`\n📊 Jumlah tugas selesai: ${jumlahSelesai} dari ${tasks.length}`);
