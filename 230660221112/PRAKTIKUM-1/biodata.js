// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Billy Apandisastra";
const tempatLahir = "Sumedang";
let tanggalLahir = "15 September 2002";
let umur = 22;
let statusMahasiswa = true;

// Variabel tambahan
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April Sumedang";

// 2. String methods
const namaBesar = namaLengkap.toUpperCase();
const asalKota = tempatLahir.slice(0, 10); // Ambil 10 karakter pertama

// Eksplorasi string
const namaKecil = namaLengkap.toLowerCase();
const namaPanggilan = namaLengkap.replace("Apandisastra", "Billy");
const bioSingkat = "   Mahasiswa Aktif   ";
const bioBersih = bioSingkat.trim();

// 3. Gabungkan String
const jalan = "Jl. paseh";
const kota = "Sumedang";

// Cara 1: Operator +
const alamatOperatorPlus = "Alamat: " + jalan + ", " + kota + ".";

// Cara 2: Template Literals (✅ harus pakai backtick)
const alamatTemplateLiteral = `Alamat: ${jalan}, ${kota}.`;

// 4. Template biodata
const biodata = `
=================


      BIODATA MAHASISWA


=========================================
Nama Lengkap       : ${namaBesar}
Universitas        : ${universitas}
Jurusan            : ${jurusan}
Tempat Lahir       : ${tempatLahir}
Tanggal Lahir      : ${tanggalLahir}
Umur               : ${umur} tahun
Asal Kota (Slice)  : ${asalKota}
Status Aktif       : ${statusMahasiswa}
=======================================

`;

// 5. Output ke konsol
console.log("--- BIODATA UTAMA ---");
console.log(biodata);

console.log("\n--- HASIL EKSPLORASI STRING METHOD ---");
console.log(`toLowerCase()  : ${namaKecil}`);
console.log(`replace()      : ${namaPanggilan}`);
console.log(`trim() (before): '${bioSingkat}'`);
console.log(`trim() (after) : '${bioBersih}'`);

console.log("\n--- PERBANDINGAN PENGGABUNGAN STRING ---");
console.log(`Dengan Operator + : ${alamatOperatorPlus}`);
console.log(`Dengan Template   : ${alamatTemplateLiteral}`);
