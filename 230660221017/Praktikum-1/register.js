// ===================================================
//   SISTEM MINI PENDAFTARAN KARYAWAN - PT. CIPTA SOLUSI DIGITAL
// ===================================================

// --- INPUT DATA ---
const firstName = "Brilian";
const lastName = "Pratama";
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// --- VALIDASI NIK (Tantangan Ekstra) ---
console.log("Panjang NIK Valid:", nik.length === 16);

// --- PROSES DATA ---

// 1. Ambil inisial nama
const initialFirstName = firstName.slice(0, 1); // "B"
const initialLastName = lastName.slice(0, 1);   // "P"

// 2. Ambil 4 digit terakhir NIK
const lastNikDigits = nik.slice(-4); // "0003"

// 3. Gabungkan dan ubah menjadi huruf besar untuk Employee ID
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); // "BP0003"

// 4. Format gaji ke dalam format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; // "Rp 9.500.000"

// 5. Ubah status boolean menjadi teks
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// 6. (Tantangan Ekstra) Generate Email Perusahaan
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
