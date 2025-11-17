/**
 * Soal 1: Kalkulator Grade Nilai
 * Menggunakan Arrow Function dan Percabangan (if/else if/else)
 */

const hitungGrade = (nilai) => {
  // Pengecekan nilai valid pertama
  if (nilai < 0 || nilai > 100) {
    return "Nilai tidak valid";
  }
  
  // Penentuan grade
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else if (nilai >= 60) {
    return "D";
  } else {
    return "E";
  }
};

// --- Uji Coba ---
console.log("--- Soal 1: Grade Nilai ---");
console.log(`Nilai 95: ${hitungGrade(95)}`);   // Output: A
console.log(`Nilai 77: ${hitungGrade(77)}`);   // Output: C
console.log(`Nilai 45: ${hitungGrade(45)}`);   // Output: E
console.log(`Nilai 105: ${hitungGrade(105)}`); // Output: Nilai tidak valid
console.log(`Nilai -10: ${hitungGrade(-10)}`); // Output: Nilai tidak valid