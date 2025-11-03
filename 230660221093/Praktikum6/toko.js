// toko.js

// ==========================
// Parent Class: Product
// ==========================
class Product {
    #stock; // private field untuk stok
  
    constructor(sku, name, price, initialStock) {
      this.sku = sku;
      this.name = name;
      this.price = price;
      this.#stock = initialStock >= 0 ? initialStock : 0; // validasi stok awal
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
        console.log("Jumlah penjualan harus berupa angka positif!");
        return;
      }
      if (quantity > this.#stock) {
        console.log(`❌ Gagal menjual ${quantity} unit ${this.name}. Stok tidak mencukupi!`);
        return;
      }
      this.#stock -= quantity;
      console.log(`✅ Berhasil menjual ${quantity} unit ${this.name}. Sisa stok: ${this.#stock}`);
    }
  
    displayInfo() {
      console.log(`Nama Produk: ${this.name}`);
      console.log(`Harga: Rp${this.price}`);
      console.log(`Stok Tersisa: ${this.#stock}`);
    }
  }
  
  // ==========================
  // Child Class: Book
  // ==========================
  class Book extends Product {
    constructor(sku, name, price, initialStock, author) {
      super(sku, name, price, initialStock);
      this.author = author;
    }
  
    displayInfo() {
      super.displayInfo(); // panggil info dari parent
      console.log(`Penulis: ${this.author}`);
      console.log("---------------------------");
    }
  }
  
  // ==========================
  // Child Class: Electronic
  // ==========================
  class Electronic extends Product {
    constructor(sku, name, price, initialStock, warrantyMonths) {
      super(sku, name, price, initialStock);
      this.warrantyMonths = warrantyMonths;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Garansi: ${this.warrantyMonths} bulan`);
      console.log("---------------------------");
    }
  }
  
  // ==========================
  // Demonstrasi Penggunaan
  // ==========================
  
  // Produk Buku
  const buku1 = new Book("BK001", "Pemrograman JavaScript", 85000, 10, "Azky aulia");
  buku1.displayInfo();
  buku1.sell(3);
  buku1.addStock(5);
  buku1.sell(20); // stok tidak cukup
  buku1.displayInfo();
  
  // Produk Elektronik
  const laptop = new Electronic("EL001", "Laptop ASUS", 8500000, 5, 24);
  laptop.displayInfo();
  laptop.sell(2);
  laptop.addStock(3);
  laptop.displayInfo();
  
  // Bukti enkapsulasi (akan error jika di-uncomment)
  // console.log(laptop.#stock); // ❌ Error: Private field '#stock' must be declared in an enclosing class
  