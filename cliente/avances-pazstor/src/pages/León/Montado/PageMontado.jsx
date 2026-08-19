// import React from "react";
import "flowbite";
import { useEffect, useState, useCallback, useMemo } from "react";
import { socket } from "../../../socket";
import { Reloj } from "../../../util/Reloj.jsx";

import Eficiencia from "../../Ingenieria/Eficiencia.jsx";
import EficienciaProg from "../../Ingenieria/EficienciaProg.jsx";

//Gráficas 4 Dígitos
import MontadoL64 from "../../../components/4 Dígitos/León/Montado/Gráficas/MontadoL64.jsx";
import AuditoriaL64 from "../../../components/4 Dígitos/León/Auditoria/Gráfica/AuditoriaL64.jsx";
import AdornoL64 from "../../../components/4 Dígitos/León/Adorno/Gráficas/AdornoL64.jsx";

//Gráficas 5 Dígitos
import MontadoL6 from "../../../components/5 Dígitos/León/Montado/Gráficas/GráficaMontado L-6/MontadoL6.jsx";
import AdornoL6 from "../../../components/5 Dígitos/León/Adorno/Gráficas/GráficaAdorno L-6/AdornoL6.jsx";
import AuditoriaL6 from "../../../components/5 Dígitos/León/Auditoría/Gráficas/GráficaAuditoria L-6/AuditoriaL6.jsx";

