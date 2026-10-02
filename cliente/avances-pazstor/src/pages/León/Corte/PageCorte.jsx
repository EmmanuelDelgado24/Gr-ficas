import React from 'react';
import "flowbite";
import { useEffect, useState, useCallback, useMemo } from "react";
import { socket } from "../../../socket";
import { Reloj } from "../../../util/Reloj.jsx";

import EficienciaCorte from "../../Ingenieria/EficienciaCorte.jsx";
import EficienciaProCorte from "../../Ingenieria/EficienciaProCorte.jsx";

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
  const departamento = "Corte";
  const ciudad = "León";
  const subdepto = "General";
  /*const subdeptos = useMemo(() => [
    { nombre: 'Piel' },
    { nombre: 'Forro' },
    { nombre: 'Loteo' },
  ], []);*/
  const [metas, setMetas] = useState(null);
  const [empleadoscort, setEmpleadosCort] = useState([]);
  const [totales, setTotales] = useState({
    corte2: 0,
    corte4: 0,
    corte5: 0,
    corte6: 0,
    corte8: 0,
    corte24: 0,
    corte44: 0,
    corte54: 0,
    corte64: 0,
    corte84: 0,

  });


  const ConsultarMeta = async () => {
    //const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
    // const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
    const apiUrl = `https://api.avances-pazstor.online/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al consultar la API");
      }

      const data = await response.json();
      console.log("Datos recibidos de la API:", data);
      setMetas(data.meta_diaria);
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      // alert(`Error al consultar: ${error.message}`);
    }
  };

  /* const ConsultarMeta = useCallback(async () => {
     try {
       const nuevasMetas = {};
       for (const subdepto of subdepto) {
         try {
           //const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
           // const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
           const apiUrl = `https://api.avances-pazstor.online/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
 
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
     } catch (error) {
       console.error(error);
     }
   }, [subdepto, departamento, ciudad]);*/


  useEffect(() => {
    socket.emit("iniciar-verificacion", "corte");
    ConsultarMeta();
  }, []);


  useEffect(() => {

    const obtenerEmpleadosCorte = async () => {
      const apiUrl = `https://api.avances-pazstor.online/avances/personalcorte`;
      //const apiUrl = `http://192.168.17.25:3000/avances/personalcorte`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al consultar la API");
        }
        const empleadoscort = await response.json();
        console.log("Datos recibidos de la API:", empleadoscort);
        setEmpleadosCort(empleadoscort);
        // Aquí puedes hacer algo con los datos recibidos, como actualizar el estado o renderizar información en la interfaz de usuario.
      } catch (error) {
        console.error("Error al realizar la consulta:", error);
      }
    };

    obtenerEmpleadosCorte();

    const intervalo = setInterval(obtenerEmpleadosCorte, 60000);

    return () => clearInterval(intervalo);

  }, []);

  const sumarEmpleadosCorte = empleadoscort.length;

  const setTotalCorte2 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte2: valor }));
  }, []);

  const setTotalCorte4 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte4: valor }));
  }, []);

  const setTotalCorte5 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte5: valor }));
  }, []);

  const setTotalCorte6 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte6: valor }));
  }, []);

  const setTotalCorte8 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte8: valor }));
  }, []);

  const setTotalCorte24 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte24: valor }));
  }, []);

  const setTotalCorte44 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte44: valor }));
  }, []);

  const setTotalCorte54 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte54: valor }));
  }, []);

  const setTotalCorte64 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte64: valor }));
  }, []);

  const setTotalCorte84 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, corte84: valor }));
  }, []);


  const sumaGeneral = useMemo(
    () => Object.values(totales).reduce((a, b) => a + b, 0),
    [totales]
  );


  return (
    <div>
      <br /><br />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex flex-col lg:flex-row gap-2 w-full">


        {/* SIDEBAR IZQUIERDO */}
        <aside className="flex flex-col gap-4 w-full lg:w-72 lg:shrink-0 bg-[#1a2332] p-4 rounded-xl border-l-[6px] border-green-500 shadow-xl max-h-[50vh] lg:max-h-[115vh] overflow-y-auto">
          <section className="bg-[#202c34] p-4 rounded-lg">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-700 pb-2">
              PERSONAL CORTE {sumarEmpleadosCorte}
            </h3>

            <div className="flex flex-col gap-1">
              {empleadoscort.map((empleado, index) => (
                <div
                  key={empleado.id || `${empleado.nombre}-${index}`}
                  className="flex justify-between text-white text-sm"
                >
                  <span>{empleado.nombre}</span>
                  <span>{empleado.apellidopaterno}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">

          {/* TARJETAS SUPERIORES */}
          <div className="flex pb-20">
            <p className="titulo-produccion w-full">
              PRODUCCIÓN CORTE
            </p>

            &nbsp;&nbsp;

            <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-125 mx-auto text-center">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                PARES TOTALES
              </h5>

              <p className="text-6xl text-heading">
                {sumaGeneral}
              </p>
            </div>

            &nbsp;&nbsp;

            <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-106 mx-auto text-center">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                PERSONAL TOTAL
              </h5>

              <p className="text-6xl text-heading">
                {sumarEmpleadosCorte}
              </p>
            </div>

            &nbsp;&nbsp;

            <EficienciaProCorte />

            &nbsp;&nbsp;

            <EficienciaCorte totalPares={sumaGeneral} />

            &nbsp;&nbsp;

            <Reloj />
          </div>

          {/* META */}
          <div className="marquee-container">
            <div className="marquee-content">
              <span>Meta asignada:<span className="meta">{metas || "--"}</span></span>
            </div>
          </div>

          {/* TABLA DE GRÁFICAS */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

              {/* GRÁFICAS 4 DÍGITOS */}
              <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-0">
                    <GraficaCorte4L2
                      onTotalChange={setTotalCorte24}
                    />
                  </th>

                  <th scope="col" className="px-0">
                    <GraficaCorte4L4
                      onTotalChange={setTotalCorte44}
                    />
                  </th>

                  <th scope="col" className="px-0">
                    <GraficaCorte4L5
                      onTotalChange={setTotalCorte54}
                    />
                  </th>

                  <th scope="col" className="px-0">
                    <GraficaCorte4L6
                      onTotalChange={setTotalCorte64}
                    />
                  </th>

                  <th scope="col" className="px-0">
                    <GraficaCorte4L8
                      onTotalChange={setTotalCorte84}
                    />
                  </th>
                </tr>
              </thead>

              {/* GRÁFICAS 5 DÍGITOS */}
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                  <th scope="row" className="px-0">
                    <GraficaCorteL2
                      onTotalChange={setTotalCorte2}
                    />
                  </th>

                  <th scope="row" className="px-0">
                    <GraficaCorteL4
                      onTotalChange={setTotalCorte4}
                    />
                  </th>

                  <th scope="row" className="px-0">
                    <GraficaCorteL5
                      onTotalChange={setTotalCorte5}
                    />
                  </th>

                  <th scope="row" className="px-0">
                    <GraficaCorteL6
                      onTotalChange={setTotalCorte6}
                    />
                  </th>

                  <th scope="row" className="px-0">
                    <GraficaCorteL8
                      onTotalChange={setTotalCorte8}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};


export default PageCorte
