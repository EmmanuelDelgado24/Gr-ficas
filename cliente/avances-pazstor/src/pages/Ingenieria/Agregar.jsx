import { useState } from "react";

export const PageAgregar = () => {
  //   const [persona, setPersonal] = useState("");
  const [departamento, setDepartamento] = useState(""); // estado del valor
  const [isOpen, setIsOpen] = useState(false); // para mostrar
  // "http://192.168.17.24:3000/avances/ModelosPespunte",
  const [linea, setLinea] = useState("");
  const [modelo, setModelo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [proceso, setProceso] = useState("");

  const handleCrearModelo = async () => {
    if (!tiempo || isNaN(parseFloat(tiempo))) {
        alert("Por favor, introduce un valor numérico válido para Tiempo.");
        return; 
    }

    const nuevoModeloData = {
      linea: linea,
      modelo: modelo,
      estilo: estilo,
      proceso: proceso,
      tiempo_std_min: tiempo,
      departamento: departamento,
    };

    try {
      const res = await fetch(
        "https://159.65.78.91/avances/ModelosPespunte",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoModeloData),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al crear el modelo: ${errorData.message || res.statusText}`);
      }

      const result = await res.json();
      alert(`Modelo ${result.modelo.modelo} creado exitosamente con ID: ${result.modelo.id}!`);
      console.log("Nuevo modelo creado:", result.modelo);

      
    } catch (err) {
      console.error("Error en handleCrearModelo:", err);
      alert(`Error: ${err.message}`);
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <>
      <br />
      <br />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
          <h5 className="text-4xl text-center">Agregar Modelo</h5>
          <br />
          <div className="col-span-1 justify-center md:col-span-2 flex mt-4 gap-x-4">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center"
            >
              Departamento
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
              <div className="absolute top-[205px] left-[400px] mt-2 z-10 w-44 divide-y divide-gray-100 rounded-lg shadow-sm bg-[#1F3C40]">
                <ul className="py-2 text-lg text-white">
                  {["Corte", "Coordinado", "Pespunte", "Montado"].map(
                    (dpto) => (
                      <li key={dpto}>
                        {" "}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setDepartamento(dpto);
                            setIsOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#3a5c62] hover:text-white"
                        >
                          {dpto}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
            <input
              type="text"
              readOnly
              value={departamento}
              className="input-estandar1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-x-2">
              <label
                htmlFor="linea-input"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Línea: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <div className="relative">
                <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 7h.01M3 11l7.29 7.29a1 1 0 001.42 0l7.3-7.3a1 1 0 000-1.41L11 3H4a1 1 0 00-1 1v7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="linea-input"
                  className="input-estandar1"
                  placeholder="Ej: Pazstor"
                  onChange={(e) => handleInputChange(e, setLinea)}
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <label
                htmlFor="linea-input"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Estilo: &nbsp;&nbsp;&nbsp;
              </label>
              <div className="relative">
                <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 13s2-2 6-2 6 2 6 2v3H3v-3zM21 16h-6v-2a1 1 0 011-1h4a1 1 0 011 1v2z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="estilo-input"
                  className="input-estandar1"
                  placeholder="Ej: Mocasin, Bota"
                  onChange={(e) => handleInputChange(e, setEstilo)}
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <label
                htmlFor="linea-input"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Modelo: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <div className="relative">
                <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 4h1v16H2V4zm2 0h2v16H4V4zm4 0h1v16H8V4zm3 0h1v16h-1V4zm3 0h2v16h-2V4zm4 0h1v16h-1V4z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="modelo-input"
                  className="input-estandar1"
                  placeholder="Ej: 12345"
                  onChange={(e) => handleInputChange(e, setModelo)}
                />
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <label
                htmlFor="linea-input"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Proceso:
              </label>
              <div className="relative">
                <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.983 13.983A2 2 0 1114 12a2 2 0 01-2.017 1.983zM19.432 15a1.65 1.65 0 00.23-1.03l-1.14-1.66a6.992 6.992 0 000-2.62l1.14-1.66a1.65 1.65 0 00-.23-1.03l-2-3.46a1.65 1.65 0 00-1.42-.77h-2.27a6.997 6.997 0 00-2.62 0h-2.27a1.65 1.65 0 00-1.42.77l-2 3.46a1.65 1.65 0 00-.23 1.03l1.14 1.66a6.992 6.992 0 000 2.62l-1.14 1.66a1.65 1.65 0 00.23 1.03l2 3.46a1.65 1.65 0 001.42.77h2.27a6.997 6.997 0 002.62 0h2.27a1.65 1.65 0 001.42-.77l2-3.46z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="proceso-input"
                  className="input-estandar1"
                  placeholder="Ej: CA, ST"
                  onChange={(e) => handleInputChange(e, setProceso)}
                />
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <label
                htmlFor="linea-input"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                Tiempo Std:
              </label>
              <div className="relative">
                <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  type="number"
                  step="0.01"
                  id="tiempo-input"
                  className="input-estandar1"
                  placeholder="Ej: 19.53"
                  onChange={(e) => handleInputChange(e, setTiempo)}
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="button"
                className="text-white focus:ring-4 font-medium rounded-lg text-lg px-5 py-2.5 bg-[#9e5027] hover:bg-[#c27f57] focus:outline-none focus:ring-[#c27f57]"
                onClick={handleCrearModelo}
              >
                Agregar modelo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAgregar;