export const PageMontado = () => {
  const departamento = "Montado";
  const ciudad = "León";
  const subdepto = "Linea 6";
  const [metaDiaria, setMetaDiaria] = useState(null);
  //const [empleados, setEmpleados] = useState([]);
  const [empleadosmo, setEmpleadosMon] = useState([]);
  const [empleadosad, setEmpleadosAdo] = useState([]);
  const [totales, setTotales] = useState({
    montado: 0,
    adorno: 0,
    auditoria: 0,
    montado4: 0,
    adorno4: 0,
    auditoria4: 0,
  });


  useEffect(() => {
    socket.emit("iniciar-verificacion", "montado");
    ConsultarMeta();
  }, []);

  const ConsultarMeta = async () => {
    //const apiUrl = `http://192.168.17.25:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    //const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    const apiUrl = `https://api.avances-pazstor.online/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto}&ciudad=${ciudad}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Error HTTP: ${response.status}");
      }

      const data = await response.json();
      console.log("Datos recibidos de la API:", data);
      setMetaDiaria(data.meta_diaria);
    } catch (error) {
      console.error("Error al realizar la consulta:", error);
      console.log(metaDiaria)
    }
  };

  /*useEffect(() => {

    const obtenerEmpleados = async () => {
      //const apiUrl = `https://api.avances-pazstor.online/avances/personaldepto`;
      const apiUrl = `http://192.168.17.25:3000/avances/personaldepto`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al consultar la API");
        }

        const empleados = await response.json();
        console.log("Datos recibidos de la API:", empleados);
        setEmpleados(empleados);
      } catch (error) {
        console.error("Error al realizar la consulta:", error);
      }
    };

    obtenerEmpleados();

    const intervalo = setInterval(obtenerEmpleados, 60000);

    return () => clearInterval(intervalo);

  }, []);*/


  useEffect(() => {

    const obtenerEmpleadosMontado = async () => {
      const apiUrl = `https://api.avances-pazstor.online/avances/personaldepto`;
      //const apiUrl = `http://192.168.17.25:3000/avances/personalmontado`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al consultar la API");
        }

        const empleadosmo = await response.json();
        console.log("Datos recibidos de la API:", empleadosmo);
        setEmpleadosMon(empleadosmo);
      } catch (error) {
        console.error("Error al realizar la consulta:", error);
      }
    };

    obtenerEmpleadosMontado();

    const intervalo = setInterval(obtenerEmpleadosMontado, 60000);

    return () => clearInterval(intervalo);

  }, []);


  useEffect(() => {

    const obtenerEmpleadosAdorno = async () => {
      const apiUrl = `https://api.avances-pazstor.online/avances/personaldepto`;
      //const apiUrl = `http://192.168.17.25:3000/avances/personaladorno`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al consultar la API");
        }

        const empleadosad = await response.json();
        console.log("Datos recibidos de la API:", empleadosad);
        setEmpleadosAdo(empleadosad);
      } catch (error) {
        console.error("Error al realizar la consulta:", error);
      }
    };

    obtenerEmpleadosAdorno();

    const intervalo = setInterval(obtenerEmpleadosAdorno, 60000);

    return () => clearInterval(intervalo);

  }, []);


  const sumarEmpleados = empleadosmo.length + empleadosad.length;

  const sumarEmplaeadosmon = empleadosmo.length;

  const sumarEmpleadosado = empleadosad.length;


  // useCallback para que la referencia no cambie en cada render
  // y no genere loops infinitos en el useEffect del hijo
  const setTotalAuditoria = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, auditoria: valor }));
  }, []);

  /*const setTotalMontado = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, montado: valor }));
  }, []);*/

  const setTotalAuditoria4 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, auditoria4: valor }));
  }, []);

  /*const setTotalMontado4 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, montado4: valor }));
  }, []);*/

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
              PERSONAL MONTADO {sumarEmplaeadosmon}
            </h3>
            <div className="flex flex-col gap-1">
              {empleadosmo.map((empleado, index) => (
                <div key={empleado.id || `${empleado.nombre}-${index}`} className="flex justify-between text-white text-sm">
                  <span>{empleado.nombre}</span>
                  <span>{empleado.apellidopaterno}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Segunda Sección: Personal Adorno */}
          <section className="bg-[#202c34] p-4 rounded-lg">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-700 pb-2">
              PERSONAL ADORNO {sumarEmpleadosado}
            </h5>
            <div className="flex flex-col gap-1">
              {empleadosad.map((empleado, index) => (
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
            <p className="titulo-produccion w-full">PRODUCCIÓN MONTADO - ADORNO  L - 6</p>
            &nbsp;&nbsp;
            <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-125 mx-auto text-center">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">PARES TOTALES</h5>
              <p className="text-6xl text-heading">{sumaGeneral}</p>
            </div>
            &nbsp;&nbsp;
            <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-106 mx-auto text-center">
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">PERSONAL TOTAL</h5>
              <p className="text-6xl text-heading">{sumarEmpleados}</p>
            </div>
            &nbsp;&nbsp;
            <EficienciaProg />
            &nbsp;&nbsp;
            <Eficiencia totalPares={sumaGeneral} />
            &nbsp;&nbsp;
            <Reloj />
          </div>

          <div className="marquee-container w-160">
            <div className="marquee-content w-106">
              <span>Meta asignada: <span className="meta">{metaDiaria || '--'}</span> </span>
            </div>
          </div>

          <div className="py-5 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="block w-full text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
                <tr className="flex items-stretch gap-4 w-full p-2 bg-[#1a2332] h-[55vh]">
                  <th scope="col" className="flex-1 bg-[#202c34] p-2 rounded-xl flex flex-col justify-between items-center h-full text-white">
                    <MontadoL64 />
                  </th>
                  <th scope="col" className="flex-1 bg-[#202c34] p-2 rounded-xl flex flex-col justify-between items-center h-full text-white">
                    <AdornoL64 />
                  </th>
                  <th scope="col" className="flex-1 bg-[#202c34] p-2 rounded-xl flex flex-col justify-between items-center h-full text-white">
                    <AuditoriaL64 onTotalChange={setTotalAuditoria4} />
                  </th>
                  <th scope="col" className="flex-1 bg-[#202c34] p-2 rounded-xl flex flex-col justify-between items-center h-full text-white">
                    <MontadoL6 />
                  </th>
                  <th scope="col" className="flex-1 bg-[#202c34] p-2 rounded-xl flex flex-col justify-between items-center h-full text-white">
                    <AdornoL6 />
                  </th>
                  <th scope="col" className="flex-1 bg-[#202c34] p-2 rounded-xl flex flex-col justify-between items-center h-full text-white">
                    <AuditoriaL6 onTotalChange={setTotalAuditoria} />
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMontado;