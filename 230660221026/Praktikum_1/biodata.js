// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Wendi feriyanda"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
const Universitas = "Unsap";
let tanggalLahir = "27 Juli 2004"; // Format bisa disesuaikan
let umur = 21; // Ganti dengan umurmu
let statusMahasiswaa = false; // Gunakan boolean (true jika aktif, false jika tidak)

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 8); // Mengambil 5 karakter pertama
const asalSekolah = Universitas.slice(0, 5);
const statusText =  statusMahasiswaa? " Aktif " : "Tidak Aktif";
// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap     : ${namaBesar}
Tempat Lahir     : ${tempatLahir}
Tanggal Lahir    : ${tanggalLahir}
Umur             : ${umur} tahun
Asal Kota        : ${asalKota}
Asal Sekolah     : ${asalSekolah}
Status Mahasiswa : ${statusText}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
