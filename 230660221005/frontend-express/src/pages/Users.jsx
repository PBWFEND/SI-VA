import { useEffect, useState } from "react";
import api from "../api/axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");

  const getUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const createUser = async () => {
    await api.post("/users", { email });
    setEmail("");
    getUsers();
  };

  const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    getUsers();
  };

  return (
    <div>
      <h2>Data Users</h2>

      <input
        placeholder="Email baru"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={createUser}>Tambah</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.email}
            <button onClick={() => deleteUser(u.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
