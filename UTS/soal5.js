const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"]
};

const tambahKoleksi = (item) => {
  if (!item || typeof item !== "string") {
    console.log("Item tidak valid.");
    return;
  }
  data.koleksi.push(item);
  console.log(`Koleksi "${item}" berhasil ditambah!`);
};

const cekKoleksi = (item) => {
  const ada = data.koleksi.includes(item);
  if (ada) {
    console.log(`Item "${item}" ada di perpustakaan.`);
  } else {
    console.log(`Item "${item}" tidak ditemukan.`);
  }
};

tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");
