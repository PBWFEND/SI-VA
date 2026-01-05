import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import CreateUser from "./pages/users/CreateUser";
import EditUser from "./pages/users/EditUser";
import { AuthProvider, useAuth } from "./context/AuthContext";


function PrivateRoute({ children }) {
  const { user } = useAuth();
  
  
  const token = localStorage.getItem("token");
  if (!user && !token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          {/* Tambahan untuk CRUD */}
          <Route
            path="/users/create"
            element={
              <PrivateRoute>
                <CreateUser />
              </PrivateRoute>
            }
          />
          <Route
            path="/users/edit/:id"
            element={
              <PrivateRoute>
                <EditUser />
              </PrivateRoute>
            }
          />
          {/* fallback route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
