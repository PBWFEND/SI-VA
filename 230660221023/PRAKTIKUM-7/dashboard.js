// dashboard_paralel.js

async function getUserDashboard(userId) {
  // Menambahkan penanda "(PARALEL)" untuk membedakan output
  console.log(`--- MEMUAT DATA USER ID: ${userId} (PARALEL) ---`);

  try {
    // 1. Definisikan URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 2. Fetch Data User (Tetap sequential)
    // Kita ambil data user terlebih dahulu.
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // 3. Fetch Posts dan Todos secara PARALEL
    // Kita menggunakan Promise.all() untuk menjalankan kedua fetch secara bersamaan.
    // Ini jauh lebih cepat daripada menunggu satu per satu.
    const [postsData, todosData] = await Promise.all([
      // Promise 1: Fetch Posts
      fetch(urlPosts).then(res => {
        if (!res.ok) throw new Error("Gagal mengambil data Posts");
        return res.json(); // Langsung parse ke JSON
      }),
      // Promise 2: Fetch Todos
      fetch(urlTodos).then(res => {
        if (!res.ok) throw new Error("Gagal mengambil data Todos");
        return res.json(); // Langsung parse ke JSON
      })
    ]);

    // 4. Pengolahan Data (Logic)
    // Data sudah tersedia dari hasil Promise.all
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    
    // Filter todo yang completed = true
    const completedTodos = todosData.filter(todo => todo.completed === true).length;

    // 5. Tampilkan Output
    // Format output sama persis seperti yang diminta
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (error) {
    // Penanganan error jika salah satu promise (User, Posts, atau Todos) gagal
    console.log("\n[ERROR] Terjadi kesalahan:");
    console.log(error.message);
  }
}

// Jalankan fungsi
getUserDashboard(1);