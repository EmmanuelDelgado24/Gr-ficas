import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { socket } from "../../../../../socket";

const AuditoriaL8 = () => {
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
      console.log("Conectado al servidor de WebSockets 4L5 Auditoria");
    });

    // Escuchar evento específico
    socket.on("actualizar-4D-Auditoria-L8", (datos) => {
      console.log("Datos Actualizados en L8");
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

  const options = {
    chart: { id: "basic-bar" },
    xaxis: {
      categories: modelos?.length > 0 ? modelos : ["Sin datos"],
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
          <div className="max-w-lg p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-800 border-dark-700">
            <div>
              <h5 className="leading-none text-3xl font-bold text-white pb-2 text-center">
                Auditoria L-8
              </h5>
              <p className="text-2xl font-normal text-gray-400">
                N° total pares: <span className="font-bold text-white"> {sumaLC_PARLOT} </span>
              </p>
              <p className="text-2xl font-normal text-gray-400">
                Modelos: <br />
                <span className="font-bold text-white"> {modelos.join(', ')} </span>
              </p>
  
              {/* Mensaje si no hay datos */}
              {data.length === 0 && (
                <p className="text-yellow-400 mt-2">No hay datos registrados</p>
              )}
            </div>
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height="250px"
            />
          </div>
      </div>
    );
  };

export default AuditoriaL8;
