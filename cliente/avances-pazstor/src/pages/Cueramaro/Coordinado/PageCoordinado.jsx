// import React from "react";
import "flowbite";
import { useEffect, useState } from "react";
import { socket } from "../../../socket";
import { Reloj } from "../../../util/Reloj.jsx";


//Gráficas 4 Dígitos
import GraficaCoordinado4L2 from "../../../components/4 Dígitos/Cueramaro/Coordinado/GráficaCoordinado4L2/GraficaCoordinado4L2.jsx";
import GraficaCoordinado4L4 from "../../../components/4 Dígitos/Cueramaro/Coordinado/GráficaCoordinado4L4/GraficaCoordinado4L4.jsx";
import GraficaCoordinado4L5 from "../../../components/4 Dígitos/Cueramaro/Coordinado/GráficaCoordinado4L5/GraficaCoordinado4L5.jsx";
import GraficaCoordinado4L8 from "../../../components/4 Dígitos/Cueramaro/Coordinado/GráficaCoordinado4L8/GraficaCoordinado4L8.jsx";

//Gráficas 5 Dígitos
import GraficaCoordinadoL2 from "../../../components/5 Dígitos/Cueramaro/Coordinado/GráficaCoordinadoL2/GraficaCoordinadoL2.jsx";
import GraficaCoordinadoL4 from "../../../components/5 Dígitos/Cueramaro/Coordinado/GráficaCoordinadoL4/GraficaCoordinadoL4.jsx";
import GraficaCoordinadoL5 from "../../../components/5 Dígitos/Cueramaro/Coordinado/GráficaCoordinadoL5/GraficaCoordinadoL5.jsx";
import GraficaCoordinadoL8 from "../../../components/5 Dígitos/Cueramaro/Coordinado/GráficaCoordinadoL8/GraficaCoordinadoL8.jsx";

export const PageCoordinadoCU = () => {
  const departamento = "Coordinado";
  const ciudad = "Cueramaro";
  const subdepto = "General";
  const [metaDiaria, setMetaDiaria] = useState(null);

  const ConsultarMeta = async () => {
    //const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
    //const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    const apiUrl = `https://api.avances-pazstor.online/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
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

  useEffect(() => {
    socket.emit("iniciar-verificacion", "coordinadoCUE");
    ConsultarMeta();
  }, []);

  return (
    <div>
      <br /><br />
      <div className="flex">
        <p className="titulo-produccion w-full">PRODUCCIÓN COORDINADO CUERÁMARO</p>
        &nbsp;&nbsp;
        <Reloj />
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          <span>Meta asignada: <span className="meta">{metaDiaria || '--'}</span> </span>
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-0">
                <GraficaCoordinado4L2 />
              </th>
              <th scope="col" class="px-0">
                <GraficaCoordinado4L4 />
              </th>
              <th scope="col" class="px-0">
                <GraficaCoordinado4L5 />
              </th>
              <th scope="col" class="px-0">
                <GraficaCoordinado4L8 />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
              <th scope="row" class="px-0">
                <GraficaCoordinadoL2 />
              </th>
              <th scope="row" class="px-0">
                <GraficaCoordinadoL4 />
              </th>
              <th scope="row" class="px-0">
                <GraficaCoordinadoL5 />
              </th>
              <th scope="row" class="px-0">
                <GraficaCoordinadoL8 />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageCoordinadoCU;
