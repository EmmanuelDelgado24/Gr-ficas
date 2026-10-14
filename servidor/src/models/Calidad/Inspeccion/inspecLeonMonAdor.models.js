import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

export async function getObtenerMonAdorLeon(){
    const query = `
         SELECT
            i.id_inspeccion,
            c.nombre_ciudad,
            d.nombre_depto,
            sd.nombre_subdepto,
            l.nombre_linea,
            i.fecha,
            ins.nombre_inspector,
            sup.nombre_supervisor,
            i.modelo,
            i.semana,
            i.lote,
            i.pares_inspeccionados,
            cat.nombre_categoria,
            df.nombre_defecto,
            sev.nombre_severidad,
            i.pares_con_defecto,
            op.nombre_operacion,
            i.operador,
            i.descripcion
        FROM inspecciones i
        INNER JOIN ciudades c
            ON c.id_ciudad = i.id_ciudad
        INNER JOIN departamentos d   
            ON d.id_depto = i.id_depto
        INNER JOIN subdepartamentos sd  
            ON sd.id_subdepto = i.id_subdepto
        INNER JOIN lineas l   
            ON l.id_linea = i.id_linea
        INNER JOIN categorias cat 
            ON cat.id_categoria = i.id_categoria
        INNER JOIN defectos df  
            ON df.id_defecto = i.id_defecto
        INNER JOIN severidades sev 
            ON sev.id_severidad = i.id_severidad
        INNER JOIN operaciones op  
            ON op.id_operacion = i.id_operacion
	    INNER JOIN inspectores ins  
            ON ins.id_inspector = i.id_inspector
	    INNER JOIN supervisores sup
            ON sup.id_supervisor = i.id_supervisor
  			AND i.id_depto = 14
        ORDER BY i.fecha DESC;
        `;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de inspecciones montado-adorno león: ${error.message}`);
    }
}

export async function postEliminarInspeccionMontadoAdorno(id_inspeccion) {
    const query = `
        DELETE FROM public.inspecciones
        WHERE id_inspeccion = $1
        RETURNING *
    `;

    try {
        const result = await executeQuery(query, [id_inspeccion]);
        return result.rows[0]; // Retorna el registro eliminado
    } catch (error) {
        throw new Error(`Error al eliminar inspección: ${error.message}`);
    }
}