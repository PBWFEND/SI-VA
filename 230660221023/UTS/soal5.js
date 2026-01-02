/**
 * Soal 5: Refactor Kode ke ES6+
 * Mengubah sintaks lama (var, function, string concat) ke modern (const/let, arrow, template literals)
 */

/*
// --- Kode Lama (ES5) ---
var data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"]
};

function tambahKoleksi(item) {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
}

function cekKoleksi(item) {
  var ada = data.koleksi.indexOf(item) !== -1;
  if (ada) {
    console.log("Item '" + item + "' ada di perpustakaan.");
  } else {
    console.log("Item '" + item + "' tidak ditemukan.");
  }
}
*/

// --- Kode Baru (Hasil Refactor ES6+) ---

// Ganti 'var' -> 'const' (karena object 'data' tidak di-assign ulang)
const data = {
  nama: "Perpustakaan Digital",
  koleksi: ["Buku A", "Buku B"],
};

// Ganti 'function' -> 'arrow function'
const tambahKoleksi = (item) => {
  data.koleksi.push(item);
  console.log("Koleksi berhasil ditambah!");
};

// Ganti 'function' -> 'arrow function'
const cekKoleksi = (item) => {
  // Ganti 'var' -> 'const'
  // Gunakan method modern .includes() (ES6+)
  const ada = data.koleksi.includes(item);

  // Ganti string concatenation -> 'template literals'
  if (ada) {
    console.log(`Item '${item}' ada di perpustakaan.`);
  } else {
    console.log(`Item '${item}' tidak ditemukan.`);
  }
};

// --- Uji Coba (Sama seperti soal) ---
console.log("--- Soal 5: Refactor ke ES6+ ---");
tambahKoleksi("Buku C");
cekKoleksi("Buku A");
cekKoleksi("Buku Z");