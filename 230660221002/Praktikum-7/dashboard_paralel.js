// dashboard_paralel.js

async function getUserDashboardParallel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} (PARALEL) ---`);

  try {
    const urlUser  = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // Fetch User tetap sendiri (biasanya wajib)
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // Fetch Posts & Todos secara paralel
    const [respPosts, respTodos] = await Promise.all([
      fetch(urlPosts),
      fetch(urlTodos)
    ]);

    if (!respPosts.ok) throw new Error("Gagal mengambil data Posts");
    if (!respTodos.ok) throw new Error("Gagal mengambil data Todos");

    const [postsData, todosData] = await Promise.all([
      respPosts.json(),
      respTodos.json()
    ]);

    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(todo => todo.completed).length;

    console.log("\n=========================================");
    console.log("   DASHBOARD AKTIVITAS PENGGUNA (FAST)");
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

getUserDashboardParallel(1);
