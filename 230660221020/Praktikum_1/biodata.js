// =========================================
// Praktikum 1: Dasar NodeJS & JavaScript
// Nama  : Astia SUndari Putri
// NIM   : 230660221020
// =========================================

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Astia Sundari Putri"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "02 Agustus 2004";
let umur = 21;
let statusMahasiswa = true; // true = aktif
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April Sumedang";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 8); // Mengambil 8 huruf pertama
const namaKecil = namaLengkap.toLowerCase();
const namaGanti = namaLengkap.replace("Astia Sundari Putri", "P."); // Contoh replace nama
const namaTrim = "   " + namaLengkap + "   ".trim(); // Contoh trim()

// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap     : ${namaBesar}
Tempat Lahir     : ${tempatLahir}
Tanggal Lahir    : ${tanggalLahir}
Umur             : ${umur} tahun
Asal Kota (Slice): ${asalKota}
Status Aktif     : ${statusMahasiswa}
Jurusan          : ${jurusan}
Universitas      : ${universitas}
=========================================
Tambahan Method:
- Nama Huruf Kecil : ${namaKecil}
- Replace Nama     : ${namaGanti}
=========================================
`;

// 4. Tampilkan output ke terminal
console.log(biodata);
