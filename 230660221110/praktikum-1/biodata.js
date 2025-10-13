// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
<<<<<<<< HEAD:230660221110/praktikum-1/biodata.js
const namaLengkap = "Komarudin AR"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "19 September 2002"; // Format bisa disesuaikan
let umur = 25; // Ganti dengan umurmu
========
const namaLengkap = "Dede Dian Permana"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "01 Mei 2005"; // Format bisa disesuaikan
let umur = 21; // Ganti dengan umurmu
>>>>>>>> ffa7486e79eee2732da497bd327230a277d8025f:Praktikum-1/biodata.js
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 5); // Mengambil 5 karakter pertama

// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
