// kampus.js

// Class Orang
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}

// Class Mahasiswa yang mewarisi Orang
class Mahasiswa extends Orang {
    #sks; // Private field

    constructor(nama, umur) {
        super(nama, umur); // Panggil constructor parent
        this.#sks = 0; // Inisialisasi private field
    }

    ambilSKS(jumlah) {
        // Validasi input
        if (typeof jumlah !== 'number' || jumlah <= 0 || !Number.isInteger(jumlah)) {
            console.log("Jumlah SKS harus angka positif!");
            return;
        }

        // Tambahkan SKS
        this.#sks += jumlah;
        console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
    }

    lihatSKS() {
        console.log(`Total SKS ${this.nama}: ${this.#sks}`);
    }
}

// Demonstrasi penggunaan
console.log("=== DEMONSTRASI PENGGUNAAN ===\n");

// 1. Buat instance Orang dan panggil sapa()
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log(); // Spasi

// 2. Buat instance Mahasiswa
const mahasiswa1 = new Mahasiswa("Andi", 20);

// Panggil sapa() dari parent class
mahasiswa1.sapa();

// Panggil ambilSKS() beberapa kali
mahasiswa1.ambilSKS(3);  // Valid
mahasiswa1.ambilSKS(4);  // Valid
mahasiswa1.ambilSKS(-2); // Tidak valid
mahasiswa1.ambilSKS("abc"); // Tidak valid
mahasiswa1.ambilSKS(2.5); // Tidak valid (bukan integer)

// Panggil lihatSKS()
mahasiswa1.lihatSKS();

console.log(); // Spasi

// 3. Coba akses langsung #sks dari luar (harus error)
console.log("=== COBA AKSES PRIVATE FIELD ===");
console.log("Mencoba mengakses mahasiswa1.#sks secara langsung...");

// Cara yang lebih aman untuk menunjukkan error tanpa menghentikan program
try {
    // Ini akan menyebabkan SyntaxError saat parsing, jadi kita gunakan eval dengan hati-hati
    const result = eval('mahasiswa1.#sks');
    console.log("Nilai #sks:", result);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log("✓ Private field #sks berhasil dilindungi!");
        console.log("Error:", error.message);
    } else {
        console.log("Error lain:", error.message);
    }
}

// Alternatif: coba akses melalui cara lain
console.log("\nMencoba akses melalui properti biasa:");
console.log("mahasiswa1.sks:", mahasiswa1.sks); // undefined, karena #sks berbeda dengan sks
console.log("mahasiswa1.nama:", mahasiswa1.nama); // bisa diakses karena public

console.log("\n=== PROGRAM SELESAI ===");