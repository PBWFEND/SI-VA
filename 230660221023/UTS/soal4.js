/**
 * Soal 4: Destructuring & Map
 * Menggunakan .map() dengan destructuring pada parameter arrow function
 */

const dataGaji = [
  { nama: "Andi", divisi: "Finance", gaji: 5000000 },
  { nama: "Budi", divisi: "IT", gaji: 7000000 },
  { nama: "Citra", divisi: "Finance", gaji: 5500000 },
  { nama: "Dewi", divisi: "HR", gaji: 4500000 },
];

// Gunakan .map() dan destructuring ({ nama, divisi, gaji })
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  return {
    karyawan: nama.toUpperCase(), // Mengubah nama jadi huruf besar
    divisi: divisi,
    tunjangan: gaji * 0.1, // Menghitung 10% tunjangan
  };
});

// --- Uji Coba ---
console.log("--- Soal 4: Laporan Karyawan ---");
console.log(laporanKaryawan);