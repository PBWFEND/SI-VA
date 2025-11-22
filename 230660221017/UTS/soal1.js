// Fungsi panah untuk menentukan grade berdasarkan nilai
const tentukanGrade = (angka) => {
  // Cek validitas nilai
  if (angka < 0 || angka > 100) return "Nilai tidak valid";

  // Penentuan grade sesuai rentang nilai
  if (angka >= 90) return "A";
  if (angka >= 80) return "B";
  if (angka >= 70) return "C";
  if (angka >= 60) return "D";

  // Jika nilai di bawah 60
  return "E";
};

// Contoh penggunaan
console.log(tentukanGrade(95));   // A
console.log(tentukanGrade(77));   // C
console.log(tentukanGrade(105));  // Nilai tidak valid
