import {executeQuery} from "../../config/4 Dígitos/conection4.js";
import {executeQuery as executeQuery5} from "../../config/5 Dígitos/conection.js";

export class lotesEmbarque {
    static async getAllLotes() {
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
                AND A.AV_DEPTO = 89
                AND A.AV_FECHA = CURRENT_DATE
        `;

        try {
            const [result4Digits, result5Digits] = await Promise.all([
                executeQuery(query),
                executeQuery5(query)
            ]);
            return {
                lotes4Digitos: result4Digits,
                lotes5Digitos: result5Digits
            };
        } catch (error) {
            throw new Error(`Error al obtener lotes de ambas bases de datos: ${error.message}`);
        }
    }
}