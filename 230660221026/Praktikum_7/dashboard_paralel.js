// dashboard_paralel.js

async function getUserDashboardParallel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} (Paralel) ---`);

  try {
    // 1. Definisikan URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 2. Fetch Data (Parallel)
    // Memulai ketiga request fetch secara bersamaan
    const [respUser, respPosts, respTodos] = await Promise.all([
      fetch(urlUser),
      fetch(urlPosts),
      fetch(urlTodos)
    ]);

    // 3. Error Handling (Penting!)
    // Kita harus memeriksa status .ok dari setiap respons
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    if (!respPosts.ok) throw new Error("Gagal mengambil data Posts");
    if (!respTodos.ok) throw new Error("Gagal mengambil data Todos");

    // 4. Konversi ke JSON (Paralel)
    // Menunggu semua proses .json() selesai
    const [userData, postsData, todosData] = await Promise.all([
      respUser.json(),
      respPosts.json(),
      respTodos.json()
    ]);

    // 5. Pengolahan Data (Logic)
    const totalPosts = postsData.length;
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
    console.log("\n[ERROR] Terjadi kesalahan:");
    console.log(error.message);
  }
}

// Jalankan fungsi
getUserDashboardParallel(1);