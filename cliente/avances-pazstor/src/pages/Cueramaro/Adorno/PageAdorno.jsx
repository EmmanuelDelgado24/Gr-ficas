// import React from "react";
import "flowbite";
import { useEffect, useState, useMemo, useCallback} from "react";
import { socket } from "../../../socket";
import {Reloj} from "../../../util/Reloj.jsx";


//Gráficas 4 Dígitos
import AdornoL5 from "../../../components/4 Dígitos/Cueramaro/Adorno/AdornoL5/AdornoL5.jsx";
import AdornoL8 from "../../../components/4 Dígitos/Cueramaro/Adorno/AdornoL8/AdornoL8.jsx";

//Gráficas 5 Dígitos
import Adorno5L5 from "../../../components/5 Dígitos/Cueramaro/Adorno/AdornoL5/AdornoL5.jsx";
import Adorno5L8 from "../../../components/5 Dígitos/Cueramaro/Adorno/AdornoL8/AdornoL8.jsx";

export const PageAdornoCU = () => {
  const departamento = "Adorno";
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
        socket.emit("iniciar-verificacion", "adornoCU");
        ConsultarMeta();
      }, [ConsultarMeta]);

  return (
    <div>
      <br/><br/>
      <div className="flex pb-20">
      <p className="titulo-produccion w-full">PRODUCCIÓN ADORNO </p>
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
                <AdornoL5 />
              </th>
              <th scope="col" className="w-1/3">
                <AdornoL8 />
              </th>
              <th scope="col" className="w-1/3">
                <Adorno5L5 />
              </th>
              <th scope="col" className="w-1/3">
                <Adorno5L8 />
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default PageAdornoCU;
