/**
 * Arrow function untuk menghitung grade huruf berdasarkan nilai.
 * @param {number} nilai - Nilai angka yang akan dihitung gradenya.
 * @returns {string} - Grade huruf (A, B, C, D, E) atau pesan "Nilai tidak valid".
 */
const hitungGrade = (nilai) => {
  // 1. Validasi rentang nilai (0-100)
  if (typeof nilai !== "number" || nilai < 0 || nilai > 100) {
    return "Nilai tidak valid";
  }

  // 2. Penentuan Grade
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    // 80 - 89
    return "B";
  } else if (nilai >= 70) {
    // 70 - 79
    return "C";
  } else if (nilai >= 60) {
    // 60 - 69
    return "D";
  } else {
    // 105 - 150
    return "E";
  }
};

// --- Contoh Penggunaan dan Output ---
console.log(hitungGrade(95)); // Output: A
console.log(hitungGrade(77)); // Output: C
console.log(hitungGrade(80)); // Output: B
console.log(hitungGrade(65)); // Output: D
console.log(hitungGrade(105)); // Output: Nilai tidak valid
console.log(hitungGrade(29)); // Output: E
console.log(hitungGrade(105)); // Output: Nilai tidak valid
// console.log(hitungGrade("abc")); // Output: Nilai tidak valid (jika diaktifkan)
