// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Sharel Faturahman"; // Nama diubah
const tempatLahir = "Sumedang";
let tanggalLahir = "02 April 2005"; // Tanggal lahir diubah
let umur = 21; // Umur disesuaikan (per September 2025)
let statusMahasiswa = true; // Gunakan boolean (true jika aktif, false jika tidak)

// --- MODIFIKASI 1: Penambahan Variabel Baru ---
const jurusan = "Sistem Informasi"; // Jurusan diubah
const universitas = "Universitas Sebelas April Sumedang"; // Universitas diubah

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 10); // Mengambil 5 karakter pertama

// --- EKSPLORASI 2: Penggunaan String Method Lain ---
const namaKecil = namaLengkap.toLowerCase(); // Mengubah semua huruf menjadi kecil
const namaPanggilan = namaLengkap.replace("Sharel", "Arel"); // Mengganti bagian dari string
const bioSingkat = "  Mahasiswa Aktif  ";
const bioBersih = bioSingkat.trim(); // Menghapus spasi di awal dan akhir

// --- EKSPLORASI 3: Menggabungkan String ---
const jalan = "Jl. Galudra";
const kota = "Sumedang";

// Cara 1: Menggunakan operator +
const alamatOperatorPlus = "Alamat: " + jalan + ", " + kota + ".";

// Cara 2: Menggunakan Template Literals (lebih mudah dibaca)
const alamatTemplateLiteral = `Alamat: ${jalan}, ${kota}.`;


// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Universitas     : ${universitas}
Jurusan         : ${jurusan}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa}
=========================================
`;

// 4. Tampilkan semua output ke konsol
console.log("--- BIODATA UTAMA ---");
console.log(biodata);

console.log("\n--- HASIL EKSPLORASI METHOD ---");
console.log(`toLowerCase()  : ${namaKecil}`);
console.log(`replace()      : ${namaPanggilan}`);
console.log(`trim() (before): '${bioSingkat}'`);
console.log(`trim() (after) : '${bioBersih}'`);


console.log("\n--- PERBANDINGAN PENGGABUNGAN STRING ---");
console.log(`Dengan Operator + : ${alamatOperatorPlus}`);
console.log(`Dengan Template   : ${alamatTemplateLiteral}`);