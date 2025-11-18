// dashboard_paralel.js

async function getUserDashboard(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} (PARALEL) ---`);

  try {
    // 1. URL
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // 2. Fetch user dulu (biasanya penting untuk identitas)
    const respUser = await fetch(urlUser);
    if (!respUser.ok) throw new Error("Gagal mengambil data User");
    const userData = await respUser.json();

    // 3. Fetch Posts & Todos secara paralel
    const [respPosts, respTodos] = await Promise.all([
      fetch(urlPosts),
      fetch(urlTodos)
    ]);

    if (!respPosts.ok) throw new Error("Gagal mengambil data Posts");
    if (!respTodos.ok) throw new Error("Gagal mengambil data Todos");

    const postsData = await respPosts.json();
    const todosData = await respTodos.json();

    // 4. Olah Data
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(todo => todo.completed).length;

    // 5. Output
    console.log("\n=========================================");
    console.log("      DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================\n");

  } catch (err) {
    console.log("\n[ERROR] Terjadi kesalahan:");
    console.log(err.message);
  }
}

getUserDashboard(1);
