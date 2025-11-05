import "flowbite";
import "flowbite-datepicker";
import { useEffect, useState, useRef } from "react";

export const PageReporte = () => {

  const [ciudad, setCiudad] = useState("");
  const [isOpenC, setIsOpenC] = useState(false);

  const [departamentoKey, setDepartamentoKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [resultados, setResultados] = useState([]);

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

  const ConsultarTabla = async (fechaInicio, fechaFin) => {
  const apiUrl = `https://159.65.78.91/avances/ReporteMeta?depto=${departamentoKey}&ciudad=${ciudad}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
  // const apiUrl = `http://192.168.17.24:3000/avances/ReporteMeta?depto=${departamentoKey}&ciudad=${ciudad}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al consultar la API");
    }

    const data = await response.json(); // <- Guardamos la respuesta
    setResultados(data); // <- Guardamos en el estado
    setMostrarResultados(true);

  } catch (error) {
    console.error("Error al realizar la consulta:", error);
    alert(`Error al consultar: ${error.message}`);
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
        ConsultarTabla(startDateString, endDateString);
        setMostrarResultados(true);
      }
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-full">
          <h5 className="text-4xl text-center">Reporte de Metas</h5>
          <br />
          <div className="flex justify-center gap-x-4">
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setIsOpenC(!isOpenC)}
                className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center"
              >
                Ciudad
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
              {isOpenC && (
                <div className="absolute mt-2 z-10 w-44 divide-y divide-gray-100 rounded-lg shadow-sm bg-[#1F3C40]">
                  <ul className="py-2 text-lg text-white">
                    {["León", "Cuerámaro", "Manuel Doblado"].map(
                      (ciudad) => (
                        <li key={ciudad}>
                          {" "}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCiudad(ciudad);
                              setIsOpenC(false);
                            }}
                            className="block px-4 py-2 hover:bg-[#3a5c62] hover:text-white"
                          >
                            {ciudad}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
            <input
              type="text"
              readOnly
              value={ciudad}
              className="input-estandar2"
            />
            {/* Dropdown Departamento */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center"
              >
                Depto <span className="mx-2"></span>
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
                  <ul className="py-2 text-lg text-white">
                    {[
                      { label: "Corte", value: "Corte" },
                      { label: "Coordinado", value: "Coordinado" },
                      { label: "Pespunte", value: "Pespunte" },
                      { label: "Montado/Adorno", value: "Montado" },
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
          </div>
          <div
            id="date-range-picker"
            data-date-rangepicker="true"
            className="flex justify-center"
          >
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
              className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:ring-[#c27f57] font-medium rounded-lg text-lg px-5 py-2.5"
              onClick={handleConsultar}
            >
              Consultar
            </button>
          </div>
          {mostrarResultados && (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-m text-left rtl:text-right text-gray-500">
                <thead className="text-m text-gray-700 uppercase">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 "
                    >
                      Ciudad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Departamento
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 "
                    >
                      Subdepto
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Meta Asignada
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Fecha
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 "
                    >
                      Personal
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Modelos
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 "
                    >
                      Minutaje
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Pares
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 "
                    >
                      Minutos Trabajados
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Minutos Disponibles
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 "
                    >
                      Eficiencia
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 "
                    >
                      Pares Hora
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Velocidad de Banda
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {resultados.length > 0 ? (
                        resultados.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-6 py-3 bg-gray-50">{item.ciudad}</td>
                            <td className="px-6 py-3">{item.departamento}</td>
                            <td className="px-6 py-3 bg-gray-50">{item.subdepto}</td>
                            <td className="px-6 py-3">{item.meta_diaria}</td>
                            <td className="px-6 py-3">{new Date(item.fecha).toLocaleDateString("es-MX")}</td>
                            <td className="px-6 py-3 bg-gray-50">{item.personal}</td>
                            <td className="px-6 py-3">{item.modelos}</td>
                            <td className="px-6 py-3 bg-gray-50">{item.minutaje}</td>
                            <td className="px-6 py-3">{item.pares}</td>
                            <td className="px-6 py-3 bg-gray-50">{item.minutos_trabajados}</td>
                            <td className="px-6 py-3">{item.minutos_disponibles}</td>
                            <td className="px-6 py-3 bg-gray-50">{item.eficiencia}</td>
                            <td className="px-6 py-3 bg-gray-50">{item.pares_hora}</td>
                            <td className="px-6 py-3">{item.velocidad_banda}</td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan="14" className="text-center py-3">
                            No hay resultados para mostrar
                        </td>
                        </tr>
                    )}
                </tbody>

              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageReporte;

{/* <tbody>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4 bg-gray-50">
                      Laptop PC
                    </td>
                    <td className="px-6 py-4">$1999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Accessories
                    </td>
                    <td className="px-6 py-4">$99</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className="border-b border-gray-200 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                    >
                      Google Pixel Phone
                    </th>
                    <td className="px-6 py-4">Gray</td>
                    <td className="px-6 py-4 bg-gray-50">Phone</td>
                    <td className="px-6 py-4">$799</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 "
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Wearables
                    </td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 bg-gray-50 ">
                      Laptop
                    </td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                </tbody> */}
