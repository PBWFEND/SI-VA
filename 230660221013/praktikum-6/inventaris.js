// ======================================
// Parent Class: Product
// ======================================
class Product {
  #stock; // private field untuk melindungi stok

  constructor(sku, name, price, initialStock = 0) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  // Method untuk menambah stok (pembelian stok baru)
  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok yang ditambahkan harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`Stok ${this.name} berhasil ditambah ${quantity}. Total stok: ${this.#stock}`);
  }

  // Method untuk mengurangi stok (penjualan)
  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah penjualan harus angka positif!");
      return;
    }

    if (quantity > this.#stock) {
      console.log(`Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
      return;
    }

    this.#stock -= quantity;
    console.log(`Berhasil menjual ${quantity} unit ${this.name}. Sisa stok: ${this.#stock}`);
  }

  // Method untuk menampilkan informasi produk dasar
  displayInfo() {
    console.log(`SKU: ${this.sku}`);
    console.log(`Nama: ${this.name}`);
    console.log(`Harga: Rp${this.price}`);
    console.log(`Stok Tersisa: ${this.#stock}`);
  }
}

// ======================================
// Child Class: Book
// ======================================
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    super(sku, name, price, initialStock); // panggil parent constructor
    this.author = author;
  }

  // Override displayInfo
  displayInfo() {
    super.displayInfo(); // tampilkan info dasar dari parent
    console.log(`Penulis: ${this.author}`);
  }
}

// ======================================
// Child Class: Electronic
// ======================================
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  // Override displayInfo
  displayInfo() {
    super.displayInfo();
    console.log(`Garansi: ${this.warrantyMonths} bulan`);
  }
}

// ======================================
// Demonstrasi Penggunaan
// ======================================

// Instance produk biasa (Book)
const buku1 = new Book("BK001", "Pemrograman JavaScript", 120000, 10, "Andi Prasetyo");
console.log("=== DATA BUKU ===");
buku1.displayInfo();
console.log();

// Uji stok
buku1.sell(3);       // jual 3 buku
buku1.addStock(5);   // tambah 5 stok
buku1.sell(20);      // gagal, stok kurang
console.log();

// Instance produk elektronik
const hp1 = new Electronic("EL001", "Smartphone X", 3500000, 5, 24);
console.log("=== DATA ELEKTRONIK ===");
hp1.displayInfo();
console.log();

// Uji stok
hp1.sell(2);
hp1.addStock(3);
hp1.sell(10);
console.log();

// Coba akses langsung stok (harus error jika di-uncomment)
// console.log(hp1.#stock); // ❌ SyntaxError: Private field '#stock' must be declared in an enclosing class
