// dashboard_paralel.js

// Jika Node.js kamu < v18, aktifkan baris ini:
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function getUserDashboardParallel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    // URL tetap sama
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 1. Ambil data User tetap sendirian (karena profile penting)
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // 2. Ambil Posts dan Todos SECARA PARALEL
    const [respPosts, respTodos] = await Promise.all([
      fetch(urlPosts),
      fetch(urlTodos)
    ]);

    if (!respPosts.ok) throw new Error("Gagal mengambil data Posts");
    if (!respTodos.ok) throw new Error("Gagal mengambil data Todos");

    // 3. Parsing JSON juga paralel
    const [postsData, todosData] = await Promise.all([
      respPosts.json(),
      respTodos.json()
    ]);

    // 4. Logic Hitung Data
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(todo => todo.completed).length;

    // 5. Output Dashboard
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (err) {
    console.log("\n[ERROR] Terjadi kesalahan:");
    console.log(err.message);
  }
}

// Jalankan fungsi
getUserDashboardParallel(1);
