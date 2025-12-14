import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { request } from "../api/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await request("/api/register", "POST", {
        name,
        email,
        password,
      });

      if (res.success) {
        alert("Register berhasil, silakan login");
        navigate("/");
      } else {
        alert(res.message || "Register gagal");
      }
    } catch (error) {
      alert("Terjadi kesalahan");
      console.error(error);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow" style={{ width: 400 }}>
        <h4 className="text-center mb-3">Register</h4>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <div className="position-relative mb-3">
            <input
              className="form-control pe-5"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="btn position-absolute top-50 end-0 translate-middle-y me-2"
              onClick={() => setShowPassword(!showPassword)}
              style={{ border: "none", background: "transparent" }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
