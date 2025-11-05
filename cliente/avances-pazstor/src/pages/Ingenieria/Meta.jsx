import { useState } from "react";

export const PageFormulario = () => {
  const [departamento, setDepartamento] = useState(""); // estado del valor
  const [isOpen, setIsOpen] = useState(false); // para mostrar

  const [banda, setBanda] = useState("");
  const [isOpenB, setIsOpenB] = useState(false);

  const [ciudad, setCiudad] = useState("");
  const [isOpenC, setIsOpenC] = useState(false);

  const [mostrarResultados, setMostrarResultados] = useState(false);

  const [modelos, setModelos] = useState([
    { modelo: "", minutaje: "", totalPares: 0, locked: false }, 
  ]);
  const [paresMeta, setParesMeta] = useState(0); 

  const [persona, setPersonal] = useState("");
  const [minutosTotales, setMinutosTotales] = useState(0);
  const [minutos, setMinutos] = useState("");
  const [eficiencia, setEficiencia] = useState("");
  const [paresHora, setParesHora] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState(""); 
  const [activeOption, setActiveOption] = useState(null);



  const mainOptions = [
      { label: "Corte", subOptions: ["Piel", "Forro", "Loteo"] },
      { label: "Coordinado", subOptions: ["General"] },
      { label: "Pespunte", subOptions: ["Banda 241", "Banda 242", "Banda 243", "Banda 244", "Banda 245"] },
      { label: "Montado", subOptions: ["Linea 1","Linea 2","Linea 4","Linea 5","Linea 6","Linea 8"] },
    ];

  const handleMainOptionClick = (mainOption) => {
    setBanda(mainOption.label); // Cambia el valor del subdpto
    setActiveOption(mainOption.label);
    setSelectedSubOption(""); // Resetea la opción secundaria seleccionada
  };

  const handleSubOptionClick = (subOption) => {
    setSelectedSubOption(subOption);
    setIsOpenB(false);
  };


  const handleChange = (index, field, value) => {
    const newModelos = [...modelos];
    if (field === "modelo" && newModelos[index].locked) return;
    newModelos[index][field] = value;
    setModelos(newModelos);
  };

 // Función para manejar el cambio de Total Pares y actualizar el estado de Pares Meta
  const handleChangePares = (index, value) => {
    const newModelos = [...modelos];
    
    // Validar que sea número o string vacío
    if (/^\d*$/.test(value)) { 
      const numericValue = value === "" ? 0 : parseInt(value, 10);
      newModelos[index].totalPares = numericValue;
      setModelos(newModelos);
      updateParesMeta(newModelos);
      updateMinutosTotales(newModelos);
      // console.log(newModelos);
    }
  };

  // Función para calcular la suma total de pares
  const updateParesMeta = (newModelos) => {
    const suma = newModelos.reduce((acc, modelo) => {
      const pares = typeof modelo.totalPares === 'number' ? modelo.totalPares : 0;
      return acc + pares;
    }, 0);
    setParesMeta(suma);
  };

  const updateMinutosTotales = (newModelos) => {
    const totalMinutos = newModelos.reduce((acc, modelo) => { 
      const minutaje = parseFloat(modelo.minutaje) || 0;
      // const minutaje = typeof modelo.minutaje === 'number' ? modelo.minutaje : 0;
      const pares = typeof modelo.totalPares === 'number' ? modelo.totalPares : 0;
      const minutosModelo = minutaje * pares;
      return acc + minutosModelo;
    }, 0);
    
    setMinutosTotales(totalMinutos);
  };

  async function obtenerMinutaje( departamento, modelo) {
    try {
      const res = await fetch(
        // `http://192.168.17.24:3000/avances/ModelosPespunte?departamento=${departamento}&modelo=${modelo}`
        `https://159.65.78.91/avances/ModelosPespunte?departamento=${departamento}&modelo=${modelo}`
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          `Error al obtener el minutaje: ${errorData.message || res.statusText}`
        );
      }
      const data = await res.json();
      return data.tiempo_std_min;
    } catch (err) {
      console.error(err);
    }
  }

  async function obtenerMinutajeCorte( departamento, modelo, subdepto) {
    try {
      const res = await fetch(
        `https://159.65.78.91/avances/ModelosCorte?departamento=${departamento}&modelo=${modelo}&subdepto=${subdepto}`
        // `http://192.168.17.24:3000/avances/ModelosCorte?departamento=${departamento}&modelo=${modelo}&subdepto=${subdepto}`
      );
      console.log(res);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          `Error al obtener el minutaje: ${errorData.message || res.statusText}`
        );
      }
      const data = await res.json();
      console.log(data);
      return data.tiempo_std_min;
    } catch (err) {
      console.error(err);
    }
  }

  const handleModeloEnter = async (index, modelo) => {
    if (!modelo.trim()) return;
    console.log(departamento);
    console.log(selectedSubOption);
    if(departamento == "Corte"){
      const minutajeEncontrado = await obtenerMinutajeCorte(departamento, modelo, selectedSubOption);
      const nuevosModelos = [...modelos];
      // nuevosModelos[index].locked = true;
      nuevosModelos[index].minutaje = minutajeEncontrado || "No encontrado";
      setModelos(nuevosModelos);
    } else {
      const minutajeEncontrado = await obtenerMinutaje(departamento, modelo);
      const nuevosModelos = [...modelos];
      // nuevosModelos[index].locked = true;
      nuevosModelos[index].minutaje = minutajeEncontrado || "No encontrado";
      setModelos(nuevosModelos);
    }
  };

  const removeModelo = (index) => {
    const nuevosModelos = [...modelos];
    nuevosModelos.splice(index, 1);
    setModelos(nuevosModelos);
  };

  const addModelo = (index) => {
    const current = modelos[index];
    if (current.modelo.trim()) {
      setModelos([...modelos, { modelo: "", minutaje: "" }]);
    } else {
      alert("Por favor llena ambos campos antes de agregar otro.");
    }
  };

  const handleCalcular = () => {
    const minutos = persona * 576;
    setMinutos(minutos);

    const paresHora = (paresMeta / 9.6).toFixed(0);
    setParesHora(paresHora);

    const velocidad = (3600 / paresHora).toFixed(0);
    setVelocidad(velocidad);

    const eficiencia = ((minutosTotales / minutos)* 100).toFixed(2);
    setEficiencia(eficiencia);

    setMostrarResultados(true);
  };

  const handleReflejarMeta = async () => {
    const nuevoMetaDiaria = {
      ciudad: ciudad,
      departamento: departamento,
      subdepto: selectedSubOption,
      personal: persona,
      modelos: modelos.map(item => item.modelo),
      minutaje: modelos.map(item => item.minutaje),
      pares: modelos.map(item => item.totalPares),
      minutos_trabajados: minutosTotales,
      minutos_disponibles: minutos,
      eficiencia: eficiencia,
      meta_diaria: paresMeta,
      pares_hora: paresHora,
      velocidad_banda: velocidad,
    };

    try {
      const res = await fetch(
        "https://159.65.78.91/avances/ReflejarMeta",
        // "http://192.168.17.24:3000/avances/ReflejarMeta",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoMetaDiaria),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          `Error al reflejar la meta: ${errorData.message || res.statusText}`
        );
      }

      const result = await res.json();
      alert(`Meta reflejada exitosamente!`);
      console.log("Nueva meta reflejada:", result);
    } catch (err) {
      console.error("Error en handleReflejarMeta:", err);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-5xl">
          <h5 className="text-5xl text-center">Asignar Meta</h5>
          <br />
          <div className="flex gap-x-4 justify-center">
            {/* Dropdown Departamento */}
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
            <div className="relative inline-block text-left">
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
                <div className="absolute mt-2 z-10 w-44 divide-y divide-gray-100 rounded-lg shadow-sm bg-[#1F3C40]">
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
            </div>
            <input
              type="text"
              readOnly
              value={departamento}
              className="input-estandar2"
            />

            {/* Dropdown Banda */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setIsOpenB(!isOpenB)}
                className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:outline-none focus:ring-[#9e5026] font-medium rounded-lg text-lg px-5 py-2.5 inline-flex items-center"
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
                  <ul className="py-2 text-lg text-white">
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
                        {banda === mainOption.label && (
                          <div className="absolute left-48 top-0 mt-2 w-44 bg-[#1F3C40] divide-y divide-gray-100 rounded-lg shadow-sm">
                            <ul className="py-2 text-lg text-white">
                              {mainOption.subOptions.map((subOption) => (
                                <li key={subOption}>
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleSubOptionClick(subOption);
                                    }}
                                    className="block px-4 py-2 hover:bg-[#3a5c62] hover:text-white"
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

          <br />
          <div className="justify-center text-lg">
          <div className="items-center justify-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <label className="font-bold">
                Personal: 
              </label>
              <input
                type="text"
                id="default-input"
                className="input-estandar2"
                value={persona}
                onChange={(e) => setPersonal(e.target.value)}
              />
            </div>
          </div>
          <div className="items-center">
            {modelos.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <label className="font-bold">Modelo : </label>
                <input
                  type="text"
                  value={item.modelo}
                  // readOnly={item.locked}
                  onChange={(e) =>
                    handleChange(index, "modelo", e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleModeloEnter(index, item.modelo);
                    }
                  }}
                  className={`input-estandar2`}
                />

                <label className="font-bold">Minutaje:</label>
                <input
                  type="text"
                  value={item.minutaje}
                  readOnly
                  className="input-estandar2"
                />
                <label className="font-bold">Total Pares:</label>
                <input
                  type="text"
                  value={item.totalPares || ""} 
                  onChange={(e) => handleChangePares(index, e.target.value)} 
                  readOnly={false}
                  className="input-estandar2"
                />
                {modelos.length > 1 && (
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => removeModelo(index)}
                  >
                    -
                  </button>
                )}

                {index === modelos.length - 1 && (
                  <button
                    className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                    onClick={() => addModelo(index)}
                  >
                    +
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="text-white bg-[#9e5027] hover:bg-[#c27f57] focus:ring-4 focus:ring-[#c27f57] font-medium rounded-lg text-lg px-5 py-2.5"
                onClick={handleCalcular}
              >
                Calcular
              </button>
            </div>
          </div>
          </div>
          
          {/* </div> */}
          {mostrarResultados && (
            <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <h3 className="text-4xl font-semibold mb-4 text-center">
                Resultados del Cálculo
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Minutos Trabajados Reales
                  </label>
                  <input
                    type="text"
                    className="input-estandar1"
                    value={minutosTotales.toFixed(2)} 
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Minutos Disponibles
                  </label>
                  <input
                    type="text"
                    className="input-estandar1"
                    value={minutos} 
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Pares por Día
                  </label>
                  <input
                    type="text"
                    className="input-estandar1"
                    value={paresMeta}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Pares por Hora
                  </label>
                  <input
                    type="text"
                    className="input-estandar1"
                    value={paresHora} 
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Velocidad de la Banda
                  </label>
                  <input
                    type="text"
                    className="input-estandar1"
                    value={velocidad} 
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Eficiencia
                  </label>
                  <input
                    type="text"
                    className="input-estandar1"
                    value={eficiencia + ` %`} 
                    readOnly
                  />
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                  <button
                    type="button"
                    className="text-white focus:ring-4 focus:ring-[#c27f57] font-medium rounded-lg text-lg px-5 py-2.5 bg-[#9e5027] hover:bg-[#c27f57] focus:outline-none"
                    onClick={handleReflejarMeta}
                  >
                    Reflejar meta
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageFormulario;
