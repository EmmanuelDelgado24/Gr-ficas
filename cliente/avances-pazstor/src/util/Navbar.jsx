import { Link, NavLink } from "react-router-dom";
import "flowbite";
import { useState } from "react";

export const Navbar = () => {
  const [isOpenB, setIsOpenB] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const rol = localStorage.getItem("rol");

  const logout = async () => {
    try {
      // const token = localStorage.getItem('token');      
    } catch (error) {
      console.log('Error en el logout:', error);
    } finally {
      // Limpiar todo, independientemente de si la llamada al servidor falló o no
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      sessionStorage.clear();
      
      // Redirigir al usuario a la página de login
      window.location.href = '/';
    }
  };

  return (
    <nav className="bg-[#1F3C40] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-around w-full gap-4 p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://www.pazstor.com.mx/logo-pazstor-big.png"
            className="h-8"
            alt="PAZSTOR Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            PAZSTOR
          </span>
        </a>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-[#27484D] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent">
            {[
              "admin",
              "ingenieria_cueramaro",
              "gerencia",
              "planta_cueramaro",
            ].includes(rol) && (
              <li className="relative hover:bg-[#3a5c62]">
                <button
                  id="dropdownCueramaroLink"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "cueramaro" ? null : "cueramaro"
                    );
                    setIsOpenB(false);
                  }}
                  className="items-center justify-between w-full flex py-2 px-3 md:p-0 text-white "
                >
                  Cuerámaro
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {activeDropdown === "cueramaro" && (
                  <div
                    className={`absolute left-[-100%] top-[170%] z-10 w-56 bg-[#1F3C40] rounded-lg shadow-sm divide-y divide-gray-100 dark:divide-gray-600`}
                  >
                    <ul className="flex flex-col space-y-1 px-2 py-2">
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                        "corte_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/Corte"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Corte
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                        "coordinado_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/Coordinado"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Coordinado
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                        "pespunte_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/Pespunte"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Pespunte
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                        "montado_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/Montado"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Montado
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                        "adorno_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/Adorno"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Adorno
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                        "auditoria_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/Auditoria"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Auditoria
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                        "embarque_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/Embarque"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Embarque
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </li>
            )}
            {[
              "admin",
              "ingenieria_m_doblado",
              "gerencia",
              "planta_m_doblado",
            ].includes(rol) && (
              <li className="relative hover:bg-[#3a5c62]">
                <button
                  id="dropdownManuelDobladoLink"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "manuelDoblado"
                        ? null
                        : "manuelDoblado"
                    );
                    setIsOpenB(false);
                  }}
                  className="items-center justify-between w-full flex py-2 px-3 md:p-0 text-white "
                >
                  Manuel Doblado
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {activeDropdown === "manuelDoblado" && (
                  <div
                    className={`absolute left-[-40%] top-[170%] z-10 w-56 bg-[#1F3C40] rounded-lg shadow-sm divide-y divide-gray-100 dark:divide-gray-600`}
                  >
                    <ul className="flex flex-col space-y-1 px-2 py-2">
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "inyeccion_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Inyeccion"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Inyección
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "preacabado_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Preacabado"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Preacabado
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "suela_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Suela"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Suela
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "corte_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Corte"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Corte
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "coordinado_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Coordinado"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Coordinado
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "pespunte_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Pespunte"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Pespunte
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "montado_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Montado"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Montado
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "adorno_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Adorno"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Adorno
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "auditoria_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Auditoria"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Auditoria
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                        "embarque_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/Embarque"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Embarque
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </li>
            )}
            {[
              "admin",
              "ingenieria_leon",
              "gerencia",
              "planta_leon",
              "corte_leon",
              "coordinado_leon",
              "pespunte_leon",
              "montado_leon",
              "embarque_leon",
            ].includes(rol) && (
              <li className="relative hover:bg-[#3a5c62]">
                <button
                  id="dropdownLeonLink"
                  onClick={() => {
                    setActiveDropdown(
                      activeDropdown === "leon" ? null : "leon"
                    );
                    setIsOpenB(false);
                  }}
                  className="items-center justify-between w-full flex py-2 px-3 md:p-0 text-white "
                >
                  León
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {activeDropdown === "leon" && (
                  <div
                    className={`absolute left-[-260%] top-[170%] z-10 w-56 bg-[#1F3C40] rounded-lg shadow-sm divide-y divide-gray-100 dark:divide-gray-600`}
                  >
                    <ul className="flex flex-col space-y-1 px-2 py-2">
                      {[
                        "admin",
                        "ingenieria_leon",
                        "gerencia",
                        "planta_leon",
                        "corte_leon",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/León/Corte"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Corte
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_leon",
                        "gerencia",
                        "planta_leon",
                        "coordinado_leon",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/León/Coordinado"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Coordinado
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_leon",
                        "gerencia",
                        "planta_leon",
                        "pespunte_leon",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/León/Pespunte"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Pespunte
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_leon",
                        "gerencia",
                        "planta_leon",
                        "montado_leon",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/León/Montado"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Montado - Adorno
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_leon",
                        "gerencia",
                        "planta_leon",
                        "embarque_leon",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/León/Embarque"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            Embarque
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </li>
            )}

            <li className="relative hover:bg-[#3a5c62] ">
              <button
                id="dropdownBusquedaLink"
                onClick={() => {
                  setActiveDropdown(
                    activeDropdown === "busqueda" ? null : "busqueda"
                  );
                  setIsOpenB(false);
                }}
                className="items-center justify-between w-full flex py-2 px-3 md:p-0 text-white "
              >
                Busqueda
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {activeDropdown === "busqueda" && (
                <div
                  className={`absolute left-[-130%] top-[170%] z-10 w-56 bg-[#1F3C40] rounded-lg shadow-sm divide-y divide-gray-100 dark:divide-gray-600`}
                >
                  <ul className="flex flex-col space-y-1 px-2 py-2">
                    <li>
                      <NavLink
                        to="/Ingenieria/Busqueda"
                        className={({ isActive }) =>
                          `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                            isActive
                              ? "bg-[#3a5c62] font-semibold underline"
                              : ""
                          }`
                        }
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpenB(false);
                        }}
                      >
                        Busqueda por Fecha 4
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Ingenieria/Busqueda5"
                        className={({ isActive }) =>
                          `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                            isActive
                              ? "bg-[#3a5c62] font-semibold underline"
                              : ""
                          }`
                        }
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsOpenB(false);
                        }}
                      >
                        Busqueda por Fecha 5
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {[
              "admin",
              "ingenieria_cueramaro",
              "ingenieria_m_doblado",
              "ingenieria_leon",
              "gerencia",
              "planta_cueramaro",
              "planta_m_dobaldo",
              "planta_leon",
            ].includes(rol) && (
              <li className="relative hover:bg-[#3a5c62] ">
                <button
                  id="dropdownIngenieriaLink"
                  // data-dropdown-toggle="dropdownIngenieria"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "ingenieria" ? null : "ingenieria"
                    )
                  }
                  className="items-center justify-between w-full flex py-2 px-3 md:p-0 text-white "
                >
                  Ingeniería
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {activeDropdown === "ingenieria" && (
                  <div
                    className={`absolute left-[-130%] top-[170%] z-10 w-56 bg-[#1F3C40] rounded-lg shadow-sm divide-y divide-gray-100 dark:divide-gray-600`}
                  >
                    <ul className="flex flex-col space-y-1 px-2 py-2">
                      {[
                        "admin",
                        "ingenieria_cueramaro",
                        "gerencia",
                        "planta_cueramaro",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/Cueramaro/General"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            General Cueramaro
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_m_doblado",
                        "gerencia",
                        "planta_m_doblado",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/ManuelDoblado/General"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            General M. Doblado
                          </NavLink>
                        </li>
                      )}
                      {[
                        "admin",
                        "ingenieria_leon",
                        "gerencia",
                        "planta_leon",
                      ].includes(rol) && (
                        <li>
                          <NavLink
                            to="/León/General"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                isActive
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : ""
                              }`
                            }
                          >
                            General León
                          </NavLink>
                        </li>
                      )}
                      <li>
                        <NavLink
                          to="/Ingenieria/Meta"
                          className={({ isActive }) =>
                            `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                              isActive
                                ? "bg-[#3a5c62] font-semibold underline"
                                : ""
                            }`
                          }
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpenB(false);
                          }}
                        >
                          Asignar Meta
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Ingenieria/Reporte"
                          className={({ isActive }) =>
                            `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                              isActive
                                ? "bg-[#3a5c62] font-semibold underline"
                                : ""
                            }`
                          }
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpenB(false);
                          }}
                        >
                          Reporte Meta
                        </NavLink>
                      </li>
                      <li>
                        <button
                          id="doubleDropdownButton"
                          type="button"
                          className="flex items-center justify-between w-full px-4 py-2 hover:bg-[#3a5c62] text-white"
                          onClick={() => setIsOpenB(!isOpenB)}
                        >
                          CRUD Modelo
                          <svg
                            className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                        </button>
                        {isOpenB && (
                          <div
                            id="doubleDropdown"
                            className={`absolute left-[50%] top-[105%] w-56 bg-[#1F3C40] rounded-lg shadow-sm divide-y divide-gray-100 dark:divide-gray-600 ${
                              isOpenB ? "" : "hidden"
                            }`}
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="doubleDropdownButton"
                            >
                              <li>
                                <NavLink
                                  to="/Ingenieria/BuscarModelo"
                                  className={({ isActive }) =>
                                    `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                      isActive
                                        ? "bg-[#3a5c62] font-semibold underline"
                                        : ""
                                    }`
                                  }
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpenB(false);
                                  }}
                                >
                                  Buscar Modelo
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/Ingenieria/AgregarModelo"
                                  className={({ isActive }) =>
                                    `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                      isActive
                                        ? "bg-[#3a5c62] font-semibold underline"
                                        : ""
                                    }`
                                  }
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpenB(false);
                                  }}
                                >
                                  Agregar Modelo
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/Ingenieria/EditarModelo"
                                  className={({ isActive }) =>
                                    `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                      isActive
                                        ? "bg-[#3a5c62] font-semibold underline"
                                        : ""
                                    }`
                                  }
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpenB(false);
                                  }}
                                >
                                  Modificar Modelo
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  to="/Ingenieria/EliminarModelo"
                                  className={({ isActive }) =>
                                    `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
                                      isActive
                                        ? "bg-[#3a5c62] font-semibold underline"
                                        : ""
                                    }`
                                  }
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpenB(false);
                                  }}
                                >
                                  Eliminar Modelo
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )}
            <li>
              <button
                          id="cerrarSesiónButton"
                          type="button"
                          className="flex items-center justify-between w-full px-4 hover:bg-[#3a5c62] text-white"
                          onClick={logout}
                        >
                          Cerrar Sesión
                        </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
