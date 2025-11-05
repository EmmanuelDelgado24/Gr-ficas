// import React from 'react'
import "flowbite";
import { useEffect } from "react";
import { socket } from "../../../socket";

//Tablas
//import { Pespunte241 } from "./components/5 Dígitos/León/Pespunte/Tablas/TablaPespunte L-5/Pespunte241.jsx";
//import { Pespunte242 } from "./components/5 Dígitos/León/Pespunte/Tablas/TablaPespunte L-1/Pespunte242.jsx";
//import { Pespunte243 } from "./components/5 Dígitos/León/Pespunte/Tablas/TablaPespunte L-2/Pespunte243.jsx";
//import { Pespunte245 } from "./components/5 Dígitos/León/Pespunte/Tablas/TablaPespunte L-6/Pespunte245.jsx";
//import { Pespunte244 } from "./components/5 Dígitos/León/Pespunte/Tablas/TablaPespunte L-6/Pespunte244.jsx";

//Gráficas 4 Dígitos
import GraficaCorte4L1 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-1/GraficaCorte4L1.jsx";
import GraficaCorte4L2 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-2/GraficaCorte4L2.jsx";
import GraficaCorte4L4 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-4/GraficaCorte4L4.jsx";
import GraficaCorte4L5 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-5/GraficaCorte4L5.jsx";
import GraficaCorte4L6 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-6/GraficaCorte4L6.jsx";
import GraficaCorte4L7 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-7/GraficaCorte4L7.jsx";
import GraficaCorte4L8 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-8/GraficaCorte4L8.jsx";
import GraficaCoordinado4L1 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-1/GraficaCoordinado4L1.jsx";
import GraficaCoordinado4L2 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-2/GraficaCoordinado4L2.jsx";
// import GraficaCoordinado4L4 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-4/GraficaCoordinado4L4.jsx";
import GraficaCoordinado4L5 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-5/GraficaCoordinado4L5.jsx";
import GraficaCoordinado4L6 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-6/GraficaCoordinado4L6.jsx";
import GraficaCoordinado4L7 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-7/GraficaCoordinado4L7.jsx";
import GraficaCoordinado4L8 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-8/GraficaCoordinado4L8.jsx";
import GraficaPespunte4L1 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaPespunte4L1.jsx";
import GraficaPespunte4L2 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-2/GraficaPespunte4L2.jsx";
import GraficaPespunte4L4 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-4/GraficaPespunte4L4.jsx";
// import GraficaPespunte4L5 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-5/GraficaPespunte4L5.jsx";
import GraficaPespunte4L6 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-6/GraficaPespunte4L6.jsx";
// import GraficaPespunte4L7 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-7/GraficaPespunte4L7.jsx";
// import GraficaPespunte4L8 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-8/GraficaPespunte4L8.jsx";
import GraficaEmbarque from "../../../components/4 Dígitos/León/Embarque/Grafica/GraficaEmbarque.jsx";

//Gráficas 5 Dígitos
import GraficaCorteL1 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-1/GraficaCorteL1.jsx";
import GraficaCorteL2 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-2/GraficaCorteL2.jsx";
import GraficaCorteL4 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-4/GraficaCorteL4.jsx";
import GraficaCorteL5 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-5/GraficaCorteL5.jsx";
import GraficaCorteL6 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-6/GraficaCorteL6.jsx";
import GraficaCorteL7 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-7/GraficaCorteL7.jsx";
import GraficaCorteL8 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-8/GraficaCorteL8.jsx";
import GraficaCoordinadoL1 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-1/GraficaCoordinadoL1.jsx";
import GraficaCoordinadoL2 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-2/GraficaCoordinadoL2.jsx";
// import GraficaCoordinadoL4 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-4/GraficaCoordinadoL4.jsx";
import GraficaCoordinadoL5 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-5/GraficaCoordinadoL5.jsx";
import GraficaCoordinadoL6 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-6/GraficaCoordinadoL6.jsx";
import GraficaCoordinadoL7 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-7/GraficaCoordinadoL7.jsx";
import GraficaCoordinadoL8 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-8/GraficaCoordinadoL8.jsx";
import GraficaL1 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1.jsx";
import GraficaL1142 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1142.jsx";
// import GraficaL2 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-2/GraficaL2.jsx";
import GraficaL4 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-4/GraficaL4.jsx";
// import GraficaL5 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-5/GraficaL5.jsx";
import GraficaL6 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-6/GraficaL6.jsx";
import MontadoL6 from "../../../components/5 Dígitos/León/Montado/Gráficas/GráficaMontado L-6/MontadoL6.jsx";
import AdornoL6 from "../../../components/5 Dígitos/León/Adorno/Gráficas/GráficaAdorno L-6/AdornoL6.jsx";
import AuditoriaL6 from "../../../components/5 Dígitos/León/Auditoría/Gráficas/GráficaAuditoria L-6/AuditoriaL6.jsx";
import GraficaEmbarque5 from "../../../components/5 Dígitos/León/Embarque/Grafica/GraficaEmbarque5.jsx";


