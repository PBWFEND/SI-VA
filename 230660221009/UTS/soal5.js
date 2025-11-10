// soal5.js
// Soal 5 – Refactor Kode ke ES6+

// Gunakan const untuk data yang tidak berubah referensinya
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],
};

// Ubah function ke arrow function
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// Gunakan arrow function dan template literals
const cekKoleksi = (item) => {
  const ada = data.koleksi.includes(item);
  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// Uji program
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");