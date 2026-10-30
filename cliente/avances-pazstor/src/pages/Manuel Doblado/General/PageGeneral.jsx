// import React from 'react'
import "flowbite";
import { useEffect } from "react";
import { socket } from "../../../socket";

//Tablas
//Gráficas 4 Dígitos
import GraficaCorte4L1 from "../../../components/4 Dígitos/Manuel Doblado/Corte/GráficaCorteL1/GraficaCorte4L1.jsx";
import GraficaCorte4L2 from "../../../components/4 Dígitos/Manuel Doblado/Corte/GráficaCorteL2/GraficaCorte4L2.jsx";
import GraficaCorte4L4 from "../../../components/4 Dígitos/Manuel Doblado/Corte/GráficaCorteL4/GraficaCorte4L4.jsx";

import GraficaCoordinado4L1 from "../../../components/4 Dígitos/Manuel Doblado/Coordinado/GráficaCoordinadoL1/GraficaCoordinado4L1.jsx";
import GraficaCoordinado4L4 from "../../../components/4 Dígitos/Manuel Doblado/Coordinado/GráficaCoordinadoL4/GraficaCoordinado4L4.jsx";
import GraficaCoordinado4L5 from "../../../components/4 Dígitos/Manuel Doblado/Coordinado/GráficaCoordinadoL5/GraficaCoordinado4L5.jsx";
import GraficaCoordinado4L7 from "../../../components/4 Dígitos/Manuel Doblado/Coordinado/GráficaCoordinadoL7/GraficaCoordinado4L7.jsx";

import GraficaPespunte4L1 from "../../../components/4 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL1/GraficaPespunte4L1.jsx";
import GraficaPespunte4L2 from "../../../components/4 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL2/GraficaPespunte4L2.jsx";
import GraficaPespunte4L4 from "../../../components/4 Dígitos/Manuel Doblado/Pespunte/GráficaPespunteL4/GraficaPespunte4L4.jsx";

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
import GraficaCoordinadoL4 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-4/GraficaCoordinadoL4.jsx";
import GraficaCoordinadoL5 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-5/GraficaCoordinadoL5.jsx";
import GraficaCoordinadoL6 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-6/GraficaCoordinadoL6.jsx";
import GraficaCoordinadoL7 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-7/GraficaCoordinadoL7.jsx";
import GraficaCoordinadoL8 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-8/GraficaCoordinadoL8.jsx";

import GraficaL1 from "../../../components/5 Dígitos/Cueramaro/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1.jsx";
import GraficaL1142 from "../../../components/5 Dígitos/Cueramaro/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1142.jsx";
// import GraficaL2 from "../../../components/5 Dígitos/Cueramaro/Pespunte/Gráficas/GráficaPespunte L-2/GraficaL2.jsx";
import GraficaL4 from "../../../components/5 Dígitos/Cueramaro/Pespunte/Gráficas/GráficaPespunte L-4/GraficaL4.jsx";
import GraficaL5 from "../../../components/5 Dígitos/Cueramaro/Pespunte/Gráficas/GráficaPespunte L-5/GraficaL5.jsx";
import GraficaL6 from "../../../components/5 Dígitos/Cueramaro/Pespunte/Gráficas/GráficaPespunte L-6/GraficaL6.jsx";
import GraficaL8 from "../../../components/5 Dígitos/Cueramaro/Pespunte/Gráficas/GráficaMaquilaL8/GraficaL8.jsx";

