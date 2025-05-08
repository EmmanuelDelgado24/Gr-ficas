import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const GraficaCorteL2 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/avances/CorteL2")
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
  }, []);

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
      categories: modelos,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
    },
  };

  const series = [{ name: "Pares", data: sumaPorModelo }];

  return (
    <div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : error ? (
        <p style={{ color: "white" }}>Error: {error}</p>
      ) : (
        <div className="max-w-lg p-6 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border-dark-700">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              Gráfica Corte L-2
            </h5>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Pares producidos por día
            </p>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              N° pares {sumaLC_PARLOT}
            </h5>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              Modelo {modelos}
            </h5>
          </div>
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="300px"
          />
        </div>
      )}
    </div>
  );
};

export default GraficaCorteL2;
