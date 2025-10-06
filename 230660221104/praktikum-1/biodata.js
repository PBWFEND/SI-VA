// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "nazwa aulia rachma";
const tempatLahir = "bogor";
let tanggalLahir = "20 maret 2005";
let umur = 20;
let statusMahasiswa = true;

// Variabel tambahan
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase(); // huruf besar semua
const namaKecil = namaLengkap.toLowerCase(); // huruf kecil semua
const namaRapih = namaLengkap.trim(); // menghapus spasi di awal/akhir (jika ada)
const namaGanti = namaLengkap.replace("rachma", "R."); // mengganti kata tertentu
const asalKota = tempatLahir.slice(0, 5); // ambil 5 karakter pertama

// 3. Gabungkan String
const jalan = "Jl. Legok - Conggeang";
const kota = "Sumedang";
const alamatPlus = jalan + ", " + kota; // gabung pakai +
const alamatTemplate = `${jalan}, ${kota}`; // gabung pakai template literals

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap      : ${namaBesar}
Nama Huruf Kecil  : ${namaKecil}
Nama Trim/rapih   : ${namaRapih}
Nama Diganti      : ${namaGanti}
Tempat Lahir      : ${tempatLahir}
Tanggal Lahir     : ${tanggalLahir}
Umur              : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif      : ${statusMahasiswa}
Jurusan           : ${jurusan}
Universitas       : ${universitas}
Alamat (+)        : ${alamatPlus}
Alamat (Template) : ${alamatTemplate}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);