// register.js

// --- INPUT DATA ---
const firstName = "Brilian";
const lastName = "Pratama";
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

// 3. Gabungkan semuanya dan ubah ke huruf besar
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase(); // "BP0003"

// 4. Format Gaji ke format Rupiah
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`; // "Rp 9.500.000"

// 5. Ubah boolean menjadi teks yang deskriptif
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// --- OUTPUT HASIL ---
const employeeData = `
=========================================
          DATA KARYAWAN
=========================================
Employee ID   : ${employeeID}
Nama Lengkap  : ${firstName} ${lastName}
NIK           : ${nik}
Posisi        : ${position}
Gaji Bruto    : ${formattedSalary}
Status        : ${statusText}
=========================================
`;

console.log(employeeData);
