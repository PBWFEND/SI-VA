/* Kode Node.js untuk menghasilkan tampilan pendaftaran karyawan baru */

const separator = "===================================================";
const welcome = "SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!";
const summary = "Berikut adalah ringkasan data Anda:";

// Data Karyawan
const namaLengkap = "BRILIAN PRATAMA";
const posisi = "Backend Developer";
const employeeID = "BP0003";
const gajiPokok = "Rp 9.500.000"; // Gross Salary (Gaji Pokok)
const status = "Karyawan Tetap";

console.log(separator);
console.log("DATA PENDAFTARAN KARYAWAN BARU");
console.log(separator);
console.log(); // Baris kosong

console.log(welcome);
console.log(); // Baris kosong

console.log(summary);
console.log(); // Baris kosong

// Menampilkan detail data dengan format rapi
console.log(`Nama Lengkap   : ${namaLengkap}`);
console.log(`Posisi         : ${posisi}`);
console.log(`Employee ID    : ${employeeID}`);
console.log(); // Baris kosong

console.log(`Gaji Pokok (Gross): ${gajiPokok}`);
console.log(`Status            : ${status}`);
console.log(); // Baris kosong

console.log(separator);
