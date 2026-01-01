import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import halaman Register
import Register from './views/auth/Register';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">TUGAS UAS</Link>
          <div className="navbar-nav">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<h1>Selamat Datang di Project React</h1>} />
          
          {/* Tambahkan route untuk Register */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;