// import { useEffect, useState } from "react";
// import Chart from "react-apexcharts";
// import { socket } from "../../../../../../socket";

// const GraficaPespunte244 = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Conexión establecida
//     socket.on("connect", () => {
//       console.log("Conectado al servidor de WebSockets L6");
//       // console.log(socket.id);
//     });

//     // Escuchar evento específico
//     socket.on("actualizar-Pespunte244", (datos) => {                   //Fetch?
//       console.log("Datos Actualizados en L6");
//       if (Array.isArray(datos)) {
//         setData(datos);
//       } else {
//         setError("Datos inválidos recibidos");
//         setData([]);
//       }
//     });

//     // Manejo de error si se desconecta
//     socket.on("disconnect", () => {
//       console.warn("Desconectado del servidor");
//     });

//     return () => {
//       // Limpieza al desmontar el componente
//       setLoading(false);
//       socket.off("connect");
//       socket.off("actualizar-Pespunte244");
//     };
//   }, []);

//   // Obtener modelos únicos
//   const modelos = [...new Set(data.map((item) => item.LC_ESTILO))];

//   // Sumar los pares
//   const calcularSumaLC_PARLOT = (datos) => {
//     if (!datos || datos.length === 0) {
//       return 0;
//     }
//     return datos.reduce((acumulador, item) => acumulador + item.LC_PARLOT, 0);
//   };

//   const sumaLC_PARLOT = calcularSumaLC_PARLOT(data);

//   // Calcular suma de pares por modelo
//   const sumaPorModelo = modelos.map((modelo) => {
//     return data
//       .filter((item) => item.LC_ESTILO === modelo)
//       .reduce((acc, item) => acc + item.LC_PARLOT, 0);
//   });

//   const options = {
//     chart: { id: "basic-bar" },
//     xaxis: {
//       categories: modelos?.length > 0 ? modelos : ["Sin datos"],
//       labels: {
//         show: true,
//         style: {
//           fontFamily: "Inter, sans-serif",
//           cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         show: true,
//         style: {
//           fontFamily: "Inter, sans-serif",
//           cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
//         },
//       },
//     },
//   };

//   const series = [{ name: "Pares", data: sumaPorModelo }];

//   return (
//       <div>
//         {loading ? (
//           <p>Cargando datos...</p>
//         ) : error ? (
//           <p style={{ color: "white" }}>Error: {error}</p>
//         ) : (
//           <div className="max-w-lg p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-800 border-dark-700">
//             <div>
//               <h5 className="leading-none text-3xl font-bold text-white pb-2 text-center">
//                 Pespunte L-6
//               </h5>
//                <p className="text-2xl font-normal text-gray-400">
//                 N° total pares: <span className="font-bold text-white"> {sumaLC_PARLOT} </span>
//               </p>
//               <p className="text-2xl font-normal text-gray-400">
//                 Modelos: 
//                 <span className="font-bold text-white"> {modelos.join(', ')} </span>
//               </p>
  
//               {/* Mensaje si no hay datos */}
//               {data.length === 0 && (
//                 <p className="text-yellow-400 text-xl mt-2">No hay datos registrados</p>
//               )}
//             </div>
//             <Chart
//               options={options}
//               series={series}
//               type="bar"
//               width="100%"
//               height="250px"
//             />
//           </div>
//         )}
//       </div>
//     );
//   };

// export default GraficaPespunte244;
