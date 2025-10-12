// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Febry Nursyahbriyana"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "16 Juli 2004";
let umur = 21;
let statusMahasiswa = true;

// Variabel baru
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const namaKecil = namaLengkap.toLowerCase();
const namaTrim = namaLengkap.trim();
const namaGanti = namaLengkap.replace("Febry", "Muhammad"); // contoh penggunaan replace
const asalKota = tempatLahir.slice(0, 5); // Mengambil 5 karakter pertama

// 3. Gabungkan string alamat
const jalan = "Jl. Raya Sumedang - Cibeureum";
const kota = "Sumedang";

// Menggabungkan dengan operator +
const alamatPlus = jalan + ", " + kota;

// Menggabungkan dengan Template Literals
const alamatTemplate = `${jalan}, ${kota}`;

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap      : ${namaLengkap}
Nama Uppercase    : ${namaBesar}
Nama Lowercase    : ${namaKecil}
Nama Trim         : "${namaTrim}"
Nama Replace      : ${namaGanti}
Tempat Lahir      : ${tempatLahir}
Tanggal Lahir     : ${tanggalLahir}
Umur              : ${umur} tahun
Jurusan           : ${jurusan}
Universitas       : ${universitas}
Asal Kota (Slice) : ${asalKota}
Status Aktif      : ${statusMahasiswa ? "Aktif" : "Tidak Aktif"}
Alamat (+)        : ${alamatPlus}
Alamat (Template) : ${alamatTemplate}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
