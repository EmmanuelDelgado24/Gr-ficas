import express from 'express';

const app = express(); 

export default app;

// import React, { useState } from "react";

// export const PageFormulario = () => {
//   const [modelos, setModelos] = useState([{ modelo: "", minutaje: "" }]);

//   const handleChange = (index, field, value) => {
//     const newModelos = [...modelos];
//     newModelos[index][field] = value;
//     setModelos(newModelos);
//   };

//   const addModelo = (index) => {
//     const current = modelos[index];
//     if (current.modelo.trim() && current.minutaje.trim()) {
//       setModelos([...modelos, { modelo: "", minutaje: "" }]);
//     } else {
//       alert("Por favor llena ambos campos antes de agregar otro.");
//     }
//   };
//   return (
//     <>
//       <br/><br/>
//       <h1>Formulario</h1>
//       <button id="dropdownDepartamentotButton" data-dropdown-toggle="dropdownDepartamento" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//         Departamento <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//         </svg>
//       </button>
//       <div id="dropdownDepartamento" class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-[#1F3C40]">
//         <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"> 
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Pespunte</a> </li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Corte</a></li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Coordinado</a></li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Montado</a></li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Adorno</a></li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Auditoria</a></li>
//         </ul>
//       </div>
//       <br/><br/>
//       <button id="dropdownBandaButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//         Banda <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//         </svg>
//       </button>
//       <div id="dropdown" class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-[#1F3C40]">
//         <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"> 
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Banda 142</a> </li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Banda 241</a></li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Banda 242</a></li>
//           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#3a5c62] dark:hover:text-white">Banda 243</a></li>
//         </ul>
//       </div>
//     {/* bg-[#3a5c62] */}
//       <br />
//       <div className="space-y-4">
//       {modelos.map((item, index) => (
//         <div key={index} className="flex items-center space-x-2">
//           <label>Modelo:</label>
//           <input
//             className="border-2 p-1"
//             value={item.modelo}
//             onChange={(e) => handleChange(index, "modelo", e.target.value)}
//           />
//           <label>Minutaje:</label>
//           <input
//             className="border-2 p-1"
//             value={item.minutaje}
//             onChange={(e) => handleChange(index, "minutaje", e.target.value)}
//           />
//           {/* Solo muestra el botón "+" en el último grupo */}
//           {index === modelos.length - 1 && (
//             <button
//               className="bg-blue-500 text-white px-2 py-1 rounded"
//               onClick={() => addModelo(index)}
//             >
//               +
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default PageFormulario;
