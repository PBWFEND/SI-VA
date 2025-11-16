// Arrow function untuk menghitung grade
const hitungGrade = (nilai) => {
  // Validasi nilai
  if (nilai < 0 || nilai > 100) return "Nilai tidak valid";
  // Logika penentuan grade
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  // Jika kurang dari 60
  return "E";
};

// Contoh output
console.log(hitungGrade(95));  // Output: A
console.log(hitungGrade(77));  // Output: C
console.log(hitungGrade(105)); // Output: Nilai tidak valid
