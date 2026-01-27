import { useState } from "react";

export const PageBuscar = () => {
  const [linea, setLinea] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [proceso, setProceso] = useState("");
  const [modeloBusqueda, setModeloBusqueda] = useState(""); 
  const [departamento, setDepartamento] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  async function obtenerModelo(departamento, modelo) {
    try {

// `http://192.168.17.24:3000/avances/ModeloPespunte?departamento=${departamento}&modelo=${modelo}`);

      const res = await fetch(
        `https://159.65.78.91/avances/ModeloPespunte?departamento=
        ${departamento}&modelo=${modelo}`
      ); 

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al obtener el modelo: ${errorData.message || res.statusText}`);
      }
      const data = await res.json(); 
      
      if (data.modelo == null){ 
        alert("No se econtro este modelo");
        setMostrarResultados(false);
      }
      setLinea(data.linea ); 
      setProceso(data.proceso );
      setEstilo(data.estilo );
      setTiempo(data.tiempo_std_min );
      setModeloBusqueda(data.modelo);       
      return data;
    } catch (err) {
      console.error("Error en obtenerModelo:", err);
      setLinea('');
      setProceso('');
      setEstilo('');
      setTiempo('');
      setMostrarResultados(false); 
    }
  }

  const handleModeloInputChange = (e) => {
    setModeloBusqueda(e.target.value);
  };

  const handleBuscar = () => {
    if (modeloBusqueda) { 
      obtenerModelo(departamento, modeloBusqueda); 
      setMostrarResultados(true); 
    } else {
      alert("Por favor, ingrese un modelo para buscar."); 
      setMostrarResultados(false); 
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
          <h5 className="text-4xl text-center">Buscar Modelo</h5>
          <br />
          <div className="flex gap-x-4">
            {/* Dropdown de Departamento */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center"
            >
              Depto
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
              <div className="absolute top-[200px] mt-2 z-10 w-44 divide-y divide-gray-100 rounded-lg shadow-sm bg-[#1F3C40]">
                <ul className="py-2 text-lg text-white">
                  {["Corte", "Coordinado", "Pespunte", "Montado"].map(
                    (dpto) => (
                      <li key={dpto}>
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

            {/* Input de Búsqueda de Modelo */}
            <label htmlFor="default-search" className="mb-2 text-lg font-medium text-gray-900 sr-only">Buscar Modelo</label>
            <div className="relative">
              <div className="absolute translate-y-[10px] translate-x-[12px] flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="input-estandar1 h-13"
                placeholder="Buscar Modelos"
                required
                value={modeloBusqueda} 
                onChange={handleModeloInputChange} 
                onKeyDown={(e) => { 
                  if (e.key === 'Enter') {
                    handleBuscar();
                  }
                }}
              />
              
              <button
                type="submit"
                onClick={handleBuscar} 
                className="text-white absolute start-49 bottom-2.5 bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
              >
                Buscar
              </button>
            </div>
          </div>

          {mostrarResultados && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"> {/* Añadido mt-4 para espacio */}
              {/* Línea */}
              <div className="flex items-center gap-x-2">
                <label htmlFor="linea-input" className="block mb-2 text-lg font-medium text-gray-900">
                  Línea: &nbsp;&nbsp;&nbsp;
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
                    value={linea}
                    readOnly
                  />
                </div>
              </div>

              {/* Estilo */}
              <div className="flex items-center gap-x-2">
                <label htmlFor="estilo-input" className="block mb-2 text-lg font-medium text-gray-900">
                  Estilo: &nbsp;&nbsp;&nbsp;
                </label>
                <div className="relative">
                  <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13s2-2 6-2 6 2 6 2v3H3v-3zM21 16h-6v-2a1 1 0 011-1h4a1 1 0 011 1v2z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="estilo-input"
                    className="input-estandar1"
                    placeholder="Ej: Mocasin, Bota"
                    value={estilo} 
                    readOnly                  
                  />
                </div>
              </div>

              {/* Proceso */}
              <div className="flex items-center gap-x-2">
                <label htmlFor="proceso-input" className="block mb-2 text-lg font-medium text-gray-900">
                  Proceso:
                </label>
                <div className="relative">
                  <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.983 13.983A2 2 0 1114 12a2 2 0 01-2.017 1.983zM19.432 15a1.65 1.65 0 00.23-1.03l-1.14-1.66a6.992 6.992 0 000-2.62l1.14-1.66a1.65 1.65 0 00-.23-1.03l-2-3.46a1.65 1.65 0 00-1.42-.77h-2.27a6.997 6.997 0 00-2.62 0h-2.27a1.65 1.65 0 00-1.42.77l-2 3.46a1.65 1.65 0 00-.23 1.03l1.14 1.66a6.992 6.992 0 000 2.62l-1.14 1.66a1.65 1.65 0 00.23 1.03l2 3.46a1.65 1.65 0 001.42.77h2.27a6.997 6.997 0 002.62 0h2.27a1.65 1.65 0 001.42-.77l2-3.46z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="proceso-input"
                    className="input-estandar1"
                    placeholder="Ej: CA, ST"
                    value={proceso}         
                    readOnly          
                  />
                </div>
              </div>
              
              {/* Tiempo */}
              <div className="flex items-center gap-x-2">
                <label htmlFor="tiempo-input" className="block mb-2 text-lg font-medium text-gray-900">
                  Tiempo:
                </label>
                <div className="relative">
                  <div className="absolute translate-y-[3px] translate-x-[12px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none gap-px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    id="tiempo-input"
                    className="input-estandar1"
                    placeholder="Ej: 19.53"
                    value={tiempo}   
                    readOnly              
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageBuscar;
