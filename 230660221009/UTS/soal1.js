// soal1.js
// Soal 1 – Kalkulator Grade Nilai

// Arrow function untuk menghitung grade
const hitungGrade = (nilai) => {
  if (nilai < 0 || nilai > 100) {
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

// Contoh pengujian
console.log(hitungGrade(95));  // Output: A
console.log(hitungGrade(77));  // Output: C
console.log(hitungGrade(105)); // Output: Nilai tidak valid
console.log(hitungGrade(50));  // Output: E