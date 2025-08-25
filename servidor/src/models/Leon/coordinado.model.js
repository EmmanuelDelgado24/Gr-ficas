import { executeQuery as executeQuery5D } from "../../config/5 Dígitos/conection.js";
import { executeQuery as executeQuery4D } from "../../config/4 Dígitos/conection4.js";

export async function obtenerLotes({ depto, subdepto, origen}) {
    const query = `
      SELECT 
        A.AV_FECHA,
        A.AV_HORA,
        A.AV_PROGRAMA, 
        A.AV_LOTE,
        A.AV_DEPTO,
        A.AV_SUBDEPTO,
        L.LC_PROG,
        L.LC_LOTE,
        L.LC_ESTILO,
        L.LC_PARLOT,
        L.LC_STATUS,
        L.LC_SEMPRO
      FROM LOTCAB L
      INNER JOIN AVANCE A
        ON L.LC_PROG = A.AV_PROGRAMA
        AND L.LC_LOTE = A.AV_LOTE
        AND A.AV_DEPTO = ${depto}
        AND A.AV_SUBDEPTO = ${subdepto}
      WHERE A.AV_FECHA = CURRENT_DATE
    `;

    try {
    if (origen === "4D") {
      return await executeQuery4D(query);
    } else {
      return await executeQuery5D(query);
    }
    } catch (error) {
        throw new Error(`Error al obtener datos para depto: ${depto} subdepto: ${subdepto}: ${error.message}`);
    }
}

export const lotesConfig = [
  { nombre: 'CoordinadoL1', depto: 40, subdepto: 242, origen: "5D" },    //Linea 1
  { nombre: 'CoordinadoL2', depto: 40, subdepto: 142, origen: "5D" },    //Linea 2
  { nombre: 'CoordinadoL4', depto: 40, subdepto: 243, origen: "5D" },    //Linea 4 
  { nombre: 'CoordinadoL5', depto: 40, subdepto: 241, origen: "5D" },    //Linea 5
  { nombre: 'CoordinadoL6', depto: 40, subdepto: 244, origen: "5D" },    //Linea 6
  { nombre: 'CoordinadoL7', depto: 40, subdepto:  27, origen: "5D" },    //Linea 7
  { nombre: 'CoordinadoL8', depto: 40, subdepto: 208, origen: "5D" },    //Linea 8

  { nombre: '4D-CoordinadoL1', depto: 40, subdepto: 242, origen: "4D" }, //Linea 1
  { nombre: '4D-CoordinadoL2', depto: 40, subdepto: 142, origen: "4D" }, //Linea 2
  { nombre: '4D-CoordinadoL4', depto: 40, subdepto: 243, origen: "4D" }, //Linea 4
  { nombre: '4D-CoordinadoL5', depto: 40, subdepto: 241, origen: "4D" }, //Linea 5
  { nombre: '4D-CoordinadoL6', depto: 40, subdepto: 244, origen: "4D" }, //Linea 6
  { nombre: '4D-CoordinadoL7', depto: 40, subdepto:  27, origen: "4D" }, //Linea 7
  { nombre: '4D-CoordinadoL8', depto: 40, subdepto: 208, origen: "4D" }, //Linea 8
  // { nombre: 'Pespunte245', depto: 59, subdepto: 96 },
];
