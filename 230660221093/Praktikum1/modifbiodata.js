// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Fajar Ajay";
const tempatLahir = "Sumedang";
let tanggalLahir = "12 Juli 2003";
let umur = 22;
let statusMahasiswa = true;

// Variabel tambahan
const jurusan = "Informatika";
const universitas = "Universitas Pendidikan Indonesia";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();     // Semua huruf besar
const namaKecil = namaLengkap.toLowerCase();     // Semua huruf kecil
const namaTrim = "   " + namaLengkap + "   ";    // Ada spasi tambahan
const namaBersih = namaTrim.trim();              // Hilangkan spasi di awal & akhir
const namaGanti = namaLengkap.replace("Ajay", "Saputra"); // Replace kata

const asalKota = tempatLahir.slice(0, 8); // Mengambil 8 karakter pertama

// 3. Gabungkan string
const jalan = "Jl. Merdeka No. 45";
const kota = "Bandung";

// Gabung dengan operator +
const alamatPlus = jalan + ", " + kota;

// Gabung dengan Template Literals
const alamatTemplate = `${jalan}, ${kota}`;

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Nama Kecil      : ${namaKecil}
Nama Bersih     : ${namaBersih}
Nama Ganti      : ${namaGanti}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Jurusan         : ${jurusan}
Universitas     : ${universitas}
Asal Kota (Slice): ${asalKota}
Status Aktif    : ${statusMahasiswa}
-----------------------------------------
Alamat (+)      : ${alamatPlus}
Alamat (Template): ${alamatTemplate}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
