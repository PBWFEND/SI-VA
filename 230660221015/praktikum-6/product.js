// product.js

// Parent Class Product
class Product {
    #stock; // Private field untuk enkapsulasi

    constructor(sku, name, price, initialStock) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.#stock = initialStock;
    }

    // Method untuk menambah stok
    addStock(quantity) {
        if (quantity > 0) {
            this.#stock += quantity;
            console.log(`✅ Stok ${this.name} bertambah ${quantity}. Total: ${this.#stock}`);
        } else {
            console.log("❌ Quantity harus lebih dari 0");
        }
    }

    // Method untuk mengurangi stok (penjualan)
    sell(quantity) {
        if (quantity <= 0) {
            console.log("❌ Quantity penjualan harus lebih dari 0");
            return false;
        }
        
        if (quantity > this.#stock) {
            console.log(`❌ Gagal menjual ${this.name}. Stok tidak mencukupi! (Permintaan: ${quantity}, Stok: ${this.#stock})`);
            return false;
        }
        
        this.#stock -= quantity;
        console.log(`✅ Berhasil menjual ${quantity} ${this.name}. Stok tersisa: ${this.#stock}`);
        return true;
    }

    // Method untuk menampilkan info dasar
    displayInfo() {
        console.log(`📦 ${this.name} | Harga: Rp${this.price} | Stok: ${this.#stock} | SKU: ${this.sku}`);
    }

    // Getter untuk mengakses stok (opsional, untuk keperluan internal)
    getStock() {
        return this.#stock;
    }
}

// Child Class Book
class Book extends Product {
    constructor(sku, name, price, initialStock, author) {
        super(sku, name, price, initialStock); // Panggil constructor parent
        this.author = author;
    }

    // Override method displayInfo
    displayInfo() {
        super.displayInfo(); // Panggil method parent
        console.log(`   📚 Penulis: ${this.author}`);
    }
}

// Child Class Electronic
class Electronic extends Product {
    constructor(sku, name, price, initialStock, warrantyMonths) {
        super(sku, name, price, initialStock); // Panggil constructor parent
        this.warrantyMonths = warrantyMonths;
    }

    // Override method displayInfo
    displayInfo() {
        super.displayInfo(); // Panggil method parent
        console.log(`   🔧 Garansi: ${this.warrantyMonths} bulan`);
    }
}

// Demonstrasi penggunaan
console.log("=== DEMONSTRASI SISTEM PRODUCT ===\n");

// 1. Membuat instance Book
console.log("1. MEMBUAT BUKU:");
const book1 = new Book("BK001", "Pemrograman JavaScript", 150000, 10, "John Doe");
book1.displayInfo();

console.log("\n2. MEMBUAT ELEKTRONIK:");
const electronic1 = new Electronic("EL001", "Smartphone", 2500000, 5, 12);
electronic1.displayInfo();

console.log("\n3. TEST PENAMBAHAN STOK:");
book1.addStock(5);
electronic1.addStock(3);

console.log("\n4. TEST PENJUALAN:");
book1.sell(3);      // Berhasil
book1.sell(20);     // Gagal (stok tidak cukup)
electronic1.sell(2); // Berhasil
electronic1.sell(0); // Gagal (quantity invalid)

console.log("\n5. INFO TERBARU SETELAH TRANSAKSI:");
book1.displayInfo();
electronic1.displayInfo();

console.log("\n6. TEST ENKAPSULASI PRIVATE FIELD:");
console.log("Mencoba akses langsung ke #stock...");
try {
    // console.log(book1.#stock); // Ini akan error
    console.log("❌ book1.#stock:", "Tidak bisa diakses (Private field)");
} catch (error) {
    console.log("✅ Private field #stock berhasil dilindungi!");
}

// Menggunakan getter jika ada
console.log("Menggunakan getter (jika tersedia):");
console.log("book1.getStock():", book1.getStock());

console.log("\n7. TEST PENJUALAN BATAS:");
console.log("Mencoba menjual lebih dari stok:");
electronic1.sell(10); // Harus gagal

console.log("\n8. INFO FINAL:");
book1.displayInfo();
electronic1.displayInfo();

// Bonus: Membuat array products
console.log("\n9. MENGGUNAKAN ARRAY PRODUCTS:");
const products = [
    new Book("BK002", "Clean Code", 200000, 8, "Robert C. Martin"),
    new Electronic("EL002", "Laptop Gaming", 12000000, 3, 24),
    new Book("BK003", "Design Patterns", 180000, 5, "Gang of Four")
];

products.forEach((product, index) => {
    console.log(`\nProduk ${index + 1}:`);
    product.displayInfo();
});

console.log("\n=== PROGRAM SELESAI ===");