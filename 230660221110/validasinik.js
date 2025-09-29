// --- Data Karyawan Contoh ---
const employeeData = {
    nik: "3201011234567890", // Contoh NIK (16 digit)
    firstName: "Komarudin",
    lastName: "Anshar Rahendra",
    position: "Data Analyst",
    joinDate: "2024-09-01"
};

const { nik, firstName, lastName, position, joinDate } = employeeData;

// --- 1. Validasi NIK ---
// Menampilkan status validasi panjang NIK
console.log("-----------------------------------------");
console.log("Panjang NIK Valid:", nik.length === 16);
console.log("-----------------------------------------");


// --- 2. Generate Email Perusahaan ---
const emailPerusahaan = (firstName.toLowerCase() + "." + lastName.toLowerCase() + "@ciptasolusi.digital");


// --- 3. Ringkasan Data Karyawan ---
console.log("Ringkasan Data Karyawan:");
console.log("NIK               :", nik);
console.log("Nama Lengkap      :", firstName, lastName);
console.log("Posisi            :", position);
console.log("Tanggal Bergabung :", joinDate);
console.log("Email Perusahaan  :", emailPerusahaan);
console.log("-----------------------------------------");