// dashboard_paralel.js

async function getUserDashboardParallel(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} (PARALLEL MODE) ---`);

  try {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';

    // Kita siapkan semua Promise fetch secara bersamaan
    const userPromise = fetch(`${baseUrl}/${userId}`);
    const postsPromise = fetch(`${baseUrl}/${userId}/posts`);
    const todosPromise = fetch(`${baseUrl}/${userId}/todos`);

    // Tunggu SEMUA data selesai diambil menggunakan Promise.all
    const [userResp, postsResp, todosResp] = await Promise.all([
      userPromise, 
      postsPromise, 
      todosPromise
    ]);

    // Cek status error untuk masing-masing request
    if (!userResp.ok) throw new Error("Gagal mengambil Profil");
    if (!postsResp.ok) throw new Error("Gagal mengambil Posts");
    if (!todosResp.ok) throw new Error("Gagal mengambil Todos");

    // Konversi ke JSON (ini juga bisa di-parallelkan, tapi sequential di sini cukup cepat)
    const userData = await userResp.json();
    const postsData = await postsResp.json();
    const todosData = await todosResp.json();

    // Logika hitung-hitungan
    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(t => t.completed).length;

    // Tampilkan Output
    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (error) {
    console.error("\n[ERROR]:", error.message);
  }
}

getUserDashboardParallel(1);