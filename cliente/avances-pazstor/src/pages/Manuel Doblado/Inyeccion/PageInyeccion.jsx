import "flowbite";
import { useEffect } from "react";
import { socket } from "../../../socket";
import {Reloj} from "../../../util/Reloj.jsx";


//Gráficas 4 Dígitos
import GraficaInyeccion from "../../../components/4 Dígitos/Manuel Doblado/Inyeccion/Grafica/GraficaInyeccion.jsx";
import GraficaInyeccion5 from "../../../components/5 Dígitos/Manuel Doblado/Inyeccion/Grafica/GraficaInyeccion5.jsx";


export const PageInyeccion = () => {
  useEffect(() => {
      // Emit para solicitar embarque
      socket.emit("iniciar-verificacion", "inyeccion");
    }, []);
  return (
    <div>
      <br/><br/>
      <section>
      <div className="flex">
              <p className="titulo-produccion w-full">PRODUCCIÓN INYECCIÓN </p>
              &nbsp;&nbsp;
              <Reloj/>
            </div>
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
      </section>
    </div>
  )
}

export default PageInyeccion;
