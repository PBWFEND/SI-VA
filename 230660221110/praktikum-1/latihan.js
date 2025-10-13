// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "   Dede Dian Permana   "; // dengan spasi ekstra di depan & belakang
const tempatLahir = "Sumedang";
let tanggalLahir = "01 Mei 2005"; 
let umur = 21; 
let statusMahasiswa = true; 

// Variabel baru
const jurusan = "Sistem Informasi";
const universitas = "Universitas Teknologi Informasi";

// 2. Gunakan string methods untuk memanipulasi data
const namaTrim = namaLengkap.trim(); // hapus spasi di awal & akhir
const namaBesar = namaTrim.toUpperCase();
const namaKecil = namaTrim.toLowerCase();
const namaGanti = namaTrim.replace("Dian", "Dhyan"); // ganti substring
const asalKota = tempatLahir.slice(0, 8); // ambil 5 karakter pertama

// 3. Gabungkan string alamat
const jalan = "Jl. Raya Bandung";
const kota = "Sumedang";

// Gabung pakai operator +
const alamatConcat = jalan + ", " + kota;

// Gabung pakai Template Literals
const alamatTemplate = `${jalan}, ${kota}`;

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaTrim}
Nama Huruf Besar: ${namaBesar}
Nama Huruf Kecil: ${namaKecil}
Nama Diganti    : ${namaGanti}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Jurusan         : ${jurusan}
Universitas     : ${universitas}
Asal Kota (Slice): ${asalKota}
Status Aktif    : ${statusMahasiswa}
Alamat (+)      : ${alamatConcat}
Alamat (Template): ${alamatTemplate}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);
