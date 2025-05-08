import {executeQuery} from "../../../../config/4 Dígitos/conection4.js";

export class LotesCoordinadoL6 {
    // Obtener todos los lotes del día actual
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
                AND A.AV_DEPTO = 40
                AND A.AV_SUBDEPTO = 244
                AND A.AV_FECHA = CURRENT_DATE
        `;
        
        try {
            const result = await executeQuery(query);
            return result;
        } catch (error) {
            throw new Error(`Error al obtener lotes: ${error.message}`);
        }
    }
}