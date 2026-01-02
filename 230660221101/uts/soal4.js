// soal4.js

const dataGaji = [
  { nama: "Amelia", divisi: "Finance", gaji: 5000000 },
  { nama: "Putri", divisi: "IT", gaji: 7000000 },
  { nama: "Latifah", divisi: "Finance", gaji: 5500000 },
  { nama: "Ahmad", divisi: "HR", gaji: 4500000 },
];

// Gunakan .map() dengan destructuring di parameter
// Perhatikan: ({ nama, divisi, gaji })
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => {
  // Return sebuah object baru
  return {
    karyawan: nama.toUpperCase(), // Ubah ke huruf besar
    divisi: divisi,
    tunjangan: gaji * 0.10 // 10% dari gaji
  };
});

// --- Uji Coba ---
console.log(laporanKaryawan);