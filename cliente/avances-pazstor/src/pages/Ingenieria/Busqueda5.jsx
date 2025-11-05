import "flowbite";
import "flowbite-datepicker";
import Chart from "react-apexcharts";
import { useEffect, useState, useRef } from "react";

export const PageBusqueda5 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [departamentoKey, setDepartamentoKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [subDpto, setSubDpto] = useState("");

  const [selectedSubOption, setSelectedSubOption] = useState("");
  const [isOpenB, setIsOpenB] = useState(false);

  const [DatosConsulta, setDatosConsulta] = useState(false);

  const [mostrarResultados, setMostrarResultados] = useState(false);

  const datePickerInstanceRef = useRef(null);

  useEffect(() => {
    const hoy = new Date();
    const inicioAño = new Date(hoy.getFullYear(), 0, 1);

    import("flowbite-datepicker").then(({ DateRangePicker }) => {
      const element = document.getElementById("date-range-picker");
      if (element) {
        const datepicker = new DateRangePicker(element, {
          format: "yyyy-mm-dd",
          minDate: inicioAño,
          maxDate: hoy,
        });
        datePickerInstanceRef.current = datepicker;
      }
    });
  }, []);

  const ConsultarGrafica = async (fechaInicio, fechaFin) => {
    setLoading(true);
    const apiUrl = `https://159.65.78.91/avances/BusquedaFecha5?depto=${departamentoKey}&subdepto=${selectedSubOption}&dateStart=${fechaInicio}&dateEnd=${fechaFin}`;
    // const apiUrl = `http://192.168.17.24:3000/avances/BusquedaFecha5?depto=${departamentoKey}&subdepto=${selectedSubOption}&dateStart=${fechaInicio}&dateEnd=${fechaFin}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        // Manejar errores de respuesta HTTP (ej. 400, 500)
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al consultar la API");
      }

      const data = await response.json();
    console.log("Consultando 5D");

      console.log("Datos recibidos de la API:", data);
      const isValidData = Array.isArray(data);
      setData(isValidData ? data : []);
      setDatosConsulta(data); // Guarda los datos recibidos en un estado
      setMostrarResultados(true); // Muestra los resultados

      // alert(
      //   `Consulta exitosa para depto ${departamentoKey}, subdepto ${subDpto} desde ${fechaInicio} hasta ${fechaFin}`
      // );
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      alert(`Error al consultar: ${error.message}`);
      setError(error.message);
      setData([]);
      setMostrarResultados(false); // Oculta resultados en caso de error
      setDatosConsulta(null); // Limpia datos anteriores
    } finally {
      setLoading(false);
    }
  };

  const handleConsultar = async () => {
    const datePicker = datePickerInstanceRef.current;

    if (datePicker) {
      const inputStartDate = document.getElementById("datepicker-range-start");
      const inputEndDate = document.getElementById("datepicker-range-end");

      let startDateString = inputStartDate ? inputStartDate.value : null;
      let endDateString = inputEndDate ? inputEndDate.value : null;

      if (!startDateString || !endDateString) {
        alert("Por favor selecciona un rango de fechas.");
        setMostrarResultados(false);
      } else {
        ConsultarGrafica(startDateString, endDateString);
        setMostrarResultados(true);
      }
    }
  };

  // Obtener modelos únicos
  const modelos = [...new Set(data.map((item) => item.LC_ESTILO))];

  // Sumar los pares
  const calcularSumaLC_PARLOT = (datos) => {
    if (!datos || datos.length === 0) {
      return 0;
    }
    return datos.reduce((acumulador, item) => acumulador + item.LC_PARLOT, 0);
  };

  const sumaLC_PARLOT = calcularSumaLC_PARLOT(data);

  // Calcular suma de pares por modelo
  const sumaPorModelo = modelos.map((modelo) => {
    return data
      .filter((item) => item.LC_ESTILO === modelo)
      .reduce((acc, item) => acc + item.LC_PARLOT, 0);
  });

  const options = {
    chart: { id: "basic-bar" },
    xaxis: {
      categories: modelos?.length > 0 ? modelos : ["Sin datos"],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 fill-gray-400",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 fill-gray-400",
        },
      },
    },
  };

  const series = [{ name: "Pares", data: sumaPorModelo }];

  const mainOptions = [
    { label: "Corte", subOptions: [11, 112, 115, 13, 14, 155, 16, 17, 18, 215,216] },
    { label: "Coordinado", subOptions: [121, 122, 208, 21, 22, 221,222,224,225,23,24,25,26,27] },
    { label: "Pespunte", subOptions: [91, 92, 93, 94, 95, 96, 97, 98] },
    { label: "Montado/Adorno", subOptions: [81, 82, 83, 84, 85, 86, 87, 88] },
  ];

  const [activeOption, setActiveOption] = useState(null);

  const handleMainOptionClick = (mainOption) => {
    setSubDpto(mainOption.label); // Cambia el valor del subdpto
    setActiveOption(mainOption.label);
    setSelectedSubOption(""); // Resetea la opción secundaria seleccionada
  };

  const handleSubOptionClick = (subOption) => {
    setSelectedSubOption(subOption);
    setIsOpenB(false);
  };

  return (
    <div>
      <br />
      <br />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-8xl">
          <h5 className="text-4xl text-center">Busqueda por rango de fechas</h5>
          <br />
          <div className="flex justify-center gap-x-4">
            {/* Dropdown Departamento */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
              >
                Dpto <span className="mx-2"></span>
                <svg
                  className="w-2.5 h-2.5 ms-3"
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
              {isOpen && (
                <div className="absolute mt-2 z-10 w-44 divide-y divide-gray-100 rounded-lg shadow-sm bg-[#1F3C40]">
                  <ul className="py-2 text-sm text-white">
                    {[
                      { label: "Corte", value: 10 },
                      { label: "Coordinado", value: 20 },
                      { label: "Pespunte", value: 59 },
                      { label: "Montado/Adorno", value: 80 },
                      // { label: "Embarque", value: 89 },
                    ].map((departamento) => (
                      <li key={departamento.value}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setDepartamentoKey(departamento.value);
                            setIsOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#3a5c62] hover:text-white"
                        >
                          {departamento.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <input
              type="text"
              readOnly
              value={departamentoKey.toString()}
              className="input-estandar2"
            />
            <span className="mx-2"></span>
            {/* Dropdown Banda */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setIsOpenB(!isOpenB)}
                className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
              >
                SubDpto
                <svg
                  className="w-2.5 h-2.5 ms-3"
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
              {isOpenB && (
                <div className="absolute mt-2 z-10 w-44 divide-y divide-gray-100 rounded-lg shadow-sm bg-[#1F3C40]">
                  <ul className="py-2 text-sm text-white">
                    {mainOptions.map((mainOption) => (
                      <li key={mainOption.label}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleMainOptionClick(mainOption);
                          }}
                          className={`flex items-center justify-between w-full px-4 py-2 rounded transition cursor-pointer
                              ${
                                activeOption === mainOption.label
                                  ? "bg-[#3a5c62] font-semibold underline"
                                  : "hover:bg-[#3a5c62]"
                              }`}
                        >
                          {/* <span>{mainOption.label}</span> */}

                          <div className="flex items-center justify-between w-full px-4 py-2 rounded transition cursor-pointer">
                            {/* Label */}
                            <span className="text-white">
                              {mainOption.label}
                            </span>

                            {/* Flecha a la derecha */}
                            <svg
                              className="w-2.5 h-2.5 text-white rtl:rotate-180"
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
                          </div>
                        </a>
                        {/* Sub-dropdown */}
                        {subDpto === mainOption.label && (
                          <div className="absolute left-48 top-0 mt-2 w-44 bg-[#1F3C40] divide-y divide-gray-100 rounded-lg shadow-sm">
                            <ul className="py-2 text-sm text-white">
                              {mainOption.subOptions.map((subOption) => (
                                <li key={subOption}>
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      console.log(subOption);
                                      handleSubOptionClick(subOption);
                                    }}
                                    className="block px-4 py-2  hover:bg-[#3a5c62] hover:text-white"
                                  >
                                    {subOption}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <input
              type="text"
              readOnly
              value={selectedSubOption.toString()}
              className="input-estandar2"
            />
          </div>
          <div
            id="date-range-picker"
            data-date-rangepicker="true"
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4  text-[#9e5027]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="datepicker-range-start"
                name="start"
                type="text"
                className="input-estandar1"
                placeholder="Fecha inicio"
              />
            </div>

            <span className="mx-4 text-gray-500 translate-y-[12px]">a</span>
            <div className="relative">
              <div className="absolute translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#9e5027]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                id="datepicker-range-end"
                name="end"
                type="text"
                className="input-estandar1"
                placeholder="Fecha termino"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:ring-[#c27f57] font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={handleConsultar}
            >
              Consultar
            </button>
          </div>
          {mostrarResultados && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs bg-gray-50 text-gray-400">
                  <tr>
                    <th scope="col">
                      <div className="flex justify-center">
                        <div>
                          {loading ? (
                            <p>Cargando datos...</p>
                          ) : error ? (
                            <p style={{ color: "white" }}>Error: {error}</p>
                          ) : (
                            <div className="w-full p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-800 border-dark-700">
                              <div>
                                <h5 className="leading-none text-3xl font-bold text-white pb-2 text-center">
                                  Reporte por Fechas
                                </h5>
                                <p>
                                  N° total pares:{" "}
                                  <span className="font-bold text-white">
                                    {" "}
                                    {sumaLC_PARLOT}{" "}
                                  </span>
                                </p>
                                <p>
                                  {" "}
                                  Modelos: <br />
                                  <span className="font-bold text-white">
                                    {modelos.join(', ')}
                                  </span>
                                </p>

                                {/* Mensaje si no hay datos */}
                                {data.length === 0 && (
                                  <p className="text-yellow-400 mt-2">
                                    No hay datos registrados
                                  </p>
                                )}
                              </div>

                              <Chart
                                options={options}
                                series={series}
                                type="bar"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBusqueda5;
