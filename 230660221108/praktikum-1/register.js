// register.js

// --- INPUT DATA ---
const firstName = "Sharel";
const lastName = "Faturahman";
const nik = "230660221108"; // 12 digit, validasi akan false karena bukan 16
const position = "Mahasiswa";
let grossSalary = 9500000;
let isPermanent = true;

// 1. Validasi NIK: Tambahkan console.log untuk mengecek panjang NIK.
console.log("Panjang NIK Valid:", nik.length === 16);



// --- PROSES DATA ---

// 2. Generate Email Perusahaan
const emailPerusahaan = (firstName.toLowerCase() + "." + lastName.toLowerCase() + "@ciptasolusi.digital");

// Ambil inisial nama
const initialFirstName = firstName.slice(0, 1);
const initialLastName = lastName.slice(0, 1);

// Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4);

// Gabungkan semuanya dan ubah ke huruf besar untuk Employee ID
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase();

// Format Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`;

// Ubah boolean menjadi teks yang deskriptif
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// --- OUTPUT ---
const summary = `
===================================================
        DATA PENDAFTARAN KARYAWAN BARU
===================================================

SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

Berikut adalah ringkasan data Anda:

  Nama Lengkap      : ${(firstName + " " + lastName).toUpperCase()}
  Email Perusahaan  : ${emailPerusahaan}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

===================================================
`;

console.log(summary);
