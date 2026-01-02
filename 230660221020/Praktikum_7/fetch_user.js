// fetch_user.js

// URL dari API (endpoint untuk user dengan ID 1)
const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

/**
 * Fungsi async untuk mengambil data pengguna dari API
 */
async function ambilDataPengguna() {
  console.log("Mengambil data...");

  try {
    // 1. Kirim request ke API
    const response = await fetch(API_URL);

    // 2. Cek apakah response berhasil
    if (!response.ok) {
      throw new Error(`Gagal mengambil data, status: ${response.status}`);
    }

    // 3. Ambil data JSON dari response
    const data = await response.json();

    // 4. Tampilkan data
    console.log("\n--- Data Pengguna Ditemukan ---");
    console.log(`Nama    : ${data.name}`);
    console.log(`Email   : ${data.email}`);
    console.log(`Alamat  : ${data.address.street}, ${data.address.city}`);
    console.log(`Telepon : ${data.phone}`);

  } catch (error) {
    // 5. Tangani error
    console.error("\nTerjadi Kesalahan!");
    console.error(error.message);
  }
}

// Panggil fungsi async
ambilDataPengguna();

// Bukti bahwa program tidak ter-blocking
console.log("... Baris ini akan tampil lebih dulu!");
