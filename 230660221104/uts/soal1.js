// soal1.js
// Kalkulator Grade Nilai

const hitungGrade = (nilai) => {
  if (nilai < 0 || nilai > 100) return "Nilai tidak valid";
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
};

console.log("Grade 95:", hitungGrade(95));
console.log("Grade 77:", hitungGrade(77));
console.log("Grade 105:", hitungGrade(105));