export const PageGeneral = () => {
  useEffect(() => {
    socket.emit("iniciar-verificacion", "general");
  }, []);
  return (
    <div>
      <br/><br/>
      <section>
            <p className="titulo-produccion">
              PRODUCCIÓN CORTE
            </p>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                  <tr>
                    <th scope="col">
                      <GraficaCorte4L1 />
                    </th>
                    <th scope="col">
                      <GraficaCorte4L2 />
                    </th>
                    <th scope="col">
                      <GraficaCorte4L4 />
                    </th>
                    <th scope="col">
                      <GraficaCorte4L5 />
                    </th>
                    <th scope="col">
                      <GraficaCorte4L6 />
                    </th>
                    <th scope="col">
                      <GraficaCorte4L7 />
                    </th>
                    <th scope="col">
                      <GraficaCorte4L8 />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                    <th scope="row">
                      <GraficaCorteL1 />
                    </th>
                    <th scope="row">
                      <GraficaCorteL2 />
                    </th>
                    <th scope="row">
                      <GraficaCorteL4 />
                    </th>
                    <th scope="row">
                      <GraficaCorteL5 />
                    </th>
                    <th scope="row">
                      <GraficaCorteL6 />
                    </th>
                    <th scope="row">
                      <GraficaCorteL7 />
                    </th>
                    <th scope="row">
                      <GraficaCorteL8 />
                    </th>
                  </tr>
                </tbody>
              </table>
            </div> 
            <br/>
            <p className="titulo-produccion">
              PRODUCCIÓN COORDINADO
            </p>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                  <tr>
                    <th scope="col">
                      <GraficaCoordinado4L1 />
                    </th>
                    <th scope="col">
                      <GraficaCoordinado4L2 />
                    </th>
                    {/* <th scope="col">
                      <GraficaCoordinado4L4 />
                    </th> */}
                    <th scope="col">
                      <GraficaCoordinado4L5 />
                    </th>
                    <th scope="col">
                      <GraficaCoordinado4L6 />
                    </th>
                    <th scope="col">
                      <GraficaCoordinado4L7 />
                    </th>
                    <th scope="col">
                      <GraficaCoordinado4L8 />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                    <th scope="row">
                      <GraficaCoordinadoL1 />
                    </th>
                    <th scope="row">
                      <GraficaCoordinadoL2 />
                    </th>
                    {/* <th scope="row">
                      <GraficaCoordinadoL4 />
                    </th> */}
                    <th scope="row">
                      <GraficaCoordinadoL5 />
                    </th>
                    <th scope="row">
                      <GraficaCoordinadoL6 />
                    </th>
                    <th scope="row">
                      <GraficaCoordinadoL7 />
                    </th>
                    <th scope="row">
                      <GraficaCoordinadoL8 />
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <br/>
            <p className="titulo-produccion">
              PRODUCCIÓN PESPUNTES
            </p>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                  <tr>
                    <th scope="col">
                      <GraficaPespunte4L1 />
                    </th>
                    <th scope="col">
                      <GraficaPespunte4L2 />
                    </th>
                    <th scope="col">
                      <GraficaPespunte4L4 />
                    </th>
                    {/* <th scope="col">
                      <GraficaPespunte4L5 />
                    </th> */}
                    <th scope="col">
                      <GraficaPespunte4L6 />
                    </th>
                    {/* <th scope="col">
                      <GraficaPespunte4L7 />
                    </th>
                    <th scope="col">
                      <GraficaPespunte4L8 />
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                    <th scope="row">
                      <GraficaL1 />
                    </th>
                    <th scope="row">
                      <GraficaL1142 />
                    </th>
                    <th scope="row">
                      <GraficaL4 />
                    </th>
                    {/* <th scope="row">
                      <GraficaL5 />
                    </th> */}
                    <th scope="row">
                      <GraficaL6 />
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <br/>
            <p className="titulo-produccion">
              PRODUCCIÓN MONTADO - ADORNO 
            </p>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                  <tr>
                    <th scope="col">
                      <MontadoL6 />
                    </th>
                    <th scope="col">
                      <AdornoL6 />
                    </th>
                    <th scope="col">
                      <AuditoriaL6 />
                    </th>
                  </tr>  
                </thead>
                <tbody>
                  <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
            <br/>
            <p className="titulo-produccion">
              PRODUCCIÓN EMBARQUE
            </p>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                    <th scope="col" className="px-0">
                      <GraficaEmbarque />
                    </th>
                    <th scope="col" className="px-0">
                      <GraficaEmbarque5 />
                    </th>
                </thead>
              </table>
            </div>
          </div>
          </section>
    </div>
  )
}

export default PageGeneral
