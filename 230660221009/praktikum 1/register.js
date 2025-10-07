// register.js

// --- INPUT DATA ---
const firstName = "Ade Yusup";
const lastName = "Maulana";
const nik = "3211062606030001"; // Nomor Induk Kependudukan
const position = "Backend Developer";
let grossSalary = 9500000; // gaji kotor per bulan
let isPermanent = true;    // status karyawan tetap (true/false)

// Data tambahan (opsional)
const email = "adeyusup.maulana@example.com";
const phone = "087722624776";
const address = "Jl.Situraja-Cikadu, Sumedang";

// --- VALIDASI DATA ---
// 1. Validasi panjang NIK
console.log("Panjang NIK Valid:", nik.length === 16);

// --- PROSES DATA ---

// 2. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // "A"
const initialLastName = lastName.slice(0, 1);   // "M"

// 3. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); // "0001"

// 4. Generate Employee ID
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); 
// "AM0001"

// 5. Format Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; 
// "Rp 9.500.000"

// 6. Ubah boolean menjadi teks deskriptif
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