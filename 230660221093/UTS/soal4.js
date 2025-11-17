// Soal4.js – Destructuring & Map

const dataGaji = [
    { nama: "Andi", divisi: "Finance", gaji: 5000000 },
    { nama: "Budi", divisi: "IT", gaji: 7000000 },
    { nama: "Citra", divisi: "Finance", gaji: 5500000 },
    { nama: "Dewi", divisi: "HR", gaji: 4500000 },
  ];
  
  // Gunakan .map() dengan destructuring parameter
  const laporanKaryawan = dataGaji.map(({ nama, divisi, gaji }) => ({
    karyawan: nama.toUpperCase(),
    divisi: divisi,
    tunjangan: gaji * 0.1,
  }));
  
  // Cetak hasil ke konsol
  console.log("=== Laporan Karyawan ===");
  console.log(laporanKaryawan);
  