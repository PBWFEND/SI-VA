// dashboard.js

async function getUserDashboard(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    // 1. Definisikan Endpoint
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // 2. Fetch Data Profil
    const userResponse = await fetch(`${baseUrl}/${userId}`);
    if (!userResponse.ok) throw new Error("Gagal mengambil data Profil User");
    const userData = await userResponse.json();

    // 3. Fetch Data Posts
    const postsResponse = await fetch(`${baseUrl}/${userId}/posts`);
    if (!postsResponse.ok) throw new Error("Gagal mengambil data Posts");
    const postsData = await postsResponse.json();

    // 4. Fetch Data Todos
    const todosResponse = await fetch(`${baseUrl}/${userId}/todos`);
    if (!todosResponse.ok) throw new Error("Gagal mengambil data Todos");
    const todosData = await todosResponse.json();

    // 5. Logika Pengolahan Data
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    // Filter tugas yang properti completed-nya true
    const completedTodos = todosData.filter(todo => todo.completed === true).length;

    // 6. Tampilkan Output Sesuai Format
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (error) {
    // Error Handling
    console.error("\n[ERROR] Terjadi kesalahan sistem:");
    console.error(error.message);
  }
}

// Jalankan fungsi untuk User ID 1
getUserDashboard(1);