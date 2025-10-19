// akun_bank.js

// 1. Membuat object literal untuk mengelola akun bank
const akun = {
    // --- PROPERTI ---
    nomorAkun: 'ACC001',
    namaPemilik: 'Nama Anda',
    saldo: 500000, // Saldo awal: Rp 500.000

    // --- METHODS ---

    /**
     * Method untuk menyetor sejumlah uang ke akun.
     * @param {number} jumlah - Jumlah uang yang disetor.
     */
    setor: function(jumlah) {
        if (typeof jumlah !== 'number' || jumlah <= 0) {
            console.log("Error: Jumlah setoran harus angka positif.");
            return;
        }

        this.saldo += jumlah; // Menambahkan jumlah ke saldo
        // Format saldo untuk output lebih mudah dibaca (opsional, tapi disarankan)
        const saldoBaruFormatted = this.saldo.toLocaleString('id-ID');
        const jumlahFormatted = jumlah.toLocaleString('id-ID');

        console.log(`Setoran sebesar Rp ${jumlahFormatted} berhasil.`);
        console.log(`Saldo baru: Rp ${saldoBaruFormatted}.`);
    },

    /**
     * Method untuk menarik sejumlah uang dari akun.
     * Melakukan validasi saldo.
     * @param {number} jumlah - Jumlah uang yang ditarik.
     */
    tarik: function(jumlah) {
        if (typeof jumlah !== 'number' || jumlah <= 0) {
            console.log("Error: Jumlah penarikan harus angka positif.");
            return;
        }

        // 2.a. Validasi: Jika jumlah lebih besar dari saldo
        if (jumlah > this.saldo) {
            console.log("Saldo tidak mencukupi untuk penarikan.");
        } else {
            // 2.b. Jika saldo mencukupi, kurangi saldo
            this.saldo -= jumlah;
            // Format saldo dan jumlah
            const saldoSisaFormatted = this.saldo.toLocaleString('id-ID');
            const jumlahFormatted = jumlah.toLocaleString('id-ID');

            console.log(`Penarikan sebesar Rp ${jumlahFormatted} berhasil.`);
            console.log(`Saldo sisa: Rp ${saldoSisaFormatted}.`);
        }
    }
};

// 3. --- DEMONSTRASI PENGGUNAAN OBJECT ---

console.log("==========================================");
console.log(`Detail Akun: ${akun.nomorAkun} - ${akun.namaPemilik}`);

// Tampilkan saldo awal
const saldoAwalFormatted = akun.saldo.toLocaleString('id-ID');
console.log(`1. Saldo Awal: Rp ${saldoAwalFormatted}`);
console.log("------------------------------------------");


// Panggil method setor()
console.log("2. Melakukan Setoran (Rp 50.000):");
akun.setor(50000);
console.log("------------------------------------------");


// Panggil method tarik() dengan nominal yang valid
console.log("3. Melakukan Penarikan Valid (Rp 100.000):");
akun.tarik(100000);
console.log("------------------------------------------");


// Panggil method tarik() dengan nominal yang melebihi saldo
console.log("4. Melakukan Penarikan yang Melebihi Saldo (Rp 600.000):");
akun.tarik(600000); // Saldo saat ini harusnya Rp 450.000
console.log("------------------------------------------");


// Tampilkan saldo akhir
const saldoAkhirFormatted = akun.saldo.toLocaleString('id-ID');
console.log(`5. Saldo Akhir: Rp ${saldoAkhirFormatted}`);
console.log("==========================================");