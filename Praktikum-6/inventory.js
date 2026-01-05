// =======================================
// 1. Parent Class: Product
// =======================================
class Product {
  #stock; // Private field untuk enkapsulasi

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock; // hanya bisa diubah lewat method khusus
  }

  // Menambah stok
  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok yang ditambahkan harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(
      `Stok "${this.name}" bertambah ${quantity}. Total stok: ${this.#stock}`
    );
  }

  // Mengurangi stok saat penjualan
  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan harus angka positif!");
      return;
    }

    if (quantity > this.#stock) {
      console.log(
        `Penjualan gagal! Stok "${this.name}" tidak mencukupi. Sisa stok: ${this.#stock}`
      );
      return;
    }

    this.#stock -= quantity;
    console.log(
      `Berhasil menjual ${quantity} unit "${this.name}". Sisa stok: ${this.#stock}`
    );
  }

  // Menampilkan info dasar produk
  displayInfo() {
    console.log(`Produk: ${this.name}`);
    console.log(`Harga: Rp ${this.price}`);
    console.log(`Stok Tersisa: ${this.#stock}`);
  }
}

// =======================================
// 2. Child Class: Book
// =======================================
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock);
    this.author = author;
  }

  // Override displayInfo()
  displayInfo() {
    super.displayInfo();
    console.log(`Penulis: ${this.author}`);
  }
}

// =======================================
// 3. Child Class: Electronic
// =======================================
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  // Override displayInfo()
  displayInfo() {
    super.displayInfo();
    console.log(`Garansi: ${this.warrantyMonths} bulan`);
  }
}

// =======================================
// 4. Demonstrasi Penggunaan
// =======================================

// Produk Buku
const buku1 = new Book("BK001", "JavaScript Dasar", 120000, 10, "Andi Wijaya");

console.log("\n=== INFO BUKU ===");
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
buku1.sell(20); // stok tidak cukup

// Produk Elektronik
const laptop = new Electronic(
  "EL001",
  "Laptop Pro X",
  8500000,
  3,
  24
);

console.log("\n=== INFO ELEKTRONIK ===");
laptop.displayInfo();
laptop.sell(1);
laptop.sell(5); // stok tidak cukup
laptop.addStock(10);
