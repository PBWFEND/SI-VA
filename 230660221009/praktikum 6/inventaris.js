// ============================
// Parent Class: Product
// ============================
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
      console.log("❌ Jumlah stok yang ditambahkan harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`✅ Stok ${this.name} bertambah ${quantity}. Total sekarang: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("❌ Jumlah penjualan harus angka positif!");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`⚠️ Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`💰 Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`📦 Produk: ${this.name}`);
    console.log(`💲 Harga: Rp${this.price}`);
    console.log(`📊 Stok tersisa: ${this.#stock}`);
  }
}

// ============================
// Child Class: Book
// ============================
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock); // panggil constructor Product
    this.author = author;
  }

  // override displayInfo()
  displayInfo() {
    super.displayInfo();
    console.log(`✍️ Penulis: ${this.author}`);
  }
}

// ============================
// Child Class: Electronic
// ============================
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  // override displayInfo()
  displayInfo() {
    super.displayInfo();
    console.log(`🕒 Garansi: ${this.warrantyMonths} bulan`);
  }
}

// ============================
// DEMONSTRASI PENGGUNAAN
// ============================

// Membuat produk Buku
const buku1 = new Book("BK001", "Pemrograman JavaScript", 75000, 10, "Ade Yusup Maulana");
console.log("=== Data Buku ===");
buku1.displayInfo();
buku1.sell(2);
buku1.addStock(5);
buku1.sell(20); // stok tidak cukup
console.log("");

// Membuat produk Elektronik
const hp1 = new Electronic("EL001", "Smartphone Zeta", 3500000, 5, 12);
console.log("=== Data Elektronik ===");
hp1.displayInfo();
hp1.sell(1);
hp1.addStock(3);
hp1.sell(10); // stok tidak cukup
console.log("");

// Tes enkapsulasi (akses langsung #stock → gagal)
console.log("=== Tes Enkapsulasi ===");
try {
  // Gunakan eval agar tidak menyebabkan syntax error langsung
  eval("console.log(hp1.#stock)");
} catch (error) {
  console.log("❌ Tidak bisa mengakses #stock secara langsung!");
  console.log("Pesan error:", error.message);
}
