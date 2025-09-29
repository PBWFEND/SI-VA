// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Tira Azzahra"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "25 Maret 2005"; // Format bisa disesuaikan
let umur = 21; // Ganti dengan umurmu
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)
const Jurusan = "Sistem Informasi"
const Universitas = "Universitas Sebelas April"

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 10); // Mengambil 5 karakter pertama

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
Jurusan         : ${Jurusan}
Universitas     : ${Universitas}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
