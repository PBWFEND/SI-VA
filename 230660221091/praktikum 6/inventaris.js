// === CLASS ELECTRONIC DENGAN ENKAPSULASI ===
class Electronic {
  #stock; // properti privat (tidak bisa diakses langsung)

  constructor(id, name, price, stock, warranty) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.#stock = stock;
    this.warranty = warranty;
  }

  // Getter untuk membaca stok
  get stock() {
    return this.#stock;
  }

  // Setter untuk mengubah stok dengan validasi
  set stock(value) {
    if (value < 0) {
      console.log('Error: Stok tidak boleh negatif.');
    } else {
      this.#stock = value;
      console.log(`Stok berhasil diubah menjadi ${this.#stock}.`);
    }
  }

  // Menampilkan info produk
  displayInfo() {
    console.log(`ID: ${this.id}`);
    console.log(`Nama: ${this.name}`);
    console.log(`Harga: Rp ${this.price.toLocaleString()}`);
    console.log(`Stok: ${this.#stock}`);
    console.log(`Garansi: ${this.warranty} bulan`);
  }

  // Method menjual barang
  sell(qty) {
    if (qty <= 0) {
      console.log('Jumlah penjualan harus lebih dari 0.');
      return;
    }
    if (this.#stock >= qty) {
      this.#stock -= qty;
      console.log(`${qty} unit terjual. Sisa stok: ${this.#stock}`);
    } else {
      console.log('Stok tidak mencukupi untuk penjualan ini.');
    }
  }

  // Method menambah stok
  addStock(qty) {
    if (qty <= 0) {
      console.log('Jumlah stok yang ditambah harus lebih dari 0.');
      return;
    }
    this.#stock += qty;
    console.log(`Stok bertambah ${qty}. Total stok sekarang: ${this.#stock}`);
  }
}

// === DEMONSTRASI ===
console.log('=== DATA PRODUK ELEKTRONIK ===');
const elektronik1 = new Electronic('SKU003', 'Headphone Bluetooth', 750000, 8, 24);

elektronik1.displayInfo(); // tampilkan info awal
console.log('');

elektronik1.sell(4);       // jual 4 unit
elektronik1.addStock(6);   // tambah 6 unit
console.log('');

console.log(`Cek stok melalui getter: ${elektronik1.stock}`); // akses via getter
console.log('');

elektronik1.stock = 12;    // ubah stok via setter
console.log(`Stok sekarang: ${elektronik1.stock}`);
console.log('');

// Tes validasi setter
elektronik1.stock = -5;    // coba isi stok negatif
console.log('');

// Tes enkapsulasi (akan error kalau tidak pakai getter/setter)
try {
  console.log(elektronik1.stock); // akses langsung akan error
} catch (error) {
  console.log('Error: Tidak dapat mengakses properti #stock secara langsung (enkapsulasi berhasil).');
}
