import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

// GET - Obtener todas las inspecciones
export async function getObtenerInspecciones() {
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
        ORDER BY i.fecha DESC;
        `;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de inspecciones: ${error.message}`);
    }
}

// POST - Crear categoría
export async function postCrearInspeccion(datos) {

    const { id_ciudad, id_depto, id_subdepto, id_linea,
        fecha, id_inspector, modelo, semana, lote, pares_inspeccionados, id_categoria, id_defecto,
        id_severidad, pares_con_defecto, id_operacion, operador, descripcion, id_supervisor } = datos;

    const query = `
    INSERT INTO public.inspecciones(id_ciudad, id_depto, id_subdepto, id_linea,
    fecha, id_inspector, modelo, semana, lote, pares_inspeccionados, id_categoria, 
    id_defecto, id_severidad, pares_con_defecto, id_operacion, operador, descripcion, id_supervisor)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
        RETURNING *
    `;

    const values = [id_ciudad, id_depto, id_subdepto, id_linea, fecha, id_inspector, modelo,
        semana, lote, pares_inspeccionados, id_categoria, id_defecto, id_severidad,
        pares_con_defecto, id_operacion, operador, descripcion, id_supervisor,];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al crear inspección: ${error.message}`);
    }
}

export async function postEliminarInspeccion(id_inspeccion) {
    const query = `
        DELETE FROM public.inspecciones
        WHERE id_inspeccion = $1
        RETURNING *
    `;

    try {
        const result = await executeQuery(query, [id_inspeccion]);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al eliminar la inspección: ${error.message}`);
    }
}


export async function getObtenerLeonPorID(id_inspeccion) {
    const query = `
            SELECT
                i.id_inspeccion,
                i.id_ciudad,
                i.id_depto,
                i.id_subdepto,
                i.id_linea,
                to_char(i.fecha, 'YYYY-MM-DD') AS fecha,
                i.id_inspector,
                i.id_supervisor,
                i.modelo,
                i.semana,
                i.lote,
                i.pares_inspeccionados,
                i.id_categoria,
                cat.nombre_categoria,
                i.id_defecto,
                df.nombre_defecto,
                i.id_severidad,
                sev.nombre_severidad,
                i.pares_con_defecto,
                i.id_operacion,
                op.nombre_operacion,
                i.operador,
                i.descripcion
            FROM inspecciones i
            INNER JOIN categorias cat ON cat.id_categoria = i.id_categoria
            INNER JOIN defectos df ON df.id_defecto = i.id_defecto
            INNER JOIN severidades sev ON sev.id_severidad = i.id_severidad
            INNER JOIN operaciones op ON op.id_operacion = i.id_operacion
            WHERE i.id_inspeccion = $1;
        `;

    try {
        const result = await executeQuery(query, [id_inspeccion]);
        return result.rows[0] ?? null;
    } catch (error) {
        throw new Error(`Error al obtener detalles de inspecciones león id: ${error.message}`);
    }
}

export async function putActualizarInspeccionID(id_inspeccion, datosGenerales, produccion, incidencia) {
    const query = `
            UPDATE inspecciones
            SET
                id_ciudad = $2,
                id_depto = $3,
                id_subdepto = $4,
                id_linea = $5,
                fecha = $6,
                id_inspector = $7,
                modelo = $8,
                semana = $9,
                lote = $10,
                pares_inspeccionados = $11,
                id_categoria = $12,
                id_defecto = $13,
                id_severidad = $14,
                pares_con_defecto = $15,
                id_operacion = $16,
                operador = $17,
                descripcion = $18,
                id_supervisor = $19
            WHERE id_inspeccion = $1
            RETURNING *;
    `;

    const valores = [
        id_inspeccion,
        datosGenerales.ciudad,
        datosGenerales.departamento,
        datosGenerales.subdepartamento,
        datosGenerales.linea,
        datosGenerales.fecha,
        datosGenerales.inspector,
        produccion.modelo,
        produccion.semana,
        produccion.lote,
        produccion.paresInspeccionados,
        incidencia.id_categoria,
        incidencia.id_defecto,
        incidencia.id_severidad,
        incidencia.pares_con_defecto,
        incidencia.id_operacion,
        incidencia.operador || null,
        incidencia.descripcion || null,
        datosGenerales.supervisor
    ];

    try {
        const result = await executeQuery(query, valores);

        return result.rows[0] ?? null;
    } catch (error) {
        throw new Error(
            `Error al actualizar inspección por ID: ${error.message}`
        );
    }
}