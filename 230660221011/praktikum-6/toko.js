// toko.js

// 1. Parent Class: Product
class Product {
  // 3. Encapsulation: stok dibuat private
  #stock = 0;

  // Constructor untuk properti dasar
  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    // Mengatur private field #stock saat objek dibuat
    this.#stock = initialStock > 0 ? initialStock : 0; 
  }

  // Method untuk menambah stok (terkontrol)
  addStock(quantity) {
    if (quantity > 0) {
      this.#stock += quantity;
      console.log(
        `Stok ${this.name} ditambah ${quantity}. Stok baru: ${this.#stock}`
      );
    } else {
      console.log("Kuantitas untuk menambah stok harus positif.");
    }
  }

  // Method untuk menjual (terkontrol dengan validasi)
  sell(quantity) {
    if (quantity <= 0) {
      console.log("Kuantitas penjualan harus positif.");
      return; // Hentikan fungsi
    }

    if (quantity > this.#stock) {
      console.log(
        `Error: Stok ${this.name} tidak mencukupi. Sisa ${this.#stock}.`
      );
    } else {
      this.#stock -= quantity;
      console.log(
        `Berhasil menjual ${this.name} (${quantity} unit). Stok sisa: ${this.#stock}`
      );
    }
  }

  // Method dasar untuk menampilkan info
  displayInfo() {
    console.log(`Info Produk: ${this.name} (SKU: ${this.sku})`);
    console.log(`  - Harga: Rp${this.price}`);
    console.log(`  - Stok : ${this.#stock} unit`); // Stok dibaca lewat method
  }
}

// 2. Child Class: Book (mewarisi Product)
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    // Kirim data ke constructor parent (Product)
    super(sku, name, price, initialStock); 
    this.author = author; // Properti tambahan khusus Book
  }

  // Override method displayInfo
  displayInfo() {
    super.displayInfo(); // Panggil method displayInfo() milik parent
    console.log(`  - Penulis: ${this.author}`); // Tambahkan info spesifik
  }
}

// 2. Child Class: Electronic (mewarisi Product)
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    // Kirim data ke constructor parent (Product)
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths; // Properti tambahan khusus Electronic
  }

  // Override method displayInfo
  displayInfo() {
    super.displayInfo(); // Panggil method displayInfo() milik parent
    console.log(
      `  - Garansi: ${this.warrantyMonths} bulan` // Tambahkan info spesifik
    );
  }
}

// --- Demonstrasi Penggunaan ---

console.log("--- Membuat Objek Produk ---");
const bukuOOP = new Book(
  "BK-001",
  "Belajar OOP JS",
  120000,
  10, // initialStock
  "Pak Dosen" // author
);

const laptop = new Electronic(
  "EL-001",
  "Laptop Gaming",
  15000000,
  5, // initialStock
  12 // warrantyMonths
);

console.log("\n--- Menampilkan Info Awal ---");
bukuOOP.displayInfo();
console.log(""); // Spasi
laptop.displayInfo();

console.log("\n--- Simulasi Transaksi ---");
// Jual buku (sukses)
bukuOOP.sell(2);
// Gagal jual laptop (stok tidak cukup)
laptop.sell(10); 
// Jual laptop (sukses)
laptop.sell(3);
// Tambah stok buku
bukuOOP.addStock(5);
// Gagal jual (input tidak valid)
bukuOOP.sell(-1);

console.log("\n--- Menampilkan Info Akhir ---");
bukuOOP.displayInfo();
console.log(""); // Spasi
laptop.displayInfo();

/*
// (Opsional) Membuktikan Enkapsulasi
// Baris di bawah ini akan menyebabkan ERROR jika di-uncomment,
// karena #stock adalah private.
// bukuOOP.#stock = 99; // Error!
*/