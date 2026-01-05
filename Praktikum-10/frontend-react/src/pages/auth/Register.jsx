import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("Register berhasil, silakan login");
      navigate("/login");
    } catch {
      alert("Register gagal");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Register</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Nama"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-success w-100">Register</button>
      </form>

      <p className="mt-3 text-center">
        Sudah punya akun? <Link to="/login" className="text-primary">Login di sini</Link>
      </p>
    </div>
  );
}
