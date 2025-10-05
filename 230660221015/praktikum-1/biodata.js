// biodata.js

// 1. Deklarasikan variabel
const namaLengkap = "Febry Nursyahbriyana";
const tempatLahir = "Sumedang";
let tanggalLahir = "16 Juli 2004";
let umur = 21;
let statusMahasiswa = true;

// Variabel baru
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April";

// 2. String methods tambahan
const namaBesar = namaLengkap.toUpperCase();
const namaKecil = namaLengkap.toLowerCase();
const namaTrim = namaLengkap.trim(); // hapus spasi depan & belakang
const namaGanti = namaLengkap.replace("Galih", "Muhammad"); 

const asalKota = tempatLahir.slice(0, 8); // "Sumedang"

// 3. Gabungkan string alamat
const jalan = "Jl. Raya Sumedang-Cibeureum";
const kota = "Sumedang";

// pakai operator +
const alamatPlus = jalan + ", " + kota;

// pakai Template Literals
const alamatTemplate = `${jalan}, ${kota}`;

// 4. Status teks lebih deskriptif
const statusText = statusMahasiswa ? "Aktif" : "Tidak Aktif";

// 5. Output dengan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Nama Lowercase  : ${namaKecil}
Nama Trim       : "${namaTrim}"
Nama Replace    : ${namaGanti}
Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Jurusan         : ${jurusan}
Universitas     : ${universitas}
Asal Kota       : ${asalKota}
Status Mahasiswa: ${statusText}

Alamat          : ${alamatPlus}
Alamat          : ${alamatTemplate}
=========================================
`;

// 6. Tampilkan output ke konsol
console.log(biodata);