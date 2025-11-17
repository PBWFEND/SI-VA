/**
 * Soal 5 – Refactor Kode ke ES6+
 * Mengganti var, function, dan string concatenation
 */

// --- Kode Modern (ES6+) ---

// 1. Ganti 'var' -> 'const' (karena data tidak di-assign ulang)
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],
};

// 2. Ubah 'function' -> 'arrow function'
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// 2. Ubah 'function' -> 'arrow function'
const cekKoleksi = (item) => {
  // Ganti 'var' -> 'const'
  // Gunakan .includes() (lebih modern dari indexOf)
  const ada = data.koleksi.includes(item);

  // 3. Gunakan 'template literals'
  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// --- Demonstrasi Kode Hasil Refactor ---
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");