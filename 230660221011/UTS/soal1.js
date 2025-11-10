/**
 * Soal 1: Kalkulator Grade Nilai
 */

const hitungGrade = (nilai) => {
  if (nilai > 100 || nilai < 0) {
    return "Nilai tidak valid";
  } else if (nilai >= 90) {
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

// Menampilkan hasil sesuai contoh
console.log(`Nilai 95 mendapatkan grade: ${hitungGrade(95)}`);
console.log(`Nilai 77 mendapatkan grade: ${hitungGrade(77)}`);
console.log(`Nilai 105 mendapatkan grade: ${hitungGrade(105)}`);
console.log(`Nilai 45 mendapatkan grade: ${hitungGrade(45)}`);