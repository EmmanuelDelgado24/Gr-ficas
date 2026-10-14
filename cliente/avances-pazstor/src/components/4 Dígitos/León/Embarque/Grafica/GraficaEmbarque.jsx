import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { socket } from "../../../../../socket";

const GraficaEmbarque = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {

      const conectarSocket = () => {
      if (!socket.connected) {
        console.log("Intentando conectar al socket...");
        socket.connect();
      }
    };

    // Intentar conectar inmediatamente
    conectarSocket();

    // Reintentar conexión cada 5 segundos si no está conectado
    const intervalo = setInterval(() => {
      if (!socket.connected) {
        console.warn("Reintentando conexión al socket...");
        conectarSocket();
      }
    }, 5000); 

      // Conexión establecida
      socket.on("connect", () => {
        console.log("Conectado al servidor de WebSockets Embarque");
      });
  
      // Escuchar evento específico
      socket.on("actualizar-embarque", (datos) => {
        console.log("Datos Actualizados en Embarque");
        if (Array.isArray(datos)) {
          setData(datos);
        } else {
          setData([]);
        }
      });
  
      // Manejo de error si se desconecta
      socket.on("disconnect", () => {
        console.warn("Desconectado del servidor");
      });
  
      return () => {
        clearInterval(intervalo);
        socket.off("connect");
        socket.off("actualizar-Pespunte142");
        socket.off("disconnect");
      };

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

  // Configuración dinámica: si hay muchos modelos, ajustamos el tamaño de fuente de las etiquetas de las barras
  const esDenso = modelos.length > 8;

  const options = {
    chart: { 
      id: "basic-bar",
      toolbar: { show: false },
      background: 'transparent'
    },
    colors: ["#3b82f6"],
    plotOptions: {
      bar: {
        borderRadius: esDenso ? 2 : 4,
        columnWidth: esDenso ? '85%' : '60%', // Más ancho si hay muchos para aprovechar el espacio
      }
    },
    dataLabels: {
      enabled: !esDenso,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
        fontWeight: "bold",
        colors: ["#fff"],
      },
      offsetY: -5,
    },
    xaxis: {
      categories: modelos?.length > 0 ? modelos : ["Sin datos"],
      labels: {
        show: true,
        rotate: esDenso ? -55 : -45, // Un poco más de rotación si hay muchos modelos
        style: {
          fontSize: esDenso ? "10px" : "11px", // Ligeramente más pequeño si son muchos
          fontFamily: "Inter, sans-serif",
          colors: "#9ca3af",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#9ca3af",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    grid: {
      borderColor: "#374151", // Gris oscuro para la cuadrícula interna (gray-700)
      strokeDashArray: 4,
    },
    tooltip: {
      theme: "dark",
    }
  };

  const series = [{ name: "Pares", data: sumaPorModelo }];

  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-5 flex flex-col justify-between">
      <div>
        {/* Cabecera */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h5 className="text-2xl font-bold text-white tracking-wide">
              Embarque 5 Dígitos
            </h5>
            <p className="text-sm text-gray-400">
              Pares producidos por día y modelo
            </p>
          </div>
          <span className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-700">
            {modelos.length} Modelos Activos
          </span>
        </div>

        {/* Tarjetas de Resumen Rápido */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-700/50">
            <span className="text-xs text-gray-400 block">N° Total de Pares</span>
            <span className="text-2xl font-extrabold text-blue-400">
              {sumaLC_PARLOT}
            </span>
          </div>
          <div className="bg-gray-900/60 p-3 rounded-lg border border-gray-700/50 flex flex-col justify-center">
            <span className="text-xs text-gray-400 block">Estado de Red</span>
            <span className="text-sm font-medium text-green-400 flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Conectado
            </span>
          </div>
        </div>

        {/* Mensaje si no hay datos */}
        {data.length === 0 && (
          <div className="bg-yellow-900/30 border border-yellow-700 text-yellow-300 text-sm p-3 rounded-lg mb-4 text-center">
            No hay datos registrados en este momento.
          </div>
        )}
      </div>

      {/* Gráfica */}
      <div className="w-full pt-2">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="280px"
        />
      </div>
    </div>
  );
};

export default GraficaEmbarque;
