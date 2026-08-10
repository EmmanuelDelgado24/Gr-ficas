import { poolPromise, sql } from '../../config/dbSql/conectionsql.js';

export async function obtenerPersonalCorte() {
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
                AND l.UltimoEStatus IN('ENTRADA DEL TURNO')
                AND e.departamento IN ('PROD CD', 'PROD CT212', 'PROD CT213', 'PROD CT214', 'PROD CT215')`);

        return result.recordset;

    } catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        throw error;
    }
}