// inventaris.js

// 1. Parent Class
class Product {
  #stock = 0;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok harus berupa angka positif.");
      return;
    }
    this.#stock += quantity;
    console.log(`Stok ${this.name} berhasil ditambah sebanyak ${quantity}. Total stok sekarang: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan tidak valid.");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`Penjualan gagal. Stok ${this.name} tidak mencukupi.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`${quantity} unit ${this.name} terjual. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`Nama Produk: ${this.name}`);
    console.log(`Harga: Rp${this.price}`);
    console.log(`Stok Tersisa: ${this.#stock}`);
  }
}

// 2. Child Class: Book
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Penulis: ${this.author}`);
  }
}

// 3. Child Class: Electronic
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Garansi: ${this.warrantyMonths} bulan`);
  }
}

// 4. Demonstrasi
console.log("=== SISTEM INVENTARIS TOKO ONLINE ===\n");

const book1 = new Book("BK-001", "Belajar JavaScript", 75000, 10, "Andi Prasetyo");
book1.displayInfo();
book1.sell(3);
book1.addStock(5);
book1.sell(20);
console.log("");

const laptop = new Electronic("EL-101", "Laptop Asus A14", 8500000, 5, 24);
laptop.displayInfo();
laptop.sell(2);
laptop.addStock(3);
laptop.sell(7);
