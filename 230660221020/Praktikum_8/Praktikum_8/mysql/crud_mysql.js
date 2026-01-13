import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'praktikum_db'
};

async function mainMySQL() {
  console.log("--- DEMO MYSQL (LOKAL) ---");
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig);
    console.log("Berhasil terhubung ke database MySQL.");

    // CREATE
    console.log("\n[CREATE]");
    await connection.execute(
      'INSERT INTO todos (tugas, selesai) VALUES (?, ?)',
      ['Belajar Database MySQL', false]
    );

    // READ
    console.log("\n[READ]");
    const [rows] = await connection.execute('SELECT * FROM todos');
    console.log(rows);

    // UPDATE
    console.log("\n[UPDATE]");
    await connection.execute(
      'UPDATE todos SET selesai = ? WHERE tugas = ?',
      [true, 'Belajar Database MySQL']
    );

    // DELETE
    console.log("\n[DELETE]");
    await connection.execute(
      'DELETE FROM todos WHERE tugas = ?',
      ['Belajar Database MySQL']
    );

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log("\nKoneksi database ditutup.");
    }
  }
}

mainMySQL();
