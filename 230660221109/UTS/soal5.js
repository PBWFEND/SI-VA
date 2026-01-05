// soal5.js
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],
};

const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log(`Koleksi '${item}' berhasil ditambah!`);
};

const cekKoleksi = (item) => {
  const ada = data.koleksi.includes(item);
  console.log(
    ada
      ? `Item '${item}' ada di ${data.nama}.`
      : `Item '${item}' tidak ditemukan di ${data.nama}.`
  );
};

// Demonstrasi
console.log("=== Soal 5: Perpustakaan Digital ===");
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");
