// register.js
// ===================================================
// Studi Kasus 1: Sistem Mini Pendaftaran Karyawan
// PT. Cipta Solusi Digital
// ===================================================

// --- INPUT DATA ---
const firstName = "Lala";
const lastName = "Jalaliah";
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// --- PROSES DATA ---

// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // "B"
const initialLastName = lastName.slice(0, 1);   // "P"

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); // "0003"

// 3. Buat Employee ID
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); // "BP0003"

// 4. Format Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString("id-ID")}`; // "Rp 9.500.000"

// 5. Ubah boolean menjadi teks status
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// --- OUTPUT ---
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

// --- TAMPILKAN DI TERMINAL ---
console.log(summary);
