// Object data perpustakaan
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],
};

// Arrow function untuk menambah koleksi
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// Arrow function untuk mengecek koleksi
const cekKoleksi = (item) => {
  // Menggunakan includes untuk mencari item
  const ada = data.koleksi.includes(item);
  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// Demonstrasi fungsi
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");
