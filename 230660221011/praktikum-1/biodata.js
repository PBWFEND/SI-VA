// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Dina Salwa Mannatu"; // Ganti dengan nama lengkapmu
const tempatLahir = "Sumedang";
let tanggalLahir = "21 September 2005"; 
let umur = 20; 
let statusMahasiswa = true; 

// Variabel baru
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 8); 
const namaKecil = namaLengkap.toLowerCase();
const namaTrim = "   " + namaLengkap + "   "; // contoh trim
const namaRapi = namaTrim.trim();
const kotaGanti = tempatLahir.replace("Sumedang"); // replace contoh

// 3. Gabungkan String (Concatenation vs Template Literals)
const jalan = "Link. Cipameungpeuk";
const kota = "Sumedang";

// Menggunakan operator +
const alamatConcat = jalan + ", " + kota;

// Menggunakan Template Literals
const alamatTemplate = `${jalan}, ${kota}`;

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap      : ${namaBesar}
Nama (lowercase)  : ${namaKecil}
Nama (trim)       : ${namaRapi}
Tempat Lahir      : ${tempatLahir}
Tempat Lahir Ganti: ${kotaGanti}
Tanggal Lahir     : ${tanggalLahir}
Umur              : ${umur} tahun
Jurusan           : ${jurusan}
Universitas       : ${universitas}
Asal Kota (Slice) : ${asalKota}
Status Aktif      : ${statusMahasiswa}

Alamat (Concat)   : ${alamatConcat}
Alamat (Template) : ${alamatTemplate}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
