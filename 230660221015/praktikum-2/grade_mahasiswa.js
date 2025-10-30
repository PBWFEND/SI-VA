// Program Penilaian Grade Mahasiswa
// 230660221015

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

// Test cases
let nilaiAndi = 95;
let nilaiBudi = 78;
let nilaiCaca = 55;
let nilaiDeni = 105;
let nilaiEka = 85;
let nilaiFani = 65;
let nilaiGita = 45;

// Tampilkan hasil
console.log("--- Laporan Grade Mahasiswa ---");
console.log(`Mahasiswa Andi (Nilai: ${nilaiAndi}) mendapatkan grade: ${tentukanGrade(nilaiAndi)}`);
console.log(`Mahasiswa Budi (Nilai: ${nilaiBudi}) mendapatkan grade: ${tentukanGrade(nilaiBudi)}`);
console.log(`Mahasiswa Caca (Nilai: ${nilaiCaca}) mendapatkan grade: ${tentukanGrade(nilaiCaca)}`);
console.log(`Mahasiswa Deni (Nilai: ${nilaiDeni}) mendapatkan grade: ${tentukanGrade(nilaiDeni)}`);
console.log(`Mahasiswa Eka (Nilai: ${nilaiEka}) mendapatkan grade: ${tentukanGrade(nilaiEka)}`);
console.log(`Mahasiswa Fani (Nilai: ${nilaiFani}) mendapatkan grade: ${tentukanGrade(nilaiFani)}`);
console.log(`Mahasiswa Gita (Nilai: ${nilaiGita}) mendapatkan grade: ${tentukanGrade(nilaiGita)}`);
console.log("-------------------------------");