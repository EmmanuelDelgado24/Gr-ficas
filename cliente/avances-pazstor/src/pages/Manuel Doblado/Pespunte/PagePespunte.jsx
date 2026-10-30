// import React from "react";
import "flowbite";
import { useEffect, useState, useCallback, useMemo } from "react";
import { socket } from "../../../socket";
import {Reloj} from "../../../util/Reloj.jsx";


//Gráficas 4 Dígitos
import GraficaPespunte4L1 from "../../../components/4 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL1/GraficaPespunte4L1.jsx";
import GraficaPespunte4L2 from "../../../components/4 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL2/GraficaPespunte4L2.jsx";
import GraficaPespunte4L4 from "../../../components/4 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL4/GraficaPespunte4L4.jsx";

//Gráficas 5 Dígitos
import GraficaPespunteL1 from "../../../components/5 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL1/GraficaPespunteL1.jsx";
import GraficaPespunteL2 from "../../../components/5 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL2/GraficaPespunteL2.jsx";
import GraficaPespunteL4 from "../../../components/5 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL4/GraficaPespunteL4.jsx";

export const PagePespunteMD = () => {
  const departamento = "Pespunte";
    const ciudad = "Manuel Doblado";
    const subdeptos = useMemo(() => [
      { nombre: 'Banda 1' },
      { nombre: 'Banda 2' },
      { nombre: 'Banda 4' },
    ], []);
    const [metas, setMetas] = useState({});
  
  const ConsultarMeta = useCallback(async () => {
    try {
      const nuevasMetas = {};
      for (const subdepto of subdeptos) {
        try {
          //const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
          // const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
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
    socket.emit("iniciar-verificacion", "pespunteMD");
    ConsultarMeta();
  }, [ConsultarMeta]);

  

  return (
    <div>
      <br/><br/>
      <div className="flex">
        <p className="titulo-produccion w-full">PRODUCCIÓN PESPUNTE MANUEL DOBLADO</p>
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-1/4">
                <div>
                <GraficaPespunte4L1 />
                </div>
              </th>
              <th scope="col" className="w-1/4">
                <div className="">
                <GraficaPespunte4L2 />
                </div>
              </th>
              <th scope="col" className="w-1/4">
                <div className="">
                <GraficaPespunte4L4 />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500">
              <th scope="row" className="w-1/4">
                <div className="">
                <GraficaPespunteL1 />
                </div>
              </th>
              <th scope="row" className="w-1/4">
                <div className="">
                <GraficaPespunteL2/>
                </div>
              </th>
              <th scope="row" className="w-1/4">
                <div className="">
                <GraficaPespunteL4 />
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagePespunteMD;
