import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'praktikum_db'
};

async function mainMySQL() {
  console.log('--- DEMO MYSQL (XAMPP) ---');

  const conn = await mysql.createConnection(dbConfig);

  // CREATE
  await conn.execute(
    'INSERT INTO todos (tugas, selesai) VALUES (?, ?), (?, ?)',
    ['Belajar MySQL', false, 'Mengerjakan Modul 9', true]
  );

  // READ
  const [rows] = await conn.execute('SELECT * FROM todos');
  console.log(rows);

  // UPDATE
  await conn.execute(
    'UPDATE todos SET selesai = ? WHERE tugas = ?',
    [true, 'Belajar MySQL']
  );

  // DELETE
  await conn.execute(
    'DELETE FROM todos WHERE tugas = ?',
    ['Mengerjakan Modul 9']
  );

  // READ FINAL
  const [final] = await conn.execute('SELECT * FROM todos');
  console.log(final);

  await conn.end();
  console.log('Koneksi ditutup');
}

mainMySQL();
