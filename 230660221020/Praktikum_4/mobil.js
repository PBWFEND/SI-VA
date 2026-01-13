// ============================================================
// Praktikum 4: JavaScript Object Literal
// Nama : Putri Permatasari
// NIM  : 230660221020
// ============================================================

// 1. Membuat Object Literal untuk mobil
const mobil = {
  // --- PROPERTIES (Atribut dari objek mobil) ---
  brand: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  jarakTempuh: 5000, // dalam kilometer
  mesinMenyala: false,

  // --- METHODS (Perilaku atau aksi mobil) ---

  // Method untuk menyalakan mesin
  nyalakanMesin: function() {
    if (this.mesinMenyala) {
      console.log("⚠️ Mesin sudah dalam keadaan menyala!");
    } else {
      this.mesinMenyala = true;
      console.log("✅ Mesin telah dinyalakan!");
    }
  },

  // Method untuk mematikan mesin
  matikanMesin() {
    if (!this.mesinMenyala) {
      console.log("⚠️ Mesin sudah dalam keadaan mati!");
    } else {
      this.mesinMenyala = false;
      console.log("🛑 Mesin telah dimatikan.");
    }
  },

  // Method untuk berkendara, menambah jarak tempuh
  berkendara(jarak) {
    if (this.mesinMenyala) {
      this.jarakTempuh += jarak;
      console.log(`🚗 Mobil berjalan sejauh ${jarak} km.`);
      console.log(`📏 Total jarak tempuh sekarang: ${this.jarakTempuh} km.`);
    } else {
      console.log("❌ Error: Mesin belum menyala! Silakan nyalakan terlebih dahulu.");
    }
  },

  // Method tambahan untuk menampilkan informasi mobil
  infoMobil() {
    console.log("\n--- ℹ️ Informasi Mobil ---");
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Tahun: ${this.tahun}`);
    console.log(`Warna: ${this.warna}`);
    console.log(`Jarak Tempuh: ${this.jarakTempuh} km`);
    console.log(`Status Mesin: ${this.mesinMenyala ? "Menyala" : "Mati"}`);
    console.log("----------------------------\n");
  }
};

// --- Interaksi dengan Object Mobil ---

mobil.infoMobil();

// Mencoba berkendara saat mesin mati
console.log(">> Mencoba berkendara...");
mobil.berkendara(100); // Harus gagal karena mesin mati

// Menyalakan mesin dan berkendara
console.log("\n>> Menyalakan mesin...");
mobil.nyalakanMesin();
console.log(">> Mencoba berkendara lagi...");
mobil.berkendara(50);

// Menampilkan info terbaru
mobil.infoMobil();

// Mematikan mesin
console.log(">> Mematikan mesin...");
mobil.matikanMesin();
mobil.infoMobil();
