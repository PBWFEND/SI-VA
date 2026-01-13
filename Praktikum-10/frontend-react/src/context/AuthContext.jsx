import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  
  useEffect(() => {
    if (!user && token) {
      try {
        const savedUser = localStorage.getItem("user");
        if (savedUser) setUser(JSON.parse(savedUser));
      } catch {
        setUser(null);
      }
    }
  }, [token, user]);

  const login = async (email, password) => {
    const response = await axios.post("/login", { email, password });
    const { token, user } = response.data.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setToken(token);
    setUser(user);
  };

  
  const register = async ({ name, email, password }) => {
    try {
      const response = await axios.post("/register", { name, email, password });
      const userData = response.data.data;

      return userData; 
    } catch (err) {
      console.error("REGISTER ERROR:", err.response || err);
      throw new Error("Register gagal");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
