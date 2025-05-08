import React from "react";
import "flowbite";

//Gráficas 4 Dígitos
import GraficaPespunte4L1 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaPespunte4L1.jsx";
import GraficaPespunte4L2 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-2/GraficaPespunte4L2.jsx";
import GraficaPespunte4L4 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-4/GraficaPespunte4L4.jsx";
import GraficaPespunte4L5 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-5/GraficaPespunte4L5.jsx";
import GraficaPespunte4L6 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-6/GraficaPespunte4L6.jsx";
import GraficaPespunte4L7 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-7/GraficaPespunte4L7.jsx";
import GraficaPespunte4L8 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-8/GraficaPespunte4L8.jsx";

//Gráficas 5 Dígitos
import GraficaL1 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1.jsx";
import GraficaL1142 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1142.jsx";
import GraficaL2 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-2/GraficaL2.jsx";
import GraficaL4 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-4/GraficaL4.jsx";
import GraficaL5 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-5/GraficaL5.jsx";
import GraficaL6 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-6/GraficaL6.jsx";


export const PagePespunte = () => {
  return (
    <div>
      <p class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-dark">
        PRODUCCIÓN PESPUNTES
      </p>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                <GraficaPespunte4L1 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaPespunte4L2 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaPespunte4L4 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaPespunte4L5 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaPespunte4L6 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaPespunte4L7 />
              </th>
              <th scope="col" class="px-6 py-3">
                <GraficaPespunte4L8 />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
              <th scope="row" class="px-6 py-3">
                <GraficaL1 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaL1142 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaL2 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaL4 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaL5 />
              </th>
              <th scope="row" class="px-6 py-3">
                <GraficaL6 />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagePespunte;
