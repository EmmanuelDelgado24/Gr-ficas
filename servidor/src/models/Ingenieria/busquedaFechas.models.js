import { executeQuery as executeQuery4D } from "../../config/4 Dígitos/conection4.js";

export async function obtenerLotes({ depto, subdepto, dateStart, dateEnd}) {
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
      WHERE A.AV_FECHA BETWEEN '${dateStart}' AND '${dateEnd}'
    `;

    try {
      return await executeQuery4D(query);
    } catch (error) {
        throw new Error(`Error al obtener datos para depto: ${depto} subdepto: ${subdepto}: ${error.message}`);
    }
}

