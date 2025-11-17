// soal5.js

// Ganti 'var' -> 'const'
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"]
};

// Ganti 'function' -> 'arrow function'
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// Ganti 'function' -> 'arrow function'
const cekKoleksi = (item) => {
  // Ganti 'var' -> 'const'
  const ada = data.koleksi.indexOf(item) !== -1;
  
  if (ada) {
    // Ganti string concatenation -> 'template literal'
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    // Ganti string concatenation -> 'template literal'
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// --- Uji Coba (Tetap sama) ---
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");