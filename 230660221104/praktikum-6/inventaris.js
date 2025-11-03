// inventaris.js

// Parent Class: Product
class Product {
  #stock; // private field

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
    console.log(`Stok ${this.name} bertambah ${quantity}. Total stok: ${this.#stock}`);
  }

  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan harus angka positif!");
      return;
    }
    if (quantity > this.#stock) {
      console.log(`Gagal menjual ${this.name}: stok tidak cukup!`);
      return;
    }
    this.#stock -= quantity;
    console.log(`Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`Produk: ${this.name} | Harga: Rp${this.price} | Stok: ${this.#stock}`);
  }
}

// Child Class: Book
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

// Child Class: Electronic
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

// --- Demonstrasi penggunaan ---

const buku1 = new Book("BK001", "Belajar JavaScript", 75000, 10, "Elangga Yudistira");
const laptop1 = new Electronic("EL001", "Laptop Acer", 8500000, 5, 24);

console.log("=== DATA PRODUK ===");
buku1.displayInfo();
console.log();
laptop1.displayInfo();

console.log("\n=== TRANSAKSI ===");
buku1.sell(2);
buku1.addStock(5);
buku1.sell(20); // stok tidak cukup

laptop1.sell(1);
laptop1.addStock(2);
laptop1.sell(10); // stok tidak cukup

console.log("\n=== CEK AKHIR ===");
buku1.displayInfo();
laptop1.displayInfo();
