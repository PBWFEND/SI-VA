// inventaris.js

// === Parent Class ===
class Product {
  #stock;

  constructor(sku, name, price, initialStock = 0) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok yang ditambahkan harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`✅ ${quantity} stok ${this.name} ditambahkan. Total stok: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan harus angka positif!");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`❌ Penjualan gagal! Stok ${this.name} tidak cukup.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`💰 ${quantity} ${this.name} terjual. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`📦 Produk: ${this.name} | Harga: Rp${this.price} | Stok: ${this.#stock}`);
  }
}

// === Child Class: Book ===
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

// === Child Class: Electronic ===
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`🧾 Garansi: ${this.warrantyMonths} bulan`);
  }
}

// === Demonstrasi ===
console.log("=== Sistem Inventaris Toko ===\n");

const buku1 = new Book("B001", "Belajar JavaScript", 85000, 10, "Andi Prasetyo");
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
buku1.displayInfo();

console.log("\n------------------------\n");

const laptop = new Electronic("E001", "Laptop ASUS ROG", 15000000, 5, 24);
laptop.displayInfo();
laptop.sell(2);
laptop.sell(10); // stok tidak cukup
laptop.addStock(3);
laptop.displayInfo();
