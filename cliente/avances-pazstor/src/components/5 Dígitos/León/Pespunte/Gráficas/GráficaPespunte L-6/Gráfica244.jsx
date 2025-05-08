import { useEffect, useState } from "react";

//useState: Se usa para almacenar los datos y los errores.

export const GraficaPespunte244 = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/avances/Pespunte244")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  // Extraer datos para el gráfico
  const modelos = [
    ...new Set(
      data.map((item) => item.LC_ESTILO || `Item ${data.indexOf(item) + 1}`)
    ),
  ];
  //const pares = data.map(item => item.LC_PARLOT);

  // Sumar los pares
  const calcularSumaLC_PARLOT = (datos) => {
    if (!datos || datos.length === 0) {
      return 0;
    }
    return datos.reduce((acumulador, item) => acumulador + item.LC_PARLOT, 0);
  };

  const sumaLC_PARLOT = calcularSumaLC_PARLOT(data);

  return (
    <div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : error ? (
        <p style={{ color: "white" }}>Error: {error}</p>
      ) : (
        <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800">
          <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
            <div>
              <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                Gráfica Pespunte L-6
              </h5>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Pares producidos por día
              </p>
            </div>
            <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
              <svg
                className="w-3 h-3 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4"
                />
              </svg>
            </div>
          </div>
          <div id="labels-chart" class="px-2.5">
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              N° pares {sumaLC_PARLOT}
            </h5>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              Modelo {modelos}
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraficaPespunte244;
