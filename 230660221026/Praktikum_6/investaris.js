class Product {
  #stock;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock >= 0 ? initialStock : 0;
  }

  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok yang ditambahkan harus angka positif!");
      return;
    }
    this.#stock += quantity;
    console.log(`${this.name}: Stok berhasil ditambah ${quantity}. Total: ${this.#stock}`);
  }

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
    console.log(`${this.name}: Terjual ${quantity} item. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`SKU: ${this.sku} | Nama: ${this.name} | Harga: Rp${this.price} | Stok: ${this.#stock}`);
  }
}

// Child Class - Book
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

// Child Class - Electronic
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

// Demonstrasi penggunaan
console.log("\n============================");
console.log("DEMO INVENTARIS TOKO ONLINE");
console.log("============================");

const buku1 = new Book("BK001", "Pemrograman JavaScript", 85000, 10, "Galih Permana Sidik");
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
buku1.sell(20); // stok kurang
console.log();

const elektronik1 = new Electronic("EL001", "Headset Bluetooth", 250000, 15, 12);
elektronik1.displayInfo();
elektronik1.sell(5);
elektronik1.addStock(10);
elektronik1.displayInfo();