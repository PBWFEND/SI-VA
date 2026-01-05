// soal1.js

const hitungGrade = (nilai) => {
  // 1. Cek nilai tidak valid dulu
  if (nilai < 0 || nilai > 100) {
    return "Nilai tidak valid";
  } 
  // 2. Cek dari grade tertinggi
  else if (nilai >= 90) {
    return "A";
  } 
  else if (nilai >= 80) {
    return "B";
  } 
  else if (nilai >= 70) {
    return "C";
  } 
  else if (nilai >= 60) {
    return "D";
  } 
  // 3. Sisanya pasti E
  else {
    return "E";
  }
};

// --- Uji Coba ---
console.log(hitungGrade(95));   // Output: A
console.log(hitungGrade(77));   // Output: C
console.log(hitungGrade(50));   // Output: E
console.log(hitungGrade(105));  // Output: Nilai tidak valid
console.log(hitungGrade(-5));   // Output: Nilai tidak valid