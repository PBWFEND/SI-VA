// crud_mysql.js
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
    console.log("\n[CREATE] Menambahkan tugas...");
    await connection.execute(
      'INSERT INTO todos (tugas, selesai) VALUES (?, ?), (?, ?)',
      ['Belajar MySQL', false, 'Mengerjakan Modul 9', true]
    );

    // READ
    console.log("\n[READ] Membaca semua tugas...");
    const [rows] = await connection.execute('SELECT * FROM todos');
    console.log(rows);

    // UPDATE
    console.log("\n[UPDATE] Mengubah 'Belajar MySQL'...");
    await connection.execute(
      'UPDATE todos SET selesai = ? WHERE tugas = ?',
      [true, 'Belajar MySQL']
    );

    // DELETE
    console.log("\n[DELETE] Menghapus 'Mengerjakan Modul 9'...");
    await connection.execute(
      'DELETE FROM todos WHERE tugas = ?',
      ['Mengerjakan Modul 9']
    );

    // READ Final
    console.log("\n[READ] Hasil akhir:");
    const [finalRows] = await connection.execute('SELECT * FROM todos');
    console.log(finalRows);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log("\nKoneksi ke database ditutup.");
    }
  }
}

mainMySQL();