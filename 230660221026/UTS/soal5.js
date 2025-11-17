// Soal 5 – Refactor Kode ke ES6+

const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"]
};

const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

const cekKoleksi = (item) => {
  const ada = data.koleksi.includes(item);
  if (ada) {
    console.log(`Item '${item}' ada di ${data.nama}.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan di ${data.nama}.`);
  }
};

tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");