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
  { nombre: 'Auditoria-L1', depto: 80, subdepto: 81, origen: "5D"},
  { nombre: 'Auditoria-L2', depto: 80, subdepto: 82, origen: "5D" },    
  { nombre: 'Auditoria-L4', depto: 80, subdepto: 84, origen: "5D"},
  
  { nombre: '4D-Auditoria-L1', depto: 80, subdepto: 81, origen: "4D" }, //Linea 1
  { nombre: '4D-Auditoria-L2', depto: 80, subdepto: 82, origen: "4D" }, //Linea 2
  { nombre: '4D-Auditoria-L4', depto: 80, subdepto: 84, origen: "4D" }, //Linea 4
  
];
