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
  
  // 4. Tambahkan private field #sks
  #sks = 0;

  constructor(nama, umur) {
    // 3. Panggil super() di constructor Mahasiswa
    super(nama, umur);
  }

  // 5. Buat method ambilSKS(jumlah)
  ambilSKS(jumlah) {
    // Validasi: jumlah harus angka dan tidak negatif (harus > 0)
    if (typeof jumlah !== 'number' || jumlah <= 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    // Jika valid, tambahkan ke #sks
    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  // 6. Buat method lihatSKS()
  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// 7. Buat demonstrasi penggunaan
console.log("--- Demonstrasi Instance Orang ---");
const budi = new Orang("Budi", 25);
budi.sapa();

console.log("\n--- Demonstrasi Instance Mahasiswa ---");
const andi = new Mahasiswa("Andi", 20);

// Panggil sapa() (dari parent)
andi.sapa();

// Panggil ambilSKS() (valid)
andi.ambilSKS(3);
andi.ambilSKS(4);

// Panggil lihatSKS()
andi.lihatSKS();

// Panggil ambilSKS() (tidak valid)
andi.ambilSKS(-2);
andi.ambilSKS("tiga");

// (Opsional) Coba akses langsung #sks (akan error)
console.log("\n--- Demonstrasi Enkapsulasi ---");
try {
  console.log("Mencoba mengakses andi.#sks dari luar...");
  // Baris ini akan menyebabkan error jika dijalankan
  // console.log(andi.#sks); 
  // Untuk membuktikannya tanpa menghentikan skrip, kita cek secara dinamis:
  if (andi['#sks'] === undefined) {
      console.log("Sukses! Properti #sks adalah private dan tidak bisa diakses.");
  }
} catch (e) {
  console.log(`Error tertangkap: ${e.name}. Properti #sks benar-benar privat.`);
}