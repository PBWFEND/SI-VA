// grade_mahasiswa.js
/**
 * Fungsi ini menerima skor numerik dan mengembalikan grade huruf.
 * @param {number} skor - Nilai mahasiswa (0-100).
 * @returns {string} - Grade (A, B, C, D, atau E).
 */
function tentukanGrade(skor) {
  if (skor >= 90 && skor <= 100) {
    return "A (Luar Biasa)";
  } else if (skor >= 80 && skor < 90) {
    return "B (Baik)";
  } else if (skor >= 70 && skor < 80) {
    return "C (Cukup)";
  } else if (skor >= 60 && skor < 70) {
    return "D (Kurang)";
  } else if (skor >= 0 && skor < 60) {
    return "E (Gagal)";
  } else {
    return "Skor tidak valid";
  }
}

// --- Uji Coba Fungsi ---
let nilaiAndi = 95;
let nilaiBudi = 78;
let nilaiCaca = 55;
let nilaiDeni = 105;

let gradeAndi = tentukanGrade(nilaiAndi);
let gradeBudi = tentukanGrade(nilaiBudi);
let gradeCaca = tentukanGrade(nilaiCaca);
let gradeDeni = tentukanGrade(nilaiDeni);

console.log("--- Laporan Grade Mahasiswa ---");
console.log(`Mahasiswa Andi (Nilai: ${nilaiAndi}) mendapatkan grade: ${gradeAndi}`);
console.log(`Mahasiswa Budi (Nilai: ${nilaiBudi}) mendapatkan grade: ${gradeBudi}`);
console.log(`Mahasiswa Caca (Nilai: ${nilaiCaca}) mendapatkan grade: ${gradeCaca}`);
console.log(`Mahasiswa Deni (Nilai: ${nilaiDeni}) mendapatkan grade: ${gradeDeni}`);
console.log("-------------------------------");
