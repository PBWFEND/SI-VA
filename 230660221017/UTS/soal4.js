// Data gaji karyawan
const dataGaji = [
  { nama: "Andi", divisi: "Finance", gaji: 5000000 },
  { nama: "Budi", divisi: "IT", gaji: 7000000 },
  { nama: "Citra", divisi: "Finance", gaji: 5500000 },
  { nama: "Dewi", divisi: "HR", gaji: 4500000 },
];

// Map dengan destructuring parameter
const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => ({
  // Nama diubah ke huruf besar
  karyawan: nama.toUpperCase(),
  // Divisi tetap sama
  divisi,
  // Tunjangan = 10% dari gaji
  tunjangan: gaji * 0.1,
}));

// Tampilkan hasil laporan
console.log(laporanKaryawan);
