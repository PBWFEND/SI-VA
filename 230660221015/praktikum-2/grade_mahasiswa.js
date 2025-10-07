// Program Penilaian Grade Mahasiswa
// 230660221015

/**
 * Menentukan grade berdasarkan nilai mahasiswa
 * @param {number} nilai - Nilai mahasiswa (0-100)
 * @returns {string} Grade dan keterangan
 */
function hitungGradeMahasiswa(nilai) {
    // Validasi input
    if (nilai < 0 || nilai > 100) {
        return "Nilai tidak valid";
    }
    
    // Tentukan grade berdasarkan range nilai
    let grade, keterangan;
    
    if (nilai >= 90) {
        grade = "A";
        keterangan = "Luar Biasa";
    } else if (nilai >= 80) {
        grade = "B";
        keterangan = "Baik";
    } else if (nilai >= 70) {
        grade = "C";
        keterangan = "Cukup";
    } else if (nilai >= 60) {
        grade = "D";
        keterangan = "Kurang";
    } else {
        grade = "E";
        keterangan = "Gagal";
    }
    
    return `${grade} (${keterangan})`;
}

// Data mahasiswa untuk testing
const dataMahasiswa = [
    { nama: "Andi", nilai: 95 },
    { nama: "Budi", nilai: 78 },
    { nama: "Caca", nilai: 55 },
    { nama: "Deni", nilai: 105 },
    { nama: "Eka", nilai: 82 }
];

// Tampilkan laporan grade
console.log("=== LAPORAN GRADE MAHASISWA ===");

dataMahasiswa.forEach(mahasiswa => {
    const grade = hitungGradeMahasiswa(mahasiswa.nilai);
    console.log(`Nama    : ${mahasiswa.nama}`);
    console.log(`Nilai   : ${mahasiswa.nilai}`);
    console.log(`Grade   : ${grade}`);
    console.log("-----------------------------");
});

console.log("=== SELESAI ===");

// Export untuk testing (jika diperlukan)
module.exports = hitungGradeMahasiswa;