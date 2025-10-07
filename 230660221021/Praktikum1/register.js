// register.js

// --- INPUT DATA ---
<<<<<<< HEAD:230660221010/Praktikum-1/register.js
const firstName = "Brilian";
const lastName = "Pratama";
=======
const firstName = "Tira";
const lastName = "Azzahra";
>>>>>>> upstream/main:230660221021/Praktikum1/register.js
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

<<<<<<< HEAD:230660221010/Praktikum-1/register.js
=======
//--TANTANGAN EKSTRA---
//1.VALIDASI PANJANG NIK
console.log("Panjang NIK Valid:", nik.length === 16);

//2.GENERATE EMAIL PERUSAAHAAN
const emailPerusahaan = (firstName.toLowerCase() + "." + lastName.toLowerCase() + "@ciptasolusi.digital");
>>>>>>> upstream/main:230660221021/Praktikum1/register.js

// --- PROSES DATA ---

// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // Hasil: "B"
const initialLastName = lastName.slice(0, 1);   // Hasil: "P"

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); // Hasil: "0003"

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); // Hasil: "BP0003"

// 4. Format Gaji ke format Rupiah
// toLocaleString('id-ID') adalah cara bawaan JavaScript untuk format angka Indonesia

const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; // Hasil: "Rp 9.500.000"

// 5. Ubah boolean menjadi teks yang deskriptif

const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak"; // Hasil: "Karyawan Tetap"
// Ini menggunakan operator ternary, versi singkat dari if-else.

// --- OUTPUT ---

<<<<<<< HEAD:230660221010/Praktikum-1/register.js
// --- OUTPUT ---

=======
>>>>>>> upstream/main:230660221021/Praktikum1/register.js
const summary = `
===================================================
        DATA PENDAFTARAN KARYAWAN BARU
===================================================

SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

Berikut adalah ringkasan data Anda:

  Nama Lengkap      : ${(firstName + " " + lastName).toUpperCase()}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

===================================================
`;

<<<<<<< HEAD:230660221010/Praktikum-1/register.js
console.log(summary);
=======
console.log(summary);
>>>>>>> upstream/main:230660221021/Praktikum1/register.js
