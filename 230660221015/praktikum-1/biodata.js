// Program Biodata Sederhana
// 230660221015

const firstName = "Febry";
const lastName = "Nursyahbriyana";
const nik = "3211221607040001";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// PROSES DATA
// 1. Ambil initial name
const initialFirstName = firstName.slice(0, 1);
const initialLastName = lastName.slice(0, 1);

// 2. Ambil 4 digit terakhir NIK
const lastFourDigits = nik.slice(-4);

// 3. Generate email
const companyEmail = `${initialFirstName.toLowerCase()}${initialLastName.toLowerCase()}${lastFourDigits}@dmw.nk-uk-bs-howuf-beewe`;

// 4. Hitung net salary
let netSalary = grossSalary;
if (isPermanent) {
    netSalary = grossSalary - (grossSalary * 0.05); // Potongan 5% untuk permanent
}

// OUTPUT
console.log("=== BIODATA KARYAWAN ===");
console.log("Nama Lengkap   : " + firstName + " " + lastName);
console.log("NIK            : " + nik);
console.log("Posisi         : " + position);
console.log("Email Company  : " + companyEmail);
console.log("Status         : " + (isPermanent ? "Permanent" : "Contract"));
console.log("Gaji Gross     : Rp " + grossSalary.toLocaleString());
console.log("Gaji Net       : Rp " + netSalary.toLocaleString());
console.log("=========================");