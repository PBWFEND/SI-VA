/**
 * Soal 5: Refactor Kode ke ES6+
 */

// --- Kode Baru (ES6+) ---

const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],
};

const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log(`Koleksi "${item}" berhasil ditambah!`);
};

const cekKoleksi = (item) => {
  const ada = data.koleksi.indexOf(item) !== -1;

  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// --- Menjalankan Kode ---
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");