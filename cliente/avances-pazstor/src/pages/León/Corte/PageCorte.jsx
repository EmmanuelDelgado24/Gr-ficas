import React from 'react';
import "flowbite";

//Gráficas 4 Dígitos
import GraficaCorte4L1 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-1/GraficaCorte4L1.jsx";
import GraficaCorte4L2 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-2/GraficaCorte4L2.jsx";
import GraficaCorte4L4 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-4/GraficaCorte4L4.jsx";
import GraficaCorte4L5 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-5/GraficaCorte4L5.jsx";
import GraficaCorte4L6 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-6/GraficaCorte4L6.jsx";
import GraficaCorte4L7 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-7/GraficaCorte4L7.jsx";
import GraficaCorte4L8 from "../../../components/4 Dígitos/León/Corte/Gráficas/GráficaCorte L-8/GraficaCorte4L8.jsx";

//Gráficas 5 Dígitos
import GraficaCorteL1 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-1/GraficaCorteL1.jsx";
import GraficaCorteL2 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-2/GraficaCorteL2.jsx";
import GraficaCorteL4 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-4/GraficaCorteL4.jsx";
import GraficaCorteL5 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-5/GraficaCorteL5.jsx";
import GraficaCorteL6 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-6/GraficaCorteL6.jsx";
import GraficaCorteL7 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-7/GraficaCorteL7.jsx";
import GraficaCorteL8 from "../../../components/5 Dígitos/León/Corte/Gráficas/GráficaCorte L-8/GraficaCorteL8.jsx";

export const PageCorte = () => {
  return (
    <div>
      <section>
        <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-dark">
          PRODUCCIÓN CORTE
        </p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <GraficaCorte4L1 />
                </th>
                <th scope="col" className="px-6 py-3">
                  <GraficaCorte4L2 />
                </th>
                <th scope="col" className="px-6 py-3">
                  <GraficaCorte4L4 />
                </th>
                <th scope="col" className="px-6 py-3">
                  <GraficaCorte4L5 />
                </th>
                <th scope="col" className="px-6 py-3">
                  <GraficaCorte4L6 />
                </th>
                <th scope="col" className="px-6 py-3">
                  <GraficaCorte4L7 />
                </th>
                <th scope="col" className="px-6 py-3">
                  <GraficaCorte4L8 />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                <th scope="row" className="px-6 py-3">
                  <GraficaCorteL1 />
                </th>
                <th scope="row" className="px-6 py-3">
                  <GraficaCorteL2 />
                </th>
                <th scope="row" className="px-6 py-3">
                  <GraficaCorteL4 />
                </th>
                <th scope="row" className="px-6 py-3">
                  <GraficaCorteL5 />
                </th>
                <th scope="row" className="px-6 py-3">
                  <GraficaCorteL6 />
                </th>
                <th scope="row" className="px-6 py-3">
                  <GraficaCorteL7 />
                </th>
                <th scope="row" className="px-6 py-3">
                  <GraficaCorteL8 />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default PageCorte
