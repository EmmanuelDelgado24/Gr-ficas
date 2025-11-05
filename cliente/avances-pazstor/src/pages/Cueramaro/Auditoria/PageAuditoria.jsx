// import React from "react";
import "flowbite";
import { useEffect, useState, useMemo, useCallback} from "react";
import { socket } from "../../../socket";
import {Reloj} from "../../../util/Reloj.jsx";

//Gráficas 4 Dígitos
import AuditoriaL5 from "../../../components/4 Dígitos/Cueramaro/Auditoria/AuditoriaL5/AuditoriaL5.jsx";
import AuditoriaL8 from "../../../components/4 Dígitos/Cueramaro/Auditoria/AuditoriaL8/AuditoriaL8.jsx";

//Gráficas 5 Dígitos
import Auditoria5L5 from "../../../components/5 Dígitos/Cueramaro/Auditoria/AuditoriaL5/AuditoriaL5.jsx";
import Auditoria5L8 from "../../../components/5 Dígitos/Cueramaro/Auditoria/AuditoriaL8/AuditoriaL8.jsx";

export const PageAuditoriaCU = () => {
  const departamento = "Auditoria";
  const ciudad = "Cueramaro";
  const subdeptos = useMemo(() => [
        { nombre: 'Linea 5' },
        { nombre: 'Linea 8' },
      ], []);
      const [metas, setMetas] = useState({});

  const ConsultarMeta = useCallback(async () => {
    try {
      const nuevasMetas = {};
      for (const subdepto of subdeptos) {
        try {
          const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
          // const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al consultar la API");
          }
            
          const data = await response.json();
          // metas[subdepto.nombre] = data.meta_diaria;
          console.log("Datos recibidos de la API:", data);
          nuevasMetas[subdepto.nombre] = data.meta_diaria;

        } catch (error) {
          console.error("Error al realizar la consulta:", error);
          // alert(`Error al consultar: ${error.message}`);
        }      
      }
      setMetas(nuevasMetas);
    } catch(error){
      console.error(error);
    }
  }, [subdeptos, departamento, ciudad]);

  useEffect(() => {
        socket.emit("iniciar-verificacion", "auditoriaCU");
        ConsultarMeta();
      }, [ConsultarMeta]);

  return (
    <div>
      <br/><br/>
      <div className="flex pb-20">
      <p className="titulo-produccion w-full">PRODUCCIÓN AUDITORIA </p>
      &nbsp;&nbsp;
      <Reloj/>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {subdeptos.map((subdepto) => (
            <span key={subdepto.nombre}>
              {"Meta Asignada "}{subdepto.nombre}: <span className="meta">{metas[subdepto.nombre] || '--'}</span> 
              &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
          ))}
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-1/3">
                <AuditoriaL5 />
              </th>
              <th scope="col" className="w-1/3">
                <AuditoriaL8 />
              </th>
              <th scope="col" className="w-1/3">
                <Auditoria5L5 />
              </th>
              <th scope="col" className="w-1/3">
                <Auditoria5L8 />
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default PageAuditoriaCU;
