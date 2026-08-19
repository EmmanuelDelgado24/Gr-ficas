// import React from "react";
import "flowbite";
import { useEffect, useState, useCallback, useMemo } from "react";
import { socket } from "../../../socket";
import { Reloj } from "../../../util/Reloj.jsx";

import EficienciaCoordinado from "../../Ingenieria/EficienciaCoordinado.jsx";
import EficienciaProgCoordinado from "../../Ingenieria/EficienciaProCoordinado.jsx";

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
  const departamento = "Coordinado";
  const ciudad = "León";
  const subdepto = "General";
  const [metaDiaria, setMetaDiaria] = useState(null);
  const [empleadoscor, setEmpleadosCor] = useState([]);
  const [totales, setTotales] = useState({
    coordinado2: 0,
    coordinado4: 0,
    coordinado6: 0,
    coordinado8: 0,
    coordinado24: 0,
    coordinado44: 0,
    coordinado64: 0,
    coordinado84: 0,

  });

  useEffect(() => {
    socket.emit("iniciar-verificacion", "coordinado");
    ConsultarMeta();
  }, []);

  const ConsultarMeta = async () => {
    //const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    //const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    const apiUrl = `https://api.avances-pazstor.online/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al consultar la API");
      }

      const data = await response.json();
      console.log("Datos recibidos de la API:", data);
      setMetaDiaria(data.meta_diaria);
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      // alert(`Error al consultar: ${error.message}`);
    }
  };

   useEffect(() => {

    const obtenerEmpleadosCoordinado = async () => {
      const apiUrl = `https://api.avances-pazstor.online/avances/personalcoordinado`;
      //const apiUrl = `http://192.168.17.25:3000/avances/personalcoordinado`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al consultar la API");
        }

        const empleadosmo = await response.json();
        console.log("Datos recibidos de la API:", empleadosmo);
        setEmpleadosCor(empleadosmo);
      } catch (error) {
        console.error("Error al realizar la consulta:", error);
      }
    };

    obtenerEmpleadosCoordinado();

    const intervalo = setInterval(obtenerEmpleadosCoordinado, 60000);

    return () => clearInterval(intervalo);

  }, []);

  const sumarEmpleadosCoordinado = empleadoscor.length;

  const setTotalCoordinado2 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado2: valor }));
  }, []);

  const setTotalCoordinado4 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado4: valor }));
  }, []);

  const setTotalCoordinado6 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado6: valor }));
  }, []);

  const setTotalCoordinado8 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado8: valor }));
  }, []);

  const setTotalCoordinado24 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado24: valor }));
  }, []);

  const setTotalCoordinado44 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado44: valor }));
  }, []);

  const setTotalCoordinado64 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado64: valor }));
  }, []);

  const setTotalCoordinado84 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, coordinado84: valor }));
  }, []);


  const sumaGeneral = useMemo(
    () => Object.values(totales).reduce((a, b) => a + b, 0),
    [totales]
  );

  return (
    <div>
      <br /><br />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex gap-2 items-stretch w-full">

        {/* SIDEBAR IZQUIERDO */}
        <aside className="flex flex-col gap-4 w-72 bg-[#1a2332] p-4 rounded-xl border-l-[6px] border-green-500 shadow-xl shrink-0 max-h-[96vh] overflow-y-auto">

          {/* Primera Sección: Personal Montado */}
          <section className="bg-[#202c34] p-4 rounded-lg">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-700 pb-2">
              PERSONAL COORDINADO {sumarEmpleadosCoordinado}
            </h3>
            <div className="flex flex-col gap-1">
              {empleadoscor.map((empleado, index) => (
                <div key={empleado.id || `${empleado.nombre}-${index}`} className="flex justify-between text-white text-sm">
                  <span>{empleado.nombre}</span>
                  <span>{empleado.apellidopaterno}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">


          <div className="flex pb-20">
            <p className="titulo-produccion w-full">PRODUCCIÓN COORDINADO </p>
            &nbsp;&nbsp;
            <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-125 mx-auto text-center">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">PARES TOTALES</h5>
              <p className="text-6xl text-heading">{sumaGeneral}</p>
            </div>
            &nbsp;&nbsp;
            <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-106 mx-auto text-center">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">PERSONAL TOTAL</h5>
              <p className="text-6xl text-heading">{sumarEmpleadosCoordinado}</p>
            </div>
            &nbsp;&nbsp;
            <EficienciaProgCoordinado />
            &nbsp;&nbsp;
            <EficienciaCoordinado totalPares={sumaGeneral} />
            &nbsp;&nbsp;
            <Reloj />
          </div>
          <div className="marquee-container">
            <div className="marquee-content">
              <span>Meta asignada: <span className="meta">{metaDiaria || '--'}</span> </span>
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-0">
                    <GraficaCoordinado4L1 />
                  </th>
                  <th scope="col" class="px-0">
                    <GraficaCoordinado4L2 onTotalChange={setTotalCoordinado24} />
                  </th>
                  <th scope="col" class="px-0">
                    <GraficaCoordinado4L4 onTotalChange={setTotalCoordinado44} />
                  </th>
                  <th scope="col" class="px-0">
                    <GraficaCoordinado4L5 />
                  </th>
                  <th scope="col" class="px-0">
                    <GraficaCoordinado4L6 onTotalChange={setTotalCoordinado64} />
                  </th>
                  <th scope="col" class="px-0">
                    <GraficaCoordinado4L7 />
                  </th>
                  <th scope="col" class="px-0">
                    <GraficaCoordinado4L8 onTotalChange={setTotalCoordinado84} />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500 border-b dark:border-gray-500 border-gray-400">
                  <th scope="row" class="px-0">
                    <GraficaCoordinadoL1 />
                  </th>
                  <th scope="row" class="px-0">
                    <GraficaCoordinadoL2 onTotalChange={setTotalCoordinado2} />
                  </th>
                  <th scope="row" class="px-0">
                    <GraficaCoordinadoL4 onTotalChange={setTotalCoordinado4} />
                  </th>
                  <th scope="row" class="px-0">
                    <GraficaCoordinadoL5 />
                  </th>
                  <th scope="row" class="px-0">
                    <GraficaCoordinadoL6 onTotalChange={setTotalCoordinado6} />
                  </th>
                  <th scope="row" class="px-0">
                    <GraficaCoordinadoL7 />
                  </th>
                  <th scope="row" class="px-0">
                    <GraficaCoordinadoL8 onTotalChange={setTotalCoordinado8} />
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

export default PageCoordinado;
