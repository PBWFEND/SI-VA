// register.js

// --- INPUT DATA ---
const firstName = "Brilian";
const lastName = "Pratama";
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// --- PROSES DATA ---

// Validasi NIK (harus 16 digit)
console.log("Panjang NIK Valid:", nik.length === 16);

// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1);
const initialLastName = lastName.slice(0, 1);

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4);

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase();

// 4. Format Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString("id-ID")}`;

// 5. Ubah boolean menjadi teks
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// 6. Generate Email Perusahaan
const emailPerusahaan =
  `${firstName.toLowerCase()}.${lastName.toLowerCase()}@ciptasolusi.digital`;

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
  Email Perusahaan  : ${emailPerusahaan}

===================================================
`;

console.log(summary);