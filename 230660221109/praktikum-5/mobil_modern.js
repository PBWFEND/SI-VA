// ======================================================
// Praktikum 5 - JavaScript Modern (ES6+)
// Topik: let/const, Arrow Function, Spread Operator, dan Destructuring
// File: mobil_modern.js
// ======================================================

// 1️⃣ Gunakan 'const' untuk object karena referensinya tidak berubah
const mobil = {
  // --- PROPERTIES ---
  brand: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  jarakTempuh: 5000,
  mesinMenyala: false,

  // --- METHODS (Menggunakan Method Shorthand ES6) ---

  // REFACTOR 1: Ubah 'nyalakanMesin: function()' menjadi sintaks shorthand
  nyalakanMesin() {
    this.mesinMenyala = true;
    console.log("🔑 Mesin telah dinyalakan!");
  },

  matikanMesin() {
    this.mesinMenyala = false;
    console.log("🛑 Mesin telah dimatikan.");
  },

  // Method untuk berkendara
  berkendara(jarak) {
    if (this.mesinMenyala) {
      this.jarakTempuh += jarak;
      console.log(`🚗 Mobil berjalan sejauh ${jarak} km.`);
      console.log(`📍 Jarak tempuh sekarang: ${this.jarakTempuh} km.`);
    } else {
      console.log("⚠️  Error: Mesin belum menyala! Silakan nyalakan terlebih dahulu.");
    }
  }
};

// ======================================================
// 2️⃣ Interaksi dengan Object (Demo Penggunaan)
// ======================================================
console.log("\n=== 🔧 Interaksi dengan Object Mobil ===");
mobil.nyalakanMesin();
mobil.berkendara(50);
mobil.matikanMesin();
console.log("========================================\n");

// ======================================================
// 3️⃣ Demo Destructuring (Object Destructuring)
// ======================================================
// Mengambil beberapa properti dari object mobil
const { brand, warna, jarakTempuh } = mobil;

console.log("=== 🧩 Demo Destructuring ===");
console.log(`Brand: ${brand}`);
console.log(`Warna: ${warna}`);
console.log(`Jarak Tempuh: ${jarakTempuh} km`);
console.log("=============================\n");

// ======================================================
// 4️⃣ Demo Spread Operator
// ======================================================
// Membuat salinan mobil untuk versi dijual
const mobilDijual = {
  ...mobil,           // Salin semua properti dari 'mobil'
  harga: 150_000_000, // Tambah properti baru
  warna: "Silver"     // Timpa warna lama dengan warna baru
};

console.log("=== 🪄 Demo Spread Operator ===");
console.log("Data Mobil Asli (Putih):");
console.log(mobil);
console.log("\nData Mobil Dijual (Silver):");
console.log(mobilDijual);
console.log("===============================");

// ======================================================
// 5️⃣ Tambahan Demo Arrow Function (ES6+ Modern Syntax)
// ======================================================

// Arrow function untuk menghitung total harga setelah diskon
const hitungDiskon = (harga, diskon) => harga - (harga * diskon) / 100;

console.log("\n=== 💰 Demo Arrow Function ===");
const hargaAkhir = hitungDiskon(mobilDijual.harga, 10);
console.log(`Harga asli: Rp${mobilDijual.harga}`);
console.log(`Harga setelah diskon 10%: Rp${hargaAkhir}`);
console.log("===============================");
