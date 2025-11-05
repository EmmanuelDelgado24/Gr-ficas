import {executeQuery} from "../../config/4 Dígitos/conection4.js";
import {executeQuery as executeQuery5} from "../../config/5 Dígitos/conection.js";

export class lotesInyeccion {
    static async getAllLotes() {
        const query = `
            SELECT 
                A.AVA_FECHA,
                A.AVA_HORA,
                A.AVA_PROGRAMA, 
                A.AVA_LOTE,
                A.AVA_DEPTO,
                L.LC_PROG,
                L.LC_LOTE,
                L.LC_ESTILO,
                L.LC_PARLOT,
                L.LC_STATUS,
                L.LC_SEMPRO
            FROM LOTCAB L
            INNER JOIN AVANCEAVIOS A
                ON L.LC_PROG = A.AVA_PROGRAMA
                AND L.LC_LOTE = A.AVA_LOTE
                AND A.AVA_DEPTO = 'S0029'
            WHERE A.AVA_FECHA = CURRENT_DATE
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