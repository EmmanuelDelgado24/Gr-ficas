import { NavLink, Link } from "react-router-dom";
import "flowbite";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);            // menú móvil
  const [activeDropdown, setActiveDropdown] = useState(null);   // primer nivel
  const [isOpenB, setIsOpenB] = useState(false);                // segundo nivel (CRUD Modelo)

  const menuRef = useRef(null);
  const rol = localStorage.getItem("rol") || "";

  const hasRole = (roles) => roles.includes(rol);

  const closeAllMenus = () => {
    setIsNavOpen(false);
    setActiveDropdown(null);
    setIsOpenB(false);
  };

  // Cerrar todo al hacer click fuera o con Escape
  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeAllMenus();
      }
    };
    const onEsc = (e) => e.key === "Escape" && closeAllMenus();

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const logout = async () => {
    try {
      // const token = localStorage.getItem('token');
    } catch (error) {
      console.log("Error en el logout:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      sessionStorage.clear();
      window.location.href = "/";
    }
  };

  // Utilidad para links del dropdown (cierra menús al navegar)
  const ddLinkClass = ({ isActive }) =>
    `block w-full px-4 py-2 text-white hover:bg-[#3a5c62] rounded transition ${
      isActive ? "bg-[#3a5c62] font-semibold underline" : ""
    }`;

  return (
    <>
    <nav className="bg-[#1F3C40] w-full fixed top-0 left-0 z-50 shadow-md">
      <div
        ref={menuRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 md:flex md:items-center md:justify-between"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://www.pazstor.com.mx/logo-pazstor-big.png"
              className="h-8"
              alt="PAZSTOR Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              PAZSTOR
            </span>
          </Link>

          {/* Botón hamburguesa (móvil) */}
          <button
            type="button"
            onClick={() => setIsNavOpen((v) => !v)}
            aria-controls="navbar-multi-level"
            aria-expanded={isNavOpen}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#3a5c62] focus:outline-none focus:ring-2 focus:ring-[#3a5c62]"
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isNavOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú (móvil: acordeón / desktop: horizontal) */}
        <div
          id="navbar-multi-level"
          className={`${isNavOpen ? "block" : "hidden"} md:block md:w-auto transition-all duration-200 ease-in-out`}
        >
          <ul className="mt-3 md:mt-4 flex flex-col md:flex-row md:items-center font-medium rounded-lg bg-[#27484D] md:bg-transparent md:space-x-8">
            {/* ---------------- CUERÁMARO ---------------- */}
            {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro"]) && (
              <li className="relative">
                <button
                  onClick={() => {
                    setActiveDropdown(activeDropdown === "cueramaro" ? null : "cueramaro");
                    setIsOpenB(false);
                  }}
                  aria-expanded={activeDropdown === "cueramaro"}
                  className="w-full flex items-center justify-between py-2 px-3 text-white hover:bg-[#3a5c62] md:hover:bg-transparent"
                >
                  Cuerámaro
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div
                  className={`${activeDropdown === "cueramaro" ? "block" : "hidden"} 
                              md:absolute md:top-full md:left-0 z-20 w-full md:w-56 
                              bg-[#1F3C40] rounded-lg shadow-sm`}
                >
                  <ul className="flex flex-col space-y-1 px-2 py-2">
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro","corte_cueramaro"]) && (
                      <li>
                        <NavLink to="/Cueramaro/Corte" className={ddLinkClass} onClick={closeAllMenus}>
                          Corte
                        </NavLink>
                      </li>
                    )}
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro","coordinado_cueramaro"]) && (
                      <li>
                        <NavLink to="/Cueramaro/Coordinado" className={ddLinkClass} onClick={closeAllMenus}>
                          Coordinado
                        </NavLink>
                      </li>
                    )}
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro","pespunte_cueramaro"]) && (
                      <li>
                        <NavLink to="/Cueramaro/Pespunte" className={ddLinkClass} onClick={closeAllMenus}>
                          Pespunte
                        </NavLink>
                      </li>
                    )}
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro","montado_cueramaro"]) && (
                      <li>
                        <NavLink to="/Cueramaro/Montado" className={ddLinkClass} onClick={closeAllMenus}>
                          Montado
                        </NavLink>
                      </li>
                    )}
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro","montado_cueramaro"]) && (
                      <li>
                        <NavLink to="/Cueramaro/Adorno" className={ddLinkClass} onClick={closeAllMenus}>
                          Adorno
                        </NavLink>
                      </li>
                    )}
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro","montado_cueramaro"]) && (
                      <li>
                        <NavLink to="/Cueramaro/Auditoria" className={ddLinkClass} onClick={closeAllMenus}>
                          Auditoria
                        </NavLink>
                      </li>
                    )}
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro","embarque_cueramaro"]) && (
                      <li>
                        <NavLink to="/Cueramaro/Embarque" className={ddLinkClass} onClick={closeAllMenus}>
                          Embarque
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            )}

            {/* ---------------- MANUEL DOBLADO ---------------- */}
            {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado"]) && (
              <li className="relative">
                <button
                  onClick={() => {
                    setActiveDropdown(activeDropdown === "manuelDoblado" ? null : "manuelDoblado");
                    setIsOpenB(false);
                  }}
                  aria-expanded={activeDropdown === "manuelDoblado"}
                  className="w-full flex items-center justify-between py-2 px-3 text-white hover:bg-[#3a5c62] md:hover:bg-transparent"
                >
                  Manuel Doblado
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div
                  className={`${activeDropdown === "manuelDoblado" ? "block" : "hidden"} 
                              md:absolute md:top-full md:left-0 z-20 w-full md:w-56 
                              bg-[#1F3C40] rounded-lg shadow-sm`}
                >
                  <ul className="flex flex-col space-y-1 px-2 py-2">
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","inyeccion_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Inyeccion" className={ddLinkClass} onClick={closeAllMenus}>Inyección</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","preacabado_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Preacabado" className={ddLinkClass} onClick={closeAllMenus}>Preacabado</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","suela_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Suela" className={ddLinkClass} onClick={closeAllMenus}>Suela</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","corte_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Corte" className={ddLinkClass} onClick={closeAllMenus}>Corte</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","coordinado_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Coordinado" className={ddLinkClass} onClick={closeAllMenus}>Coordinado</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","pespunte_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Pespunte" className={ddLinkClass} onClick={closeAllMenus}>Pespunte</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","montado_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Montado" className={ddLinkClass} onClick={closeAllMenus}>Montado</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","adorno_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Adorno" className={ddLinkClass} onClick={closeAllMenus}>Adorno</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","auditoria_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Auditoria" className={ddLinkClass} onClick={closeAllMenus}>Auditoria</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado","embarque_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/Embarque" className={ddLinkClass} onClick={closeAllMenus}>Embarque</NavLink></li>
                    )}
                  </ul>
                </div>
              </li>
            )}

            {/* ---------------- LEÓN ---------------- */}
            {hasRole([
              "admin","ingenieria_leon","gerencia","planta_leon",
              "corte_leon","coordinado_leon","pespunte_leon","montado_leon","embarque_leon"
            ]) && (
              <li className="relative">
                <button
                  onClick={() => {
                    setActiveDropdown(activeDropdown === "leon" ? null : "leon");
                    setIsOpenB(false);
                  }}
                  aria-expanded={activeDropdown === "leon"}
                  className="w-full flex items-center justify-between py-2 px-3 text-white hover:bg-[#3a5c62] md:hover:bg-transparent"
                >
                  León
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div
                  className={`${activeDropdown === "leon" ? "block" : "hidden"} 
                              md:absolute md:top-full md:left-0 z-20 w-full md:w-56 
                              bg-[#1F3C40] rounded-lg shadow-sm`}
                >
                  <ul className="flex flex-col space-y-1 px-2 py-2">
                    {hasRole(["admin","ingenieria_leon","gerencia","planta_leon","corte_leon"]) && (
                      <li><NavLink to="/León/Corte" className={ddLinkClass} onClick={closeAllMenus}>Corte</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_leon","gerencia","planta_leon","coordinado_leon"]) && (
                      <li><NavLink to="/León/Coordinado" className={ddLinkClass} onClick={closeAllMenus}>Coordinado</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_leon","gerencia","planta_leon","pespunte_leon"]) && (
                      <li><NavLink to="/León/Pespunte" className={ddLinkClass} onClick={closeAllMenus}>Pespunte</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_leon","gerencia","planta_leon","montado_leon"]) && (
                      <li><NavLink to="/León/Montado" className={ddLinkClass} onClick={closeAllMenus}>Montado - Adorno</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_leon","gerencia","planta_leon","embarque_leon"]) && (
                      <li><NavLink to="/León/Embarque" className={ddLinkClass} onClick={closeAllMenus}>Embarque</NavLink></li>
                    )}
                  </ul>
                </div>
              </li>
            )}

            {/* ---------------- BÚSQUEDA ---------------- */}
            <li className="relative">
              <button
                onClick={() => {
                  setActiveDropdown(activeDropdown === "busqueda" ? null : "busqueda");
                  setIsOpenB(false);
                }}
                aria-expanded={activeDropdown === "busqueda"}
                className="w-full flex items-center justify-between py-2 px-3 text-white hover:bg-[#3a5c62] md:hover:bg-transparent"
              >
                Búsqueda
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <div
                className={`${activeDropdown === "busqueda" ? "block" : "hidden"} 
                            md:absolute md:top-full md:left-0 z-20 w-full md:w-56 
                            bg-[#1F3C40] rounded-lg shadow-sm`}
              >
                <ul className="flex flex-col space-y-1 px-2 py-2">
                  <li>
                    <NavLink to="/Ingenieria/Busqueda" className={ddLinkClass} onClick={closeAllMenus}>
                      Búsqueda por Fecha 4
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Ingenieria/Busqueda5" className={ddLinkClass} onClick={closeAllMenus}>
                      Búsqueda por Fecha 5
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            {/* ---------------- INGENIERÍA ---------------- */}
            {hasRole([
              "admin","ingenieria_cueramaro","ingenieria_m_doblado","ingenieria_leon",
              "gerencia","planta_cueramaro","planta_m_doblado","planta_leon"
            ]) && (
              <li className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "ingenieria" ? null : "ingenieria")}
                  aria-expanded={activeDropdown === "ingenieria"}
                  className="w-full flex items-center justify-between py-2 px-3 text-white hover:bg-[#3a5c62] md:hover:bg-transparent"
                >
                  Ingeniería
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div
                  className={`${activeDropdown === "ingenieria" ? "block" : "hidden"} 
                              md:absolute md:top-full md:left-0 z-20 w-full md:w-56 
                              bg-[#1F3C40] rounded-lg shadow-sm`}
                >
                  <ul className="flex flex-col space-y-1 px-2 py-2">
                    {hasRole(["admin","ingenieria_cueramaro","gerencia","planta_cueramaro"]) && (
                      <li><NavLink to="/Cueramaro/General" className={ddLinkClass} onClick={closeAllMenus}>General Cuerámaro</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_m_doblado","gerencia","planta_m_doblado"]) && (
                      <li><NavLink to="/ManuelDoblado/General" className={ddLinkClass} onClick={closeAllMenus}>General M. Doblado</NavLink></li>
                    )}
                    {hasRole(["admin","ingenieria_leon","gerencia","planta_leon"]) && (
                      <li><NavLink to="/León/General" className={ddLinkClass} onClick={closeAllMenus}>General León</NavLink></li>
                    )}

                    <li>
                      <NavLink to="/Ingenieria/Meta" className={ddLinkClass} onClick={closeAllMenus}>
                        Asignar Meta
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Ingenieria/Reporte" className={ddLinkClass} onClick={closeAllMenus}>
                        Reporte Meta
                      </NavLink>
                    </li>

                    {/* Segundo nivel: CRUD Modelo */}
                    <li className="relative">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-[#3a5c62] text-white"
                        onClick={() => setIsOpenB((v) => !v)}
                        aria-expanded={isOpenB}
                      >
                        CRUD Modelo
                        <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                      </button>

                      <div
                        className={`${isOpenB ? "block" : "hidden"} 
                                    md:absolute md:right-full md:top-0 
                                    w-full md:w-56 bg-[#1F3C40] rounded-lg shadow-sm`}
                      >
                        <ul className="py-2">
                          <li>
                            <NavLink to="/Ingenieria/BuscarModelo" className={ddLinkClass} onClick={closeAllMenus}>
                              Buscar Modelo
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/Ingenieria/AgregarModelo" className={ddLinkClass} onClick={closeAllMenus}>
                              Agregar Modelo
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/Ingenieria/EditarModelo" className={ddLinkClass} onClick={closeAllMenus}>
                              Modificar Modelo
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/Ingenieria/EliminarModelo" className={ddLinkClass} onClick={closeAllMenus}>
                              Eliminar Modelo
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {/* ---------------- CERRAR SESIÓN ---------------- */}
            <li className="md:ml-2">
              <button
                id="cerrarSesiónButton"
                type="button"
                className="w-full px-4 py-2 text-left md:text-center text-white hover:bg-[#3a5c62] rounded"
                onClick={logout}
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <br/>
    </>
  );
};

export default Navbar;