//Gráficas 4 Dígitos
import Adorno4L1 from "../../../components/4 Dígitos/Manuel Doblado/Adorno/AdornoL1/Adorno4L1.jsx";
import Adorno4L2 from "../../../components/4 Dígitos/Manuel Doblado/Adorno/AdornoL2/Adorno4L2.jsx";
import Adorno4L4 from "../../../components/4 Dígitos/Manuel Doblado/Adorno/AdornoL4/Adorno4L4.jsx";
import Adorno4L5 from "../../../components/4 Dígitos/Manuel Doblado/Adorno/AdornoL5/Adorno4L5.jsx";
import Auditoria4L1 from "../../../components/4 Dígitos/Manuel Doblado/Auditoria/AuditoriaL1/Auditoria4L1.jsx";
import Auditoria4L2 from "../../../components/4 Dígitos/Manuel Doblado/Auditoria/AuditoriaL2/Auditoria4L2.jsx";
import Auditoria4L4 from "../../../components/4 Dígitos/Manuel Doblado/Auditoria/AuditoriaL4/Auditoria4L4.jsx";
import Auditoria4L5 from "../../../components/4 Dígitos/Manuel Doblado/Auditoria/AuditoriaL5/Auditoria4L5.jsx";
import Montado4L1 from "../../../components/4 Dígitos/Manuel Doblado/Montado/MontadoL1/Montado4L1.jsx";
import Montado4L2 from "../../../components/4 Dígitos/Manuel Doblado/Montado/MontadoL2/Montado4L2.jsx";
import Montado4L4 from "../../../components/4 Dígitos/Manuel Doblado/Montado/MontadoL4/Montado4L4.jsx";
import Montado4L5 from "../../../components/4 Dígitos/Manuel Doblado/Montado/MontadoL5/Montado4L5.jsx";


//Gráficas 5 Dígitos
import Montado5L1 from "../../../components/5 Dígitos/Manuel Doblado/Montado/MontadoL1/MontadoL1.jsx";
import Montado5L2 from "../../../components/5 Dígitos/Manuel Doblado/Montado/MontadoL2/MontadoL2.jsx";
import Montado5L4 from "../../../components/5 Dígitos/Manuel Doblado/Montado/MontadoL4/MontadoL4.jsx";
import Auditoria5L1 from "../../../components/5 Dígitos/Manuel Doblado/Auditoria/AuditoriaL1/AuditoriaL1.jsx";
import Auditoria5L2 from "../../../components/5 Dígitos/Manuel Doblado/Auditoria/AuditoriaL2/AuditoriaL2.jsx";
import Auditoria5L4 from "../../../components/5 Dígitos/Manuel Doblado/Auditoria/AuditoriaL4/AuditoriaL4.jsx";
import Adorno5L1 from "../../../components/5 Dígitos/Manuel Doblado/Adorno/AdornoL1/AdornoL1.jsx";
import Adorno5L2 from "../../../components/5 Dígitos/Manuel Doblado/Adorno/AdornoL2/AdornoL2.jsx";
import Adorno5L4 from "../../../components/5 Dígitos/Manuel Doblado/Adorno/AdornoL4/AdornoL4.jsx";

import GraficaEmbarque5 from "../../../components/5 Dígitos/León/Embarque/Grafica/GraficaEmbarque5.jsx";

import GraficaInyeccion from "../../../components/4 Dígitos/Manuel Doblado/Inyeccion/Grafica/GraficaInyeccion.jsx";
import GraficaInyeccion5 from "../../../components/5 Dígitos/Manuel Doblado/Inyeccion/Grafica/GraficaInyeccion5.jsx";
import GraficaPreacabado from "../../../components/4 Dígitos/Manuel Doblado/Preacabado/Grafica/GraficaPreacabado.jsx";
import GraficaPreacabado5 from "../../../components/5 Dígitos/Manuel Doblado/Preacabado/Grafica/GraficaPreacabado5.jsx";
import GraficaSuela from "../../../components/4 Dígitos/Manuel Doblado/Suela/Grafica/GraficaSuela.jsx";
import GraficaSuela5 from "../../../components/5 Dígitos/Manuel Doblado/Suela/Grafica/GraficaSuela5.jsx";


