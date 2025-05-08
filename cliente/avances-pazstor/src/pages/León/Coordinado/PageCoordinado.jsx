import React from "react";
import "flowbite";

//Gráficas 4 Dígitos
import GraficaCoordinado4L1 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-1/GraficaCoordinado4L1.jsx";
import GraficaCoordinado4L2 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-2/GraficaCoordinado4L2.jsx";
import GraficaCoordinado4L4 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-4/GraficaCoordinado4L4.jsx";
import GraficaCoordinado4L5 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-5/GraficaCoordinado4L5.jsx";
import GraficaCoordinado4L6 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-6/GraficaCoordinado4L6.jsx";
import GraficaCoordinado4L7 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-7/GraficaCoordinado4L7.jsx";
import GraficaCoordinado4L8 from "../../../components/4 Dígitos/León/Coordinado/Gráfica/GráficaCoordinado L-8/GraficaCoordinado4L8.jsx";

//Gráficas 5 Dígitos
import GraficaCoordinadoL1 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-1/GraficaCoordinadoL1.jsx";
import GraficaCoordinadoL2 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-2/GraficaCoordinadoL2.jsx";
import GraficaCoordinadoL4 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-4/GraficaCoordinadoL4.jsx";
import GraficaCoordinadoL5 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-5/GraficaCoordinadoL5.jsx";
import GraficaCoordinadoL6 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-6/GraficaCoordinadoL6.jsx";
import GraficaCoordinadoL7 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-7/GraficaCoordinadoL7.jsx";
import GraficaCoordinadoL8 from "../../../components/5 Dígitos/León/Coordinado/Gráficas/GráficaCoordinado L-8/GraficaCoordinadoL8.jsx";

export const PageCoordinado = () => {
  return (
    <div>
      <p class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-dark">
        PRODUCCIÓN COORDINADO
      </p>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                <GraficaCoordinado4L1 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaCoordinado4L2 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaCoordinado4L4 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaCoordinado4L5 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaCoordinado4L6 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaCoordinado4L7 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaCoordinado4L8 />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
              <th scope="row" class="px-6 py-3">
                <GraficaCoordinadoL1 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaCoordinadoL2 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaCoordinadoL4 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaCoordinadoL5 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaCoordinadoL6 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaCoordinadoL7 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaCoordinadoL8 />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageCoordinado;
