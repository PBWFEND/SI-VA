// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "Ade Yusup Maulana";
const tempatLahir = "Sumedang";
let tanggalLahir = "26 Juni 2003";
let umur = 22;
let statusMahasiswa = true;

// Variabel tambahan
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase(); // kapital semua
const namaKecil = namaLengkap.toLowerCase(); // huruf kecil semua
const namaTrim = "   Ade Yusup   ".trim();   // hapus spasi berlebih
const asalKota = tempatLahir.slice(0, 10);    // ambil 10 karakter pertama
const gantiNama = namaLengkap.replace("Maulana", "M."); // ganti bagian string

// 3. Gabungkan string (alamat)
const jalan = "Jl.Situraja-Cikadu ";
const kota = "Sumedang";
// Menggunakan operator +
const alamatPlus = jalan;
// Menggunakan template literal
const alamatTemplate = `${jalan}${kota}`;

// 4. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Nama Kecil      : ${namaKecil}
Nama Trim       : "${namaTrim}"
Nama Replace    : ${gantiNama}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Jurusan         : ${jurusan}
Universitas     : ${universitas}
Alamat (+)      : ${alamatPlus}
Alamat (Template): ${alamatTemplate}
Status Aktif    : ${statusMahasiswa ? "Aktif" : "Tidak Aktif"}
=========================================
`;

// 5. Tampilkan output ke konsol
console.log(biodata);