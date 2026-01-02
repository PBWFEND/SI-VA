/*
 * SOLUSI: Sistem Inventaris Toko Online
 * Fitur: Inheritance, Encapsulation, Method Overriding
 */

// ---------------------------------
// 1. Parent Class: Product
// ---------------------------------
class Product {
    // Menerapkan Encapsulation:
    // Properti #stock bersifat private.
    // Hanya bisa diakses atau diubah MELALUI method (addStock/sell).
    #stock;

    constructor(sku, name, price, initialStock) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        // Mengatur stok awal melalui private field
        // Validasi sederhana agar stok tidak negatif saat pembuatan
        this.#stock = initialStock > 0 ? initialStock : 0;
    }

    /**
     * Menambah stok barang (misalnya: pembelian baru).
     * @param {number} quantity - Jumlah yang ditambahkan.
     */
    addStock(quantity) {
        if (quantity <= 0) {
            console.warn(`[${this.name}] Kuantitas penambahan stok harus lebih dari 0.`);
            return;
        }
        this.#stock += quantity;
        console.log(`[${this.name}] Stok bertambah ${quantity}. Stok baru: ${this.#stock}`);
    }

    /**
     * Mengurangi stok barang (misalnya: penjualan).
     * @param {number} quantity - Jumlah yang dijual.
     */
    sell(quantity) {
        if (quantity <= 0) {
            console.warn(`[${this.name}] Kuantitas penjualan harus lebih dari 0.`);
            return;
        }

        // Validasi stok
        if (quantity > this.#stock) {
            console.error(`Error: Penjualan [${this.name}] gagal. Stok tidak mencukupi.`);
            console.error(`(Stok Tersisa: ${this.#stock}, Diminta: ${quantity})`);
        } else {
            this.#stock -= quantity;
            console.log(`Sukses: ${quantity} unit [${this.name}] terjual. Sisa stok: ${this.#stock}`);
        }
    }

    /**
     * Menampilkan informasi dasar produk.
     */
    displayInfo() {
        console.log(`--- Info Produk ---`);
        console.log(`Nama: ${this.name} (SKU: ${this.sku})`);
        console.log(`Harga: Rp${this.price.toLocaleString('id-ID')}`);
        // Mengakses private field dari dalam class
        console.log(`Stok Tersisa: ${this.#stock}`);
    }
}

// Diagram ini menunjukkan bagaimana Book dan Electronic mewarisi properti dan metode dari Product.


// ---------------------------------
// 2. Child Class: Book
// ---------------------------------
class Book extends Product {
    constructor(sku, name, price, initialStock, author) {
        // Memanggil constructor dari Parent Class (Product)
        super(sku, name, price, initialStock);
        // Menambahkan properti spesifik untuk Book
        this.author = author;
    }

    /**
     * Override: Menampilkan info spesifik untuk Buku.
     */
    displayInfo() {
        // Memanggil method displayInfo() dari parent (Product)
        super.displayInfo();
        // Menambahkan info spesifik Book
        console.log(`Penulis: ${this.author}`);
    }
}

// ---------------------------------
// 3. Child Class: Electronic
// ---------------------------------
class Electronic extends Product {
    constructor(sku, name, price, initialStock, warrantyMonths) {
        // Memanggil constructor dari Parent Class (Product)
        super(sku, name, price, initialStock);
        // Menambahkan properti spesifik untuk Electronic
        this.warrantyMonths = warrantyMonths;
    }

    /**
     * Override: Menampilkan info spesifik untuk Elektronik.
     */
    displayInfo() {
        // Memanggil method displayInfo() dari parent (Product)
        super.displayInfo();
        // Menambahkan info spesifik Electronic
        console.log(`Garansi: ${this.warrantyMonths} bulan`);
    }
}

// ======================================================
// --- CONTOH PENGGUNAAN ---
// ======================================================

console.log("===== Membuat Instance Produk =====");
// --- PERUBAHAN DI SINI ---
// Nama penulis 'Andrea Hirata' diganti menjadi 'Amelia Putri Latifah'
const novel = new Book("B001", "Laskar Pelangi", 120000, 50, "Amelia Putri Latifah");
const laptop = new Electronic("E001", "Laptop Gaming X", 15000000, 10, 24);

novel.displayInfo();
console.log("\n");
laptop.displayInfo();

console.log("\n\n===== Simulasi Transaksi =====");

// 1. Penjualan sukses
console.log("--- Menjual Laptop (Sukses) ---");
laptop.sell(2); // Stok laptop 10, dijual 2. Sisa 8.

// 2. Penjualan gagal (stok tidak cukup)
console.log("\n--- Menjual Laptop (Stok Kurang) ---");
laptop.sell(10); // Stok laptop sisa 8, diminta 10. Gagal.

// 3. Penambahan stok
console.log("\n--- Restock Novel ---");
novel.addStock(20); // Stok novel 50, ditambah 20. Total 70.

// 4. Penjualan setelah restock
console.log("\n--- Menjual Novel (Pasca Restock) ---");
novel.sell(5); // Stok novel 70, dijual 5. Sisa 65.


console.log("\n\n===== Uji Enkapsulasi (Harus Gagal) =====");
// Baris kode di bawah ini akan menyebabkan Error jika "di-uncomment"
// karena kita mencoba mengakses private field #stock dari luar class.

try {
    // laptop.#stock = 999; // SyntaxError: Private field '#stock' must be declared in an enclosing class
    // console.log(laptop.#stock); // SyntaxError
    console.log("Percobaan akses 'laptop.#stock' gagal (Ini adalah perilaku yang benar).");
    console.log("Stok hanya bisa diubah melalui laptop.addStock() atau laptop.sell()");
} catch (e) {
    console.error("Gagal mengakses private field #stock secara langsung:", e.message);
}

// Memeriksa status akhir
console.log("\n\n===== Status Inventaris Akhir =====");
novel.displayInfo();
console.log("\n");
laptop.displayInfo();