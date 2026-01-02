// ============================================================
// Praktikum 5: JavaScript Modern (ES6+)
// Nama : Astia Sundari Putri
// NIM  : 230660221020
// ============================================================

// 1. Gunakan 'const' untuk object karena referensinya tidak berubah
const mobil = {
  // --- PROPERTIES ---
  brand: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  jarakTempuh: 5000,
  mesinMenyala: false,

  // --- METHODS (Menggunakan ES6 Method Shorthand) ---

  nyalakanMesin() {
    if (this.mesinMenyala) {
      console.log("⚠️ Mesin sudah menyala!");
    } else {
      this.mesinMenyala = true;
      console.log("✅ Mesin telah dinyalakan!");
    }
  },

  matikanMesin() {
    if (!this.mesinMenyala) {
      console.log("⚠️ Mesin sudah dalam keadaan mati!");
    } else {
      this.mesinMenyala = false;
      console.log("🛑 Mesin telah dimatikan.");
    }
  },

  berkendara(jarak) {
    if (this.mesinMenyala) {
      this.jarakTempuh += jarak;
      console.log(`🚗 Mobil berjalan sejauh ${jarak} km.`);
      console.log(`📏 Total jarak tempuh sekarang: ${this.jarakTempuh} km.`);
    } else {
      console.log("❌ Error: Mesin belum menyala! Silakan nyalakan terlebih dahulu.");
    }
  },
};

// --- Interaksi Dasar dengan Object Mobil ---
console.log("\n--- 🚘 Simulasi Mobil Modern ---");
mobil.nyalakanMesin();
mobil.berkendara(50);
mobil.matikanMesin();
console.log("-------------------------------\n");

// ============================================================
// 2. DEMO FITUR-FITUR MODERN JAVASCRIPT (ES6+)
// ============================================================

// 🔹 Destructuring Assignment
// Membongkar nilai object ke dalam variabel terpisah
const { brand, warna, jarakTempuh } = mobil;

console.log("--- 🧩 Demo Destructuring ---");
console.log(`Brand  : ${brand}`);
console.log(`Warna  : ${warna}`);
console.log(`Jarak  : ${jarakTempuh} km`);
console.log("-------------------------------\n");

// 🔹 Spread Operator (Salin dan ubah object)
const mobilDijual = {
  ...mobil, // Menyalin semua properti dari object 'mobil'
  warna: "Silver", // Override properti warna
  harga: 185000000, // Tambah properti baru
};

console.log("--- 📤 Demo Spread Operator ---");
console.log("Data Mobil Asli (Putih):");
console.log(mobil);
console.log("\nData Mobil Dijual (Silver):");
console.log(mobilDijual);
console.log("-------------------------------\n");

// 🔹 Arrow Function untuk operasi kecil
const hitungPajak = (harga) => harga * 0.1; // 10% pajak

console.log("--- 💰 Demo Arrow Function ---");
console.log(`Harga Mobil: Rp ${mobilDijual.harga.toLocaleString("id-ID")}`);
console.log(`Pajak 10%  : Rp ${hitungPajak(mobilDijual.harga).toLocaleString("id-ID")}`);
console.log(`Total Bayar: Rp ${(mobilDijual.harga + hitungPajak(mobilDijual.harga)).toLocaleString("id-ID")}`);
console.log("-------------------------------\n");

// 🔹 Array Destructuring
const fiturMobil = ["AC", "Power Steering", "Airbag", "ABS"];
const [fitur1, fitur2, ...fiturTambahan] = fiturMobil;

console.log("--- ⚙️ Demo Array Destructuring ---");
console.log(`Fitur Utama  : ${fitur1}, ${fitur2}`);
console.log(`Fitur Lainnya: ${fiturTambahan.join(", ")}`);
console.log("-------------------------------");
