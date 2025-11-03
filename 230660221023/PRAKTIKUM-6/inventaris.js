// 1. Buat Parent Class bernama Product
class Product {
  // Terapkan Encapsulation pada properti stok
  #stock = 0;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    // Inisialisasi stok privat, pastikan tidak negatif
    this.#stock = Math.max(0, initialStock); 
  }

  // Method untuk menambah stok
  addStock(quantity) {
    if (typeof quantity !== 'number' || quantity <= 0) {
      console.log("[INFO] Jumlah penambahan stok harus angka positif.");
      return;
    }
    this.#stock += quantity;
    console.log(`[INFO] Stok ${this.name} bertambah ${quantity}. Stok baru: ${this.#stock}`);
  }

  // Method untuk mengurangi stok (menjual)
  sell(quantity) {
    if (typeof quantity !== 'number' || quantity <= 0) {
      console.log(`[SELL] Jumlah penjualan ${this.name} harus angka positif.`);
      return;
    }

    // Validasi: jika quantity lebih besar dari #stock
    if (quantity > this.#stock) {
      console.log(`[SELL GAGAL] Stok ${this.name} tidak mencukupi. Tersisa: ${this.#stock}`);
    } else {
      this.#stock -= quantity;
      console.log(`[SELL SUKSES] ${quantity} unit ${this.name} terjual. Stok tersisa: ${this.#stock}`);
    }
  }

  // Method untuk mencetak info dasar
  displayInfo() {
    console.log(`  Nama  : ${this.name}`);
    console.log(`  Harga : Rp${this.price.toLocaleString('id-ID')}`);
    console.log(`  Stok  : ${this.#stock}`);
  }
}

// 2. Buat Child Class bernama Book
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    // Panggil super() untuk mengirim data ke Product
    super(sku, name, price, initialStock);
    this.author = author;
  }

  // Override method displayInfo
  displayInfo() {
    console.log("--- Detail Produk (Buku) ---");
    // Panggil method displayInfo() dari parent
    super.displayInfo();
    // Tambahkan info spesifik Book
    console.log(`  Penulis: ${this.author}`);
  }
}

// 3. Buat Child Class bernama Electronic
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    // Panggil super()
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  // Override method displayInfo
  displayInfo() {
    console.log("--- Detail Produk (Elektronik) ---");
    // Panggil method displayInfo() dari parent
    super.displayInfo();
    // Tambahkan info spesifik Electronic
    console.log(`  Garansi: ${this.warrantyMonths} bulan`);
  }
}


// --- Demonstrasi Penggunaan (inventaris.js) ---

console.log("===== DEMO INVENTARIS TOKO =====");

// Membuat instance Buku
const bukuOOP = new Book("BK-001", "Dasar-Dasar OOP", 110000, 10, "Prof. Java");
bukuOOP.displayInfo();

console.log(""); // Spasi

// Membuat instance Elektronik
const laptop = new Electronic("EL-001", "Laptop Gaming Pro", 15000000, 5, 24);
laptop.displayInfo();

console.log("\n===== DEMO PENJUALAN & STOK =====");
// Skenario penjualan buku
bukuOOP.sell(3); // Sukses
bukuOOP.sell(10); // Gagal (stok sisa 7)
bukuOOP.addStock(8); // Stok jadi 15
bukuOOP.sell(10); // Sukses (stok sisa 5)
bukuOOP.displayInfo();

console.log(""); // Spasi

// Skenario penjualan laptop
laptop.sell(1);
laptop.sell(1);
laptop.sell(4); // Gagal (stok sisa 3)
laptop.displayInfo();