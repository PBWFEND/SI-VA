// register.js

// --- INPUT DATA ---
const firstName = "Brilian";
const lastName = "Pratama";
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// --- VALIDASI DATA ---
// 1. Validasi panjang NIK
console.log("Panjang NIK Valid:", nik.length === 16);

// --- PROSES DATA ---

// 2. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // "B"
const initialLastName = lastName.slice(0, 1);   // "P"

// 3. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); // "0003"

// 4. Generate Employee ID
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); // "BP0003"

// 5. Format Gaji ke Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; // "Rp 9.500.000"

// 6. Status Karyawan
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// 7. Generate Email Perusahaan
const emailPerusahaan = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@ciptasolusi.digital`;

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
  Email Perusahaan  : ${emailPerusahaan}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}
===================================================
`;

console.log(summary);