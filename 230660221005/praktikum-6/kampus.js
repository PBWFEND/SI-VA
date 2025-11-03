// ===============================
// Studi Kasus 1: Inheritance & Encapsulation
// ===============================

// Parent Class: Orang
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  sapa() {
    console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  }
}

// Child Class: Mahasiswa
class Mahasiswa extends Orang {
  #sks = 0; // private field

  constructor(nama, umur) {
    super(nama, umur); // panggil constructor parent
  }

  ambilSKS(jumlah) {
    if (typeof jumlah !== "number" || jumlah <= 0) {
      console.log("Jumlah SKS harus angka positif!");
      return;
    }

    this.#sks += jumlah;
    console.log(`${this.nama} berhasil mengambil ${jumlah} SKS. Total SKS: ${this.#sks}`);
  }

  lihatSKS() {
    console.log(`Total SKS ${this.nama}: ${this.#sks}`);
  }
}

// ===============================
// Demonstrasi Penggunaan
// ===============================

// Instance dari Orang
const orang1 = new Orang("Budi", 25);
orang1.sapa();

console.log(""); // pemisah output

// Instance dari Mahasiswa
const mhs1 = new Mahasiswa("Andi", 20);
mhs1.sapa();
mhs1.ambilSKS(3);
mhs1.ambilSKS(4);
mhs1.lihatSKS();
mhs1.ambilSKS(-2); // invalid
mhs1.ambilSKS("lima"); // invalid

// (Opsional) Bukti enkapsulasi
try {
  // console.log(mhs1.#sks); // ❌ JANGAN AKSES PRIVATE FIELD LANGSUNG
} catch (err) {
  console.log("Error akses langsung #sks:", err.message);
}


// ===============================
// Studi Kasus 2: Sistem Inventaris Toko Online
// ===============================

class Product {
  #stock; // private field untuk enkapsulasi

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock >= 0 ? initialStock : 0;
  }

  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`✅ Stok ${this.name} bertambah ${quantity}. Total stok: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan harus angka positif!");
      return;
    }

    if (quantity > this.#stock) {
      console.log(`❌ Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
      return;
    }

    this.#stock -= quantity;
    console.log(`🛒 Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`📦 Produk: ${this.name} | Harga: Rp${this.price} | Stok tersisa: ${this.#stock}`);
  }
}

// ===============================
// Child Class: Book
// ===============================
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`✍️ Penulis: ${this.author}`);
  }
}

// ===============================
// Child Class: Electronic
// ===============================
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`🕒 Garansi: ${this.warrantyMonths} bulan`);
  }
}

// ===============================
// Demonstrasi Penggunaan
// ===============================

console.log("\n===== SISTEM INVENTARIS TOKO ONLINE =====");

// Produk Buku
const buku1 = new Book("B001", "Pemrograman JavaScript", 75000, 10, "Clara Desmiati");
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
buku1.sell(20); // stok tidak cukup

console.log("");

// Produk Elektronik
const laptop = new Electronic("E001", "Laptop Acer Aspire", 8500000, 5, 24);
laptop.displayInfo();
laptop.sell(2);
laptop.addStock(3);
laptop.sell(10); // stok tidak cukup
