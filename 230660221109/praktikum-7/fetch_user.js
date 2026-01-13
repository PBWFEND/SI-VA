// fetch_user.js

// URL dari API (endpoint untuk user dengan ID 1)
const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

/**
 * Fungsi ini mengambil data pengguna dari API menggunakan async/await.
 */
async function ambilDataPengguna() {
  console.log("Mengambil data...");

  try {
    // 1. Await: Menunggu fetch selesai
    const response = await fetch(API_URL);

    // 2. Jika error (404/500)
    if (!response.ok) {
      throw new Error(`Gagal mengambil data, status: ${response.status}`);
    }

    // 3. Await: Menunggu proses parsing JSON selesai
    const data = await response.json();

    // 4. Cetak data ke terminal
    console.log("\n--- Data Pengguna Ditemukan ---");
    console.log(`Nama    : ${data.name}`);
    console.log(`Email   : ${data.email}`);
    console.log(`Alamat  : ${data.address.street}, ${data.address.city}`);
    console.log(`Telepon : ${data.phone}`);

  } catch (error) {
    // Tangani error
    console.error("\nTerjadi Kesalahan!");
    console.error(error.message);
  }
}

// Panggil fungsi asynchronous
ambilDataPengguna();

console.log("... Baris ini akan tampil lebih dulu!");
