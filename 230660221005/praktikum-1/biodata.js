// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = " CLARA DESMIATI "; // contoh ada spasi untuk uji trim()
const tempatLahir = "SUMEDANG";
let tanggalLahir = "14 DESEMBER 1990"; 
let umur = 35; 
let statusMahasiswa = true; 

// Variabel tambahan
const jurusan = "SISTEM INFORMASI";
const universitas = "UNIVERSITAS SEBELAS APRIL";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.trim().toUpperCase();  // trim + toUpperCase
const namaKecil = namaLengkap.trim().toLowerCase();  // toLowerCase
const namaReplace = namaLengkap.replace("Kamu", "Lengkap"); // replace
const asalKota = tempatLahir.slice(0, 9); // Mengambil 5 karakter pertama

// 3. Gabungkan string alamat
const jalan = "JALAN. BUSAN NO.10";
const kota = "SUMEDANG";
const alamatConcat = jalan + ", " + kota;
const alamatTemplate = `${jalan}, ${kota}`;

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap      : ${namaBesar}
Nama huruf kecil  : ${namaKecil}
Nama              : ${namaReplace}
Tempat Lahir      : ${tempatLahir}
Tanggal Lahir     : ${tanggalLahir}
Umur              : ${umur} tahun
Asal Kota         : ${asalKota}
Jurusan           : ${jurusan}
Universitas       : ${universitas}
Alamat            : ${alamatConcat}
Alamat            : ${alamatTemplate}
Status Aktif      : ${statusMahasiswa}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
