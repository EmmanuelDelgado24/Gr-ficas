// import React from "react";
import "flowbite";
import { useEffect, useState, useCallback, useMemo } from "react";
import { socket } from "../../../socket";
import { Reloj } from "../../../util/Reloj.jsx";

//Gráficas 4 Dígitos
import GraficaPespunte4L1 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaPespunte4L1.jsx";
import GraficaPespunte4L2 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-2/GraficaPespunte4L2.jsx";
import GraficaPespunte4L4 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-4/GraficaPespunte4L4.jsx";
import GraficaPespunte4L5 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-5/GraficaPespunte4L5.jsx";
import GraficaPespunte4L8 from "../../../components/4 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-8/GraficaPespunte4L8.jsx";

//Gráficas 5 Dígitos
import GraficaL1 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1.jsx";
import GraficaL1142 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-1/GraficaL1142.jsx";
import GraficaL4 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-4/GraficaL4.jsx";
import GraficaL5 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaPespunte L-5/GraficaL5.jsx";
import GraficaL8 from "../../../components/5 Dígitos/León/Pespunte/Gráficas/GráficaMaquilaL8/GraficaL8.jsx";

export const PagePespunte = () => {
  const departamento = "Pespunte";
  const ciudad = "León";
  const subdeptos = useMemo(() => [
    { nombre: 'Banda 241' },
    { nombre: 'Banda 242' },
    { nombre: 'Banda 243' },
    { nombre: 'Banda 244' },
    { nombre: 'Banda 245' },
    { nombre: 'Banda 246' },
  ], []);
  const [metas, setMetas] = useState({});
  const [totales, setTotales] = useState({
    pespunte41: 0,
    pespunte42: 0,
    pespunte44: 0,
    pespunte45: 0,
    pespunte48: 0,
    pespunte1: 0,
    pespunte2: 0,
    pespunte4: 0,
    pespunte5: 0,
    pespunte8: 0,

  });

  const ConsultarMeta = useCallback(async () => {
    try {
      const nuevasMetas = {};
      for (const subdepto of subdeptos) {
        try {
          //const apiUrl = `http://192.168.17.24:3000/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
          //const apiUrl = `https://159.65.78.91/avances/ReflejarMeta?departamento=${departamento}&subdepto=${subdepto.nombre}&ciudad=${ciudad}`;
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
  }, [subdeptos, departamento, ciudad]);

  useEffect(() => {
    socket.emit("iniciar-verificacion", "pespunte");
    ConsultarMeta();
  }, [ConsultarMeta]);

  const setTotalPespunte41 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte41: valor }));
  }, []);

  const setTotalPespunte42 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte42: valor }));
  }, []);

  const setTotalPespunte44 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte44: valor }));
  }, []);

  const setTotalPespunte45 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte45: valor }));
  }, []);

  const setTotalPespunte48 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte48: valor }));
  }, []);


  const setTotalPespunte1 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte1: valor }));
  }, []);

  const setTotalPespunte2 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte2: valor }));
  }, []);

  const setTotalPespunte4 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte4: valor }));
  }, []);

  const setTotalPespunte5 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte5: valor }));
  }, []);

  const setTotalPespunte8 = useCallback((valor) => {
    setTotales((prev) => ({ ...prev, pespunte8: valor }));
  }, []);

  const sumaGeneral = useMemo(
      () => Object.values(totales).reduce((a, b) => a + b, 0),
      [totales]
    );

  return (
    <div>
      <br /><br />
      <div className="flex">
        <p className="titulo-produccion w-full">PRODUCCIÓN PESPUNTE LEÓN</p>
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
        <Reloj />
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {subdeptos.map((subdepto) => (
            <span key={subdepto.nombre}>
              {"Meta Asignada "}{subdepto.nombre}: <span className="meta">{metas[subdepto.nombre] || '--'}</span>
              &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray-400">
            <tr>
              <th scope="col" className="w-1/4">
                <div>
                  <GraficaPespunte4L1
                    onTotalChange={setTotalPespunte41} />
                </div>
              </th>
              <th scope="col" className="w-1/4">
                <div className="">
                  <GraficaPespunte4L2
                    onTotalChange={setTotalPespunte42} />
                </div>
              </th>
              <th scope="col" className="w-1/4">
                <div className="">
                  <GraficaPespunte4L4
                    onTotalChange={setTotalPespunte44} />
                </div>
              </th>
              <th scope="col" className="w-1/4">
                <div className="">
                  <GraficaPespunte4L5
                    onTotalChange={setTotalPespunte45} />
                </div>
              </th>
              <th scope="col" className="w-1/4">
                <div className="">
                  <GraficaPespunte4L8
                    onTotalChange={setTotalPespunte48} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-50 even:bg-gray-50 even:dark:bg-gray-500">
              <th scope="row" className="w-1/4">
                <div className="">
                  <GraficaL1
                   onTotalChange={setTotalPespunte1} />
                </div>
              </th>
              <th scope="row" className="w-1/4">
                <div className="">
                  <GraficaL1142
                   onTotalChange={setTotalPespunte2} />
                </div>
              </th>
              <th scope="row" className="w-1/4">
                <div className="">
                  <GraficaL4
                   onTotalChange={setTotalPespunte4} />
                </div>
              </th>
              <th scope="row" className="w-1/4">
                <div className="">
                  <GraficaL5
                   onTotalChange={setTotalPespunte5} />
                </div>
              </th>
              <th scope="row" className="w-1/4">
                <div className="">
                  <GraficaL8
                   onTotalChange={setTotalPespunte8} />
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PagePespunte;
