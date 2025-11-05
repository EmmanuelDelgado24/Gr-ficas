import { useState, useEffect } from "react";
import AppRouter from "./router/AppRouter.jsx";
import Login from "./login.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar token haciendo una petición al backend
  const verificarToken = async (token) => {
    try {
      // const response = await fetch("http://192.168.17.24:3000/avances/verificar-token", {
      const response = await fetch("https://159.65.78.91/avances/verificar-token", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json(); // El backend debe devolver { id, rol, nombre, etc. }
        console.log(data);
      
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error al verificar token:", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verificarToken(token).then((userData) => {
        if (userData) {
          setIsAuthenticated(true);
          setUser(userData);
        } else {
          localStorage.removeItem("token");
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="text-white text-center mt-20">Cargando...</p>;
  }

  if (!isAuthenticated) {
    return <Login onLogin={(userData) => {
      setUser(userData);
      setIsAuthenticated(true);
    }} />;
  }

  return <AppRouter user={user} />;
};

export default App;
