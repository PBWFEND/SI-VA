/**
 * Soal 1 – Kalkulator Grade Nilai
 * Menggunakan arrow function dan template literals.
 */

const hitungGrade = (nilai) => {
  if (nilai >= 90 && nilai <= 100) {
    return 'A';
  } else if (nilai >= 80 && nilai <= 89) {
    return 'B';
  } else if (nilai >= 70 && nilai <= 79) {
    return 'C';
  } else if (nilai >= 60 && nilai <= 69) {
    return 'D';
  } else if (nilai >= 0 && nilai <= 59) {
    return 'E';
  } else {
    return 'Nilai tidak valid';
  }
};

// --- Contoh Penggunaan ---
console.log(`Nilai 95 mendapatkan grade: ${hitungGrade(95)}`); // Output: A
console.log(`Nilai 77 mendapatkan grade: ${hitungGrade(77)}`); // Output: C
console.log(`Nilai 50 mendapatkan grade: ${hitungGrade(50)}`); // Output: E
console.log(`Nilai 105 mendapatkan grade: ${hitungGrade(105)}`); // Output: Nilai tidak valid
console.log(`Nilai -10 mendapatkan grade: ${hitungGrade(-10)}`); // Output: Nilai tidak valid