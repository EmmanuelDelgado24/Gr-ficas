import "flowbite";
import { useEffect } from "react";
import { socket } from "../../../socket";
import {Reloj} from "../../../util/Reloj.jsx";


//Gráficas 4 Dígitos
import GraficaSuela from "../../../components/4 Dígitos/Manuel Doblado/Suela/Grafica/GraficaSuela.jsx";
import GraficaSuela5 from "../../../components/5 Dígitos/Manuel Doblado/Suela/Grafica/GraficaSuela5.jsx";


export const PageSuela = () => {
  useEffect(() => {
      // Emit para solicitar embarque
      socket.emit("iniciar-verificacion", "suela");
    }, []);
  return (
    <div>
      <br/><br/>
      <section>
      <div className="flex">
              <p className="titulo-produccion w-full">PRODUCCIÓN SUELA </p>
              &nbsp;&nbsp;
              <Reloj/>
            </div>
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
      </section>
    </div>
  )
}

export default PageSuela;
