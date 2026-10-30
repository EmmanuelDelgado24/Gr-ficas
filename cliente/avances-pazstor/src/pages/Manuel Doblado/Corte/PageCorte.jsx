import React from 'react';
import "flowbite";
import { useEffect, useState, useCallback, useMemo } from "react";
import { socket } from "../../../socket";
import {Reloj} from "../../../util/Reloj.jsx";


//Gráficas 4 Dígitos
import GraficaCorte4L1 from "../../../components/4 Dígitos/Manuel Doblado/Corte/GráficaCorteL1/GraficaCorte4L1.jsx";
import GraficaCorte4L2 from "../../../components/4 Dígitos/Manuel Doblado/Corte/GráficaCorteL2/GraficaCorte4L2.jsx";
import GraficaCorte4L4 from "../../../components/4 Dígitos/Manuel Doblado/Corte/GráficaCorteL4/GraficaCorte4L4.jsx";


//Gráficas 5 Dígitos
import GraficaCorteL1 from "../../../components/5 Dígitos/Manuel Doblado/Corte/GráficaCorteL1/GraficaCorteL1.jsx";
import GraficaCorteL2 from "../../../components/5 Dígitos/Manuel Doblado/Corte/GráficaCorteL2/GraficaCorteL2.jsx";
import GraficaCorteL4 from "../../../components/5 Dígitos/Manuel Doblado/Corte/GráficaCorteL4/GraficaCorteL4.jsx";


export const PageCorteMD = () => {
  const departamento = "Corte";
    const ciudad = "Manuel Doblado";
    const subdeptos = useMemo(() => [
      { nombre: 'Piel' },
      { nombre: 'Forro' },
      { nombre: 'Loteo' },
    ], []);
    const [metas, setMetas] = useState({});
  
  const ConsultarMeta = useCallback(async () => {
    try {
      const nuevasMetas = {};
      for (const subdepto of subdeptos) {
        try {
          //const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
          //const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
          const apiUrl = `https://api.avances-pazstor.online/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
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
            socket.emit("iniciar-verificacion", "corteMD");
            ConsultarMeta();
  }, [ConsultarMeta]);
    
  return (
    <div>
      <br/><br/>
      <section>
      <div className="flex">
              <p className="titulo-produccion w-full">PRODUCCIÓN CORTE MANUEL DOBLADO</p>
              &nbsp;&nbsp;
              <Reloj/>
            </div>
            <div className="marquee-container">
        <div className="marquee-content">
          {subdeptos.map((subdepto) => (
            <span key={subdepto.nombre}>
              {"Meta Asignada Corte "}{subdepto.nombre}: <span className="meta">{metas[subdepto.nombre] || '--'}</span> 
              &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
          ))}
        </div>
      </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-0">
                  <GraficaCorte4L1 />
                </th>
                <th scope="col" className="px-0">
                  < GraficaCorte4L2 />
                </th>
                <th scope="col" className="px-0">
                  <GraficaCorte4L4 />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                <th scope="row" className="px-0">
                  <GraficaCorteL1 />
                </th>
                <th scope="row" className="px-0">
                  <GraficaCorteL2 />
                </th>
                <th scope="row" className="px-0">
                  <GraficaCorteL4 />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default PageCorteMD;
