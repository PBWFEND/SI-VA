// biodata.js

// 1. Deklarasikan variabel menggunakan const dan let
const namaLengkap = "  Nisa Rahmawati  "; // ada spasi ekstra untuk contoh trim()
const tempatLahir = "Bagan Batu";
let tanggalLahir = "11 Juni 2005"; 
let umur = 20; 
let statusMahasiswa = true; 

// Variabel tambahan
const jurusan = "Sistem Informasi";
const universitas = "Universitas Sebelas April Sumedang";

// Variabel alamat 
const jalan = "Jl. Raya Dayeuhluhur";
const kota = "Sumedang";

// Gabungkan alamat pakai +
const alamatConcat = jalan + ", " + kota;

// Gabungkan alamat pakai Template Literals
const alamatTemplate = `${jalan}, ${kota}`;


// 2. Gunakan string methods untuk memanipulasi data
const namaBesar = namaLengkap.toUpperCase();      // Semua huruf besar
const namaKecil = namaLengkap.toLowerCase();      // Semua huruf kecil
const namaTrim = namaLengkap.trim();              // Hilangkan spasi depan & belakang
const namaGanti = namaLengkap.replace("Rahmawati", "R."); // Replace bagian nama

const asalKota = tempatLahir.slice(0, 10); // Ambil karakter pertama


// 3. Siapkan output menggunakan Template Literals
const biodata = `
=========================================
          BIODATA MAHASISWA
=========================================
Nama Lengkap    : ${namaBesar}
Nama Kecil      : ${namaKecil}
Nama Trimmed    : "${namaTrim}"
Nama Replace    : ${namaGanti}

Tempat Lahir    : ${tempatLahir}
Tanggal Lahir   : ${tanggalLahir}
Umur            : ${umur} tahun
Asal Kota (Slice) : ${asalKota}
Status Aktif    : ${statusMahasiswa ? "Ya" : "Tidak"}

Jurusan         : ${jurusan}
Universitas     : ${universitas}

Alamat (Concat) : ${alamatConcat}
Alamat (Template Literals): ${alamatTemplate}
=========================================
`;

// 4. Tampilkan output ke konsol
console.log(biodata);
