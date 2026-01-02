class Product {
  #stock = 0;
  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock >= 0 ? initialStock : 0;
  }
  addStock(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log("Jumlah stok yang ditambahkan harus berupa angka positif!");
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
      console.log(`Penjualan gagal! Stok ${this.name} tidak mencukupi.`);
      return;
    }
    this.#stock -= quantity;
    console.log(`${this.name} terjual ${quantity} unit. Sisa stok: ${this.#stock}`);
  }
  displayInfo() {
    console.log(`SKU: ${this.sku}`);
    console.log(`Nama Produk: ${this.name}`);
    console.log(`Harga: Rp${this.price}`);
    console.log(`Stok Tersisa: ${this.#stock}`);
  }
}

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

const buku1 = new Book("BK001", "Pemrograman JavaScript", 85000, 10, "Hilman");
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);
buku1.sell(20);
console.log();

const hp = new Electronic("EL001", "Smartphone X", 3500000, 5, 24);
hp.displayInfo();
hp.sell(2);
hp.addStock(4);
hp.sell(10);