export const PageGeneralMD = () => {
  useEffect(() => {
    socket.emit("iniciar-verificacion", "generalMD");
  }, []);
  return (
    <div>
      <br /><br />
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
              </tr>
            </tbody>
          </table>
        </div>
        <br />
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
                  <GraficaCoordinado4L4 />
                </th>
                <th scope="col">
                  <GraficaCoordinado4L5 />
                </th>
                <th scope="col">
                  <GraficaCoordinado4L7 />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                <th scope="row">
                  <GraficaCoordinadoL1 />
                </th>
                <th scope="row">
                  <GraficaCoordinadoL4 />
                </th>
                <th scope="row">
                  <GraficaCoordinadoL5 />
                </th>
                <th scope="row">
                  <GraficaCoordinadoL7 />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="titulo-produccion">
          PRODUCCIÓN PESPUNTES
        </p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                    <GraficaL1 />
                  </div>
                </th>
                <th scope="row" className="w-1/4">
                  <div className="">
                    <GraficaL1142 />
                  </div>
                </th>
                <th scope="row" className="w-1/4">
                  <div className="">
                    <GraficaL4 />
                  </div>
                </th>
                <th scope="row" className="w-1/4">
                  <div className="">
                    <GraficaL5 />
                  </div>
                </th>
                <th scope="row" className="w-1/4">
                  <div className="">
                    <GraficaL6 />
                  </div>
                </th>
                <th scope="row" className="w-1/4">
                  <div className="">
                    <GraficaL8 />
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p className="titulo-produccion">
          PRODUCCIÓN MONTADO
        </p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-1/3">
                  <Montado4L1 />
                </th>
                <th scope="col" className="w-1/3">
                  <Montado4L2 />
                </th>
                <th scope="col" className="w-1/3">
                  <Montado4L4 />
                </th>
                 <th scope="col" className="w-1/3">
                  <Montado4L5 />
                </th>
              </tr>
              <tr>
                <th scope="col" className="w-1/3">
                  <Montado5L1 />
                </th>
                <th scope="col" className="w-1/3">
                  <Montado5L2 />
                </th>
                <th scope="col" className="w-1/3">
                  <Montado5L4 />
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <br />
        <p className="titulo-produccion">
          PRODUCCIÓN ADORNO
        </p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-1/3">
                  <Adorno4L1 />
                </th>
                <th scope="col" className="w-1/3">
                  <Adorno4L2 />
                </th>
                <th scope="col" className="w-1/3">
                  <Adorno4L4 />
                </th>
                <th scope="col" className="w-1/3">
                  <Adorno4L5 />
                </th>
              </tr>
              <tr>
                <th scope="col" className="w-1/3">
                  <Adorno5L1 />
                </th>
                <th scope="col" className="w-1/3">
                  <Adorno5L2 />
                </th>
                <th scope="col" className="w-1/3">
                  <Adorno5L4 />
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <br />
        <p className="titulo-produccion">
          PRODUCCIÓN AUDITORIA
        </p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
              <tr>
                <th scope="col" className="w-1/3">
                  <Auditoria4L1 />
                </th>
                <th scope="col" className="w-1/3">
                  <Auditoria4L2 />
                </th>
                <th scope="col" className="w-1/3">
                  <Auditoria4L4 />
                </th>
                <th scope="col" className="w-1/3">
                  <Auditoria4L5 />
                </th>
              </tr>
              <tr>
                <th scope="col" className="w-1/3">
                  <Auditoria5L1 />
                </th>
                <th scope="col" className="w-1/3">
                  <Auditoria5L2 />
                </th>
                <th scope="col" className="w-1/3">
                  <Auditoria5L4 />
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div>
          <br />
          <p className="titulo-produccion">
            PRODUCCIÓN INYECCIÓN
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                <tr>
                  <th scope="col" className="w-1/2 px-0">
                    <GraficaInyeccion />
                  </th>
                  <th scope="col" className="w-1/2 px-0">
                    <GraficaInyeccion5 />
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div>
          <br />
          <p className="titulo-produccion">
            PRODUCCIÓN PREACABADO
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                <tr>
                  <th scope="col" className="w-1/2 px-0">
                    <GraficaPreacabado />
                  </th>
                  <th scope="col" className="w-1/2 px-0">
                    <GraficaPreacabado5 />
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div>
          <br />
          <p className="titulo-produccion">
            PRODUCCIÓN SUELA
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                <tr>
                  <th scope="col" className="w-1/2 px-0">
                    <GraficaSuela />
                  </th>
                  <th scope="col" className="w-1/2 px-0">
                    <GraficaSuela5 />
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div>
          <br />
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

export default PageGeneralMD;
