// biodata.js

// 1. Deklarasikan variabel dasar
const namaLengkap = "Elangga Yudistira";
const tempatLahir = "Bandung";
const tanggalLahir = "07 Juli 2004";
let umur = 21; 
let asalKotaLengkap = "Sumedang";
let statusMahasiswa = true;

// 2. Variabel tambahan
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April Sumedang";

// 3. Eksplorasi string methods
const namaBesar = namaLengkap.toUpperCase(); // kapital semua
const namaKecil = namaLengkap.toLowerCase(); // huruf kecil semua
const namaTrim = "   Elangga   ".trim(); // hapus spasi depan-belakang
const kotaGanti = asalKotaLengkap.replace("Sumedang", "Bandung"); // ganti teks
const asalKota = asalKotaLengkap.slice(0, 10); // ambil 10 karakter pertama

// Status lebih terbaca
const statusAktif = statusMahasiswa ? "Aktif" : "Tidak Aktif";

// 4. Gabungkan string (alamat)
let jalan = "Jl. Raya Sumedang No.10 ";
let kota = "Sumedang";
let alamatConcat = jalan + kota; // cara lama (concatenation)
let alamatTemplate = `${jalan}${kota}`; // cara modern (template literal)

// 5. Output dengan template literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap      : ${namaBesar}
Nama (lowercase)  : ${namaKecil}
Nama (trim)       : ${namaTrim}
Tempat Lahir      : ${tempatLahir}
Tanggal Lahir     : ${tanggalLahir}
Umur              : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Asal Kota Replace : ${kotaGanti}
Status Mahasiswa  : ${statusAktif}
Jurusan           : ${jurusan}
Universitas       : ${universitas}
Alamat (Concat)   : ${alamatConcat}
Alamat (Template) : ${alamatTemplate}
=========================================
`;

// 6. Tampilkan output ke konsol
console.log(biodata);
