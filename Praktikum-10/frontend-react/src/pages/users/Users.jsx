import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/admin/users");
      setUsers(res.data.data);
    } catch (err) {
      console.error(err.response || err);
      setError("Gagal mengambil data user");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin hapus user ini?")) return;
    try {
      await axios.delete(`/admin/users/${id}`);
      fetchUsers(); 
    } catch (err) {
      alert("Gagal menghapus user");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Daftar Users</h1>
      <Link to="/users/create" className="btn btn-success mb-3">Tambah User</Link>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <ul className="list-group mb-3">
          {users.map((user) => (
            <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{user.name} - {user.email}</span>
              <div>
                <Link to={`/users/edit/${user.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Hapus</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Link to="/dashboard" className="btn btn-secondary mt-2">Kembali ke Dashboard</Link>
    </div>
  );
}
