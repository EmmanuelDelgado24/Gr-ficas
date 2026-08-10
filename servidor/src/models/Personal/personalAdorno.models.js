 import { poolPromise, sql } from '../../config/dbSql/conectionsql.js';

export async function obtenerPersonalAdorno() {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(
            `SELECT
                l.clave,
                l.registro,
                l.UltimoEStatus,
                l.descarga,
                e.nombre,
                e.apellidopaterno,
                e.apellidomaterno,
                e.email,
                e.departamento,
                e.fechacumple,
                e.puesto,
                e.fechaalta,
                COUNT(*) OVER() AS TotalRegistros
            FROM dbo.logstcpip AS l
            INNER JOIN dbo.empleados AS e
                    ON l.clave = e.clave
                
            WHERE CAST(l.registro AS date) = CAST(GETDATE() AS date) 
                AND l.UltimoEStatus IN('ENTRADA DEL TURNO', 'ENTRADA DEL TURNO FALTA', 'ENTRADA DEL TURNO RETARDO')
                AND e.departamento IN ('PROD AL6')`);

        return result.recordset;

    } catch (error) {
        console.error('Error al obtener personal adorno:', error);
        throw error;
    }
}