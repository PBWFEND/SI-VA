// Kode Modern (ES6+)
const data = {
  // Penggunaan properti objek standar
  nama: "Perpustakaan Digital",
  // Mengganti var dengan const
  koleksi: ["Buku A", "Buku B"],
};

// Menggunakan Arrow Function (=>)
const tambahKoleksi = (item) => {
  // Push item baru ke dalam array koleksi
  data.koleksi.push(item);
  // Menggunakan Template Literals (` `)
  console.log(`Koleksi berhasil ditambahkan: ${item}`);
};

// Menggunakan Arrow Function (=>)
const cekKoleksi = (item) => {
  // Menggunakan array method .includes() (lebih bersih dari indexOf() !== -1)
  const ada = data.koleksi.includes(item);

  if (ada) {
    // Menggunakan Template Literals (` `) untuk string yang lebih bersih
    console.log(`Item "${item}" sudah ada di perpustakaan.`);
  } else {
    // Menggunakan Template Literals (` `)
    console.log(`Item "${item}" tidak ditemukan.`);
  }
};

// Pemanggilan Fungsi
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");

/* Output yang dihasilkan:
Koleksi berhasil ditambahkan: Buku C
Item "Buku A" sudah ada di perpustakaan.
Item "Buku Z" tidak ditemukan.
*/
