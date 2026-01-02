// File: inventaris.js

/**
 * Parent Class: Product
 * Mengimplementasikan properti dasar dan enkapsulasi pada stok.
 */
class Product {
  // Private field untuk stok (Encapsulation)
  #stock;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock >= 0 ? initialStock : 0; // Pastikan stok awal tidak negatif
  }

  /**
   * Menambah stok.
   */
  addStock(quantity) {
    if (typeof quantity === "number" && quantity > 0) {
      this.#stock += quantity;
      console.log(
        `[PEMBELIAN] ${this.name}: Stok bertambah ${quantity}. Stok saat ini: ${
          this.#stock
        }`
      );
    } else {
      console.log(
        `[ERROR] Quantity untuk penambahan stok harus angka positif.`
      );
    }
  }

  /**
   * Mengurangi stok (Penjualan) dengan validasi.
   */
  sell(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      console.log(`[ERROR] Quantity untuk penjualan harus angka positif.`);
      return false;
    }

    if (quantity > this.#stock) {
      console.log(
        `[ERROR PENJUALAN] Gagal menjual ${quantity} unit ${
          this.name
        }. Stok hanya tersisa ${this.#stock}.`
      );
      return false;
    }

    this.#stock -= quantity;
    console.log(
      `[PENJUALAN] Berhasil menjual ${quantity} unit ${
        this.name
      }. Stok tersisa: ${this.#stock}`
    );
    return true;
  }

  /**
   * Menampilkan informasi dasar produk.
   */
  displayInfo() {
    console.log(`--- Info Produk: ${this.name} ---`);
    console.log(`SKU: ${this.sku}`);
    console.log(`Harga: Rp ${this.price.toLocaleString("id-ID")}`);
    console.log(`Stok Tersisa: ${this.#stock} unit`);
  }
}

/**
 * Child Class: Book
 * Menambahkan properti 'author'.
 * Meng-override displayInfo().
 */
class Book extends Product {
  constructor(sku, name, price, initialStock, author) {
    // Panggil constructor parent
    super(sku, name, price, initialStock);
    this.author = author;
  }

  /**
   * Override displayInfo() untuk menampilkan info penulis.
   */
  displayInfo() {
    // Panggil method displayInfo() dari parent
    super.displayInfo();
    console.log(`Penulis: ${this.author}`);
  }
}

/**
 * Child Class: Electronic
 * Menambahkan properti 'warrantyMonths'.
 * Meng-override displayInfo().
 */
class Electronic extends Product {
  constructor(sku, name, price, initialStock, warrantyMonths) {
    // Panggil constructor parent
    super(sku, name, price, initialStock);
    this.warrantyMonths = warrantyMonths;
  }

  /**
   * Override displayInfo() untuk menampilkan info garansi.
   */
  displayInfo() {
    // Panggil method displayInfo() dari parent
    super.displayInfo();
    console.log(`Masa Garansi: ${this.warrantyMonths} bulan`);
  }
}

// --- Demonstrasi Penggunaan ---
console.log("=========================================");
console.log("     Sistem Manajemen Inventaris Toko    ");
console.log("=========================================");

const bukuFilsafat = new Book(
  "B001",
  "Filsafat Dasar",
  150000,
  10,
  "Ria Santoso"
);
const laptopGaming = new Electronic(
  "E005",
  "Laptop Gaming X1",
  15000000,
  3,
  12
);

// 1. Aksi pada Buku
bukuFilsafat.displayInfo(); // Stok: 10
bukuFilsafat.sell(2); // Jual 2, Stok: 8
bukuFilsafat.addStock(5); // Tambah 5, Stok: 13
bukuFilsafat.sell(20); // Penjualan gagal (validasi stok)

console.log("\n-----------------------------------------");

// 2. Aksi pada Elektronik
laptopGaming.displayInfo(); // Stok: 3
laptopGaming.sell(1); // Jual 1, Stok: 2
laptopGaming.addStock(10); // Tambah 10, Stok: 12

console.log("\n--- Ringkasan Akhir ---");
bukuFilsafat.displayInfo();
laptopGaming.displayInfo();

// (Opsional) Coba akses langsung private field #stock (akan error)
// try {
//     console.log(bukuFilsafat.#stock);
// } catch (error) {
//     console.log("\n[Error Enkapsulasi]: Tidak bisa mengakses #stock secara langsung.");
// }

/*
Untuk menjalankan kode ini, simpan sebagai inventaris.js dan jalankan di terminal:
node inventaris.js
*/
