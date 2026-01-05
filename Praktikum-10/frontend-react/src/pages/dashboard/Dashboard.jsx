import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <p>Selamat datang, {user?.name}</p>
      <Link to="/users" className="btn btn-primary me-2">Lihat Users</Link>
      <button className="btn btn-danger mt-2" onClick={handleLogout}>Logout</button>
    </div>
  );
}
