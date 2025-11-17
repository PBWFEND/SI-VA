// soal5.js

const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],
};

// Arrow function tambah koleksi
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// Arrow function cek koleksi
const cekKoleksi = (item) => {
  const ada = data.koleksi.includes(item);
  if (ada) {
    console.log(`Item '${item}' ada di ${data.nama}.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// Demonstrasi
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");
