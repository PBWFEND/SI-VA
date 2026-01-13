const hitungGrade = (nilai) => {
  if (typeof nilai !== "number" || isNaN(nilai)) return "Nilai tidak valid";
  if (nilai < 0 || nilai > 100) return "Nilai tidak valid";

  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
};

// Contoh penggunaan / test
console.log(hitungGrade(95));   // A
console.log(hitungGrade(77));   // C
console.log(hitungGrade(105));  // Nilai tidak valid
console.log(hitungGrade("80")); // Nilai tidak valid
