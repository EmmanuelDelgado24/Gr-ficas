// import React from "react";
import "flowbite";
import { useEffect, useState} from "react";
import { socket } from "../../../socket";
import {Reloj} from "../../../util/Reloj.jsx";


//Gráficas 4 Dígitos

//Gráficas 5 Dígitos
import MontadoL6 from "../../../components/5 Dígitos/León/Montado/Gráficas/GráficaMontado L-6/MontadoL6.jsx";
import AdornoL6 from "../../../components/5 Dígitos/León/Adorno/Gráficas/GráficaAdorno L-6/AdornoL6.jsx";
import AuditoriaL6 from "../../../components/5 Dígitos/León/Auditoría/Gráficas/GráficaAuditoria L-6/AuditoriaL6.jsx";

export const PageMontado = () => {
  const departamento = "Montado";
  const ciudad = "León";
  const subdepto = "Linea 6"; 
  const [metaDiaria, setMetaDiaria] = useState(null);

  useEffect(() => {
        socket.emit("iniciar-verificacion", "montado");
        ConsultarMeta();
      }, []);

  const ConsultarMeta = async () => {
    // const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al consultar la API");
      }

      const data = await response.json();
      console.log("Datos recibidos de la API:", data);
      setMetaDiaria(data.meta_diaria);
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      // alert(`Error al consultar: ${error.message}`);
    }
  };

  return (
    <div>
      <br/><br/>
      <div className="flex pb-20">
      <p className="titulo-produccion w-full">PRODUCCIÓN MONTADO - ADORNO </p>
      &nbsp;&nbsp;
      <Reloj/>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          <span>Meta asignada: <span className="meta">{metaDiaria || '--'}</span> </span>
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-1/3">
                <MontadoL6 />
              </th>
              <th scope="col" className="w-1/3">
                <AdornoL6 />
              </th>
              <th scope="col" className="w-1/3">
                <AuditoriaL6 />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageMontado;
