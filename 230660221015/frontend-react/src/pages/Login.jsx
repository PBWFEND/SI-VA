import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { request } from "../api/api";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await request("/api/login", "POST", {
        email,
        password,
      });

      if (res.success) {
        // 🔐 Ambil token dengan aman (antisipasi struktur backend berbeda)
        const token = res.token || res.data?.token;

        if (!token) {
          alert("Token tidak ditemukan dari server");
          return;
        }

        // simpan token ke context + localStorage
        login(token);

        navigate("/dashboard");
      } else {
        alert(res.message || "Login gagal");
      }
    } catch (error) {
      alert("Email atau password salah");
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Please login to your account</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button type="submit">Login</button>
        </form>

        {/* LINK REGISTER */}
        <div className="login-footer">
          <span>Don’t have an account?</span>
          <Link to="/register" style={{ marginLeft: "5px" }}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
