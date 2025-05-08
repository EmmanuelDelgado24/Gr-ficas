import { Link, NavLink } from "react-router-dom";
import "flowbite";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-teal-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://www.pazstor.com.mx/logo-pazstor-big.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            PAZSTOR
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-teal-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-teal-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Producción general
              </a>
            </li>
            <li className="relative">
              <button
                id="dropdownManuelLink"
                data-dropdown-toggle="dropdownManuel"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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

              <div
                id="dropdownManuel"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700 dark:divide-gray-600 absolute"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <NavLink
                      to="/corte"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Corte
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/coordinado"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Coordinado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pespunte"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Pespunte
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/montado"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Montado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adorno"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Adorno
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/auditoria"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Auditoria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/embarque"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Embarque
                    </NavLink>
                  </li>

                  <li className="relative">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Submenú
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

                    <div
                      id="doubleDropdown"
                      className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute top-0 left-full ml-1"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>

            <li className="relative">
              <button
                id="dropdownLeonLink"
                data-dropdown-toggle="dropdownLeon"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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

              <div
                id="dropdownLeon"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700 dark:divide-gray-600 absolute"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <NavLink
                      to="/León/Corte"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Corte
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/León/Coordinado"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Coordinado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/León/Pespunte"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Pespunte
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/León/Montado"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Montado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adorno"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Adorno
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/auditoria"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Auditoria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/embarque"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Embarque
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/León/General"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      General
                    </NavLink>
                  </li>

                  <li className="relative">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Submenú
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

                    <div
                      id="doubleDropdown"
                      className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute top-0 left-full ml-1"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>

            <li className="relative">
              <button
                id="dropdownCueramaroLink"
                data-dropdown-toggle="dropdownCueramaro"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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

              <div
                id="dropdownCueramaro"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700 dark:divide-gray-600 absolute"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <NavLink
                      to="/corte"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Corte
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/coordinado"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Coordinado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pespunte"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Pespunte
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/montado"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Montado
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/adorno"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Adorno
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/auditoria"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Auditoria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Embarque"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          isActive
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }`
                      }
                    >
                      Embarque
                    </NavLink>
                  </li>

                  <li className="relative">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Submenú
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

                    <div
                      id="doubleDropdown"
                      className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute top-0 left-full ml-1"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Manuel Doblado
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                León
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Cuerámaro
              </a>
            </li> */
