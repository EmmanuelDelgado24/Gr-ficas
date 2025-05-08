import React from "react";
import "flowbite";

//Gráficas 4 Dígitos

//Gráficas 5 Dígitos
import MontadoL6 from "../../../components/5 Dígitos/León/Montado/Gráficas/GráficaMontado L-6/MontadoL6.jsx";
import AdornoL6 from "../../../components/5 Dígitos/León/Adorno/Gráficas/GráficaAdorno L-6/AdornoL6.jsx";
import AuditoriaL6 from "../../../components/5 Dígitos/León/Auditoría/Gráficas/GráficaAuditoria L-6/AuditoriaL6.jsx";

export const PageMontado = () => {
  return (
    <div>
      <p class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
        PRODUCCIÓN MONTADO-ADORNO
      </p>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <th scope="col" class="px-6 py-3">
              <MontadoL6 />
            </th>
            <th scope="col" class="px-6 py-3">
              <AdornoL6 />
            </th>
            <th scope="col" class="px-6 py-3">
              <AuditoriaL6 />
            </th>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageMontado;
