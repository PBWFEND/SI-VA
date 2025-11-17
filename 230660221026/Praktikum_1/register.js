// register.js

// --- INPUT DATA ---
const firstName = "Wendi";
const lastName = "Feriyanda";
const nim = "230660221026";
const position = "Backend Developer";
let grossSalary = 4500000;
let isPermanent = false;

// --- PROSES DATA ---

// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // Hasil: "B"
const initialLastName = lastName.slice(0, 1);   // Hasil: "P"

// 2. Ambil 4 digit terakhir NIK
const lastNimDigits = nim.slice(-4); // Hasil: "0003"

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNimDigits).toUpperCase(); // Hasil: "BP0003"

// 4. Format Gaji ke format Rupiah
// toLocaleString('id-ID') adalah cara bawaan JavaScript untuk format angka Indonesia

const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; // Hasil: "Rp 9.500.000"

// 5. Ubah boolean menjadi teks yang deskriptif

const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak"; // Hasil True: "Karyawan Tetap" Hasil false: "Karyawan Kontrak"
// Ini menggunakan operator ternary, versi singkat dari if-else.

// --- OUTPUT ---


const summary = `
===================================================
        DATA PENDAFTARAN KARYAWAN BARU
===================================================

SELAMAT DATANG DI Universitas Sebelas April!

Berikut adalah ringkasan data Anda:

  Nama Lengkap      : ${(firstName + " " + lastName).toUpperCase()}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

===================================================
`;

console.log(summary);