// dashboard_paralel.js

/**
 * Mengambil dan menampilkan dashboard aktivitas pengguna secara paralel.
 * Data Posts dan Todos diambil secara bersamaan (paralel) setelah
 * data User selesai diambil.
 * @param {number} userId - ID pengguna yang ingin dicari
 */
async function getUserDashboardParallel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} (Paralel) ---`);

  try {
    // 1. Definisikan URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 2. Ambil data User (Tetap sekuensial sebagai langkah pertama)
    // Kita butuh data user (nama/email) sebelum bisa menampilkan dashboard.
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // 3. Siapkan "Promise" untuk Posts dan Todos
    // Kita pisahkan proses 'fetch' dan 'parsing json'
    // agar error handling bisa lebih spesifik di dalam Promise.all.
    // Request ini mulai berjalan di background.
    
    const fetchPosts = fetch(urlPosts).then(res => {
      if (!res.ok) throw new Error("Gagal mengambil data Posts");
      return res.json();
    });

    const fetchTodos = fetch(urlTodos).then(res => {
      if (!res.ok) throw new Error("Gagal mengambil data Todos");
      return res.json();
    });

    // 4. Jalankan fetch Posts dan Todos secara PARALEL
    // 'await Promise.all()' akan menunggu KEDUA promise di atas selesai.
    // Waktu tunggu adalah waktu request terlama, BUKAN total keduanya.
    // Hasilnya akan berupa array: [hasil_fetchPosts, hasil_fetchTodos]
    const [postsData, todosData] = await Promise.all([
      fetchPosts,
      fetchTodos
    ]);

    // 5. Pengolahan Data (Logic)
    const totalPosts = postsData.length; // Hitung jumlah array
    const totalTodos = todosData.length;
    
    // Filter todo yang completed = true
    const completedTodos = todosData.filter(todo => todo.completed === true).length;

    // 6. Tampilkan Output
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (error) {
    // Tangkap error dari 'fetchUser' ATAU 'Promise.all'
    console.log("\n[ERROR] Terjadi kesalahan (Paralel):");
    console.log(error.message);
  }
}

// Jalankan fungsi untuk User ID 1
getUserDashboardParallel(1);