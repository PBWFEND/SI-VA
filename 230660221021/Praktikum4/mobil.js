// mobil.js

const mobil = {
  // --- PROPERTIES ---
  brand: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  jarakTempuh: 5000, 
  mesinMenyala: false,

 

  // Method untuk menyalakan mesin
  nyalakanMesin: function() {
    this.mesinMenyala = true;
    console.log("Mesin telah dinyalakan!");
  },

  // Method untuk mematikan mesin
  matikanMesin() { // Menggunakan sintaks modern
    this.mesinMenyala = false;
    console.log("Mesin telah dimatikan.");
  },

  // Method untuk berkendara, yang akan menambah jarak tempuh
  berkendara(jarak) {
    if (this.mesinMenyala) {
      this.jarakTempuh += jarak; // Menambah jarak tempuh
      console.log(`Mobil berjalan sejauh ${jarak} km.`);
      console.log(`Jarak tempuh sekarang: ${this.jarakTempuh} km.`);
    } else {
      console.log("Error: Mesin belum menyala! Silakan nyalakan terlebih dahulu.");
    }
  }
};


// Menampilkan properti awal
console.log("--- Informasi Awal Mobil ---");
console.log(`Brand: ${mobil.brand}`);
console.log(`Model: ${mobil.model}`);
console.log(`Jarak Tempuh: ${mobil.jarakTempuh} km`);
console.log("-----------------------------\n");


// Mencoba berkendara saat mesin mati
console.log(">> Mencoba berkendara...");
mobil.berkendara(100); // Seharusnya menampilkan error
console.log("\n");

// Menyalakan mesin dan berkendara lagi
console.log(">> Menyalakan mesin...");
mobil.nyalakanMesin();
console.log(">> Mencoba berkendara lagi...");
mobil.berkendara(50);
console.log("\n");

// Mematikan mesin
console.log(">> Mematikan mesin...");
mobil.matikanMesin();
console.log(`Status mesin menyala: ${mobil.mesinMenyala}`);
