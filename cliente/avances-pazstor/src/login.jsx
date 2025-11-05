import fondo from "./images/fondoD.jpg";
import { useState } from "react";
  
export const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  // Maneja cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch("http://192.168.17.24:3000/avances/login", {
      const response = await fetch("https://159.65.78.91/avances/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
      
      localStorage.setItem("rol", data.user.rol);
      localStorage.setItem("token", data.token);
      
      // Si la autenticación fue exitosa, pasamos el usuario al componente padre
      onLogin(data.token); // Asumiendo que el backend devuelve un objeto `user`
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg translate-x-[10%] translate-y-[8%] p-8 w-full max-w-md ">
        <img
          src="https://www.pazstor.com.mx/logo-pazstor-big.png"
          className="translate-x-[60%] h-35"
          alt="PAZSTOR Logo"
        />
        <h5 className="text-4xl text-center">Reporte de producción</h5>
        <h5 className="text-4xl text-center">Iniciar sesión</h5>
        <br />
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Correo Electrónico:
          </label>
          <div className="relative">
            <div className="absolute translate-x-3 inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              
              id="email"
              name="email"
              // id="email-address-icon"
              className="input-estandar3"
              placeholder="example@gmail.com"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-900 "
            >
              Contraseña:
            </label>
            <div className="relative">
              <div className="absolute translate-x-3 inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14 7h-1.5V6a4.017 4.017 0 0 0-4-4H7.5A4.017 4.017 0 0 0 3.5 6v1H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM6.5 6a2.5 2.5 0 0 1 5 0v1h-5V6Z" />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="input-estandar3"
                placeholder="•••••••••"
                required
                value={credentials.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:ring-[#c27f57] font-medium rounded-lg text-lg px-5 py-2.5"
            >
              Iniciar Sesión
            </button>
          </div>
          <br/>
        </form>
      </div>
    </section>
  );
};

export default Login;
