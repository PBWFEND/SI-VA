/*
 * File: kampus.js
 * Studi Kasus 6: Inheritance & Encapsulation
 *
 * Class Orang (Parent)
 * Class Mahasiswa (Child)
 */

// 1. Buat class Orang (Parent Class)
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    sapa() {
        console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
    }
}



// 2. Refactor class Mahasiswa agar mewarisi Orang (Child Class)
class Mahasiswa extends Orang {
    
    // 3. Tambahkan private field #sks
    // Tanda # ini adalah sintaks JavaScript modern untuk enkapsulasi sejati.
    // Properti ini TIDAK BISA diakses dari luar scope kelas.
    #sks = 0; 

    constructor(nama, umur) {
        // 4. Panggil super() untuk meneruskan parameter ke constructor Orang
        // Ini WAJIB dilakukan sebelum menggunakan 'this'
        super(nama, umur);
    }

    // 5. Buat method ambilSKS(jumlah)
    ambilSKS(jumlah) {
        // Validasi: jumlah harus angka (number) dan lebih besar dari 0 (positif)
        if (typeof jumlah === 'number' && jumlah > 0) {
            this.#sks += jumlah; // Mengakses private field dari dalam kelas
            console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
        } else {
            console.log("Jumlah SKS harus angka positif!");
        }
    }

    // 6. Buat method lihatSKS()
    lihatSKS() {
        // 'this.nama' diwarisi dari Orang
        // 'this.#sks' adalah private field milik Mahasiswa
        console.log(`Total SKS ${this.nama}: ${this.#sks}`);
    }
}


// ---------------------------------------------
// 7. Buat demonstrasi penggunaan
// ---------------------------------------------

console.log("--- Demonstrasi Orang ---");
// Buat 1 instance Orang
const budi = new Orang("Budi", 25);
budi.sapa(); // Memanggil method milik Orang

console.log("\n--- Demonstrasi Mahasiswa ---");
// Buat 1 instance Mahasiswa (Amelia Putri Latifah)
const amelia = new Mahasiswa("Amelia Putri Latifah", 21);

// Panggil sapa() (method ini diwarisi dari Orang)
amelia.sapa();

// Panggil ambilSKS() beberapa kali (input valid)
amelia.ambilSKS(3);
amelia.ambilSKS(4);

// Panggil lihatSKS()
amelia.lihatSKS();

// Panggil ambilSKS() dengan input tidak valid
console.log("\n--- Uji Coba Input Tidak Valid ---");
amelia.ambilSKS(-2);      // Input tidak valid (negatif)
amelia.ambilSKS("tiga"); // Input tidak valid (bukan angka)


// (Opsional) Bukti Enkapsulasi: Coba akses langsung #sks
console.log("\n--- Uji Coba Enkapsulasi (Terbukti Error) ---");

// Baris di bawah ini sengaja dinonaktifkan (dikomentari).
// Jika komentarnya dibuka (uncomment), program akan crash dengan 'SyntaxError'.
// Ini MEMBUKTIKAN bahwa #sks adalah private dan tidak bisa diakses dari luar.

// console.log(amelia.#sks); 

console.log("Error (SyntaxError) membuktikan enkapsulasi #sks berhasil.");

// Program bisa berlanjut karena baris error sudah dikomentari
amelia.lihatSKS();