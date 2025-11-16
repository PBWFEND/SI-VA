// Data Gaji Awal dengan Nama Karyawan yang Baru
const dataGaji = [
  { nama: "Rama", divisi: "Finance", gaji: 5000000 },
  { nama: "Komarudin", divisi: "IT", gaji: 7000000 },
  { nama: "Saep", divisi: "Finance", gaji: 5500000 },
  { nama: "Ucup", divisi: "HR", gaji: 4500000 },
];

// Tugas: Gunakan .map() dengan destructuring
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  // Hitung tunjangan (10% dari gaji)
  const tunjangan = gaji * 0.1;

  // Buat objek baru dengan format yang diminta
  return {
    // Nama diubah menjadi huruf besar semua (.toUpperCase())
    karyawan: nama.toUpperCase(),
    // Properti Divisi
    divisi: divisi,
    // Properti tunjangan
    tunjangan: tunjangan,
  };
});

// Cetak hasil laporanKaryawan ke konsol
console.log("==========================================");
console.log("    LAPORAN KARYAWAN (NAMA DIPERBARUI)    ");
console.log("==========================================");
console.log(laporanKaryawan);
console.log("==========================================");
