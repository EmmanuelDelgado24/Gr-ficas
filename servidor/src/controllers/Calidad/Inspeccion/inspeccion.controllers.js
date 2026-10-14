import { postCrearInspeccion, getObtenerInspecciones, postEliminarInspeccion, getObtenerLeonPorID, putActualizarInspeccionID} from "../../../models/Calidad/Inspeccion/inspeccion.models.js";

// GET /Inspecciones
export async function obtenerInspeccion(_, res) {
    try {
        const inspecciones = await getObtenerInspecciones();
        return res.status(200).json({
            ok: true,
            data: inspecciones
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}

// POST /Inspecciones
export async function crearInspeccion(req, res) {

    try {

        const { datosGenerales, produccion, incidencias } = req.body;

        const { ciudad, departamento, subdepartamento, linea, fecha, inspector, supervisor } = datosGenerales;

        const { modelo, semana, lote, paresInspeccionados, } = produccion;


        // =============================
        // Validar datos generales
        // =============================

        if (!ciudad || !departamento || !subdepartamento || !linea || !fecha || !inspector ||
            !supervisor
        ) {
            return res.status(400).json({
                ok: false,
                message: "Faltan datos generales o de producción"
            });
        }

        // =============================
        // Validar datos producción
        // =============================

        if (!modelo || !semana || !paresInspeccionados) {
            return res.status(400).json({
                ok: false,
                message: "Faltan datos generales o de producción"
            });
        }


        // =============================
        // Validar incidencias
        // =============================

        if (!Array.isArray(incidencias) || incidencias.length === 0) {
            return res.status(400).json({
                ok: false,
                message: "Debe existir al menos una incidencia"
            });
        }


        // =============================
        // Guardar incidencias
        // =============================

        const inspeccionesGuardadas = [];

        for (const incidencia of incidencias) {

            const nuevaInspeccion = await postCrearInspeccion({

                // Datos generales
                id_ciudad: ciudad,
                id_depto: departamento,
                id_subdepto: subdepartamento,
                id_linea: linea,
                fecha: fecha,
                id_inspector: inspector,
                id_supervisor: supervisor,

                modelo: modelo,
                semana: semana,
                lote: lote || null,
                pares_inspeccionados: paresInspeccionados,

                // Datos de incidencia
                id_categoria: incidencia.id_categoria,
                id_defecto: incidencia.id_defecto,
                id_severidad: incidencia.id_severidad,
                pares_con_defecto: incidencia.pares_con_defecto,
                id_operacion: incidencia.id_operacion,
                operador: incidencia.operador,
                descripcion: incidencia.descripcion
            });

            inspeccionesGuardadas.push(nuevaInspeccion);
        }

        return res.status(201).json({
            ok: true,
            message:
                "Inspección registrada correctamente",
            data: inspeccionesGuardadas
        });
    } catch (error) {
        console.error(
            "Error crearInspeccion:",
            error
        );

        return res.status(500).json({
            ok: false,
            message:
                "Error al crear la inspección",
            error: error.message
        });
    }
}


export async function eliminarInspeccion(req, res) {
    try {
        const { id } = req.params; // Viene desde los parámetros de la URL (ej: /inspecciones/10)

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "El ID de la inspección es obligatorio"
            });
        }

        const inspeccionEliminada = await postEliminarInspeccion(id);

        if (!inspeccionEliminada) {
            return res.status(404).json({
                ok: false,
                message: "No se encontró la inspección que deseas eliminar"
            });
        }

        return res.status(200).json({
            ok: true,
            message: "Inspección eliminada correctamente",
            data: inspeccionEliminada
        });

    } catch (error) {
        console.error("Error eliminarInspeccion:", error);
        return res.status(500).json({
            ok: false,
            message: "Error al eliminar la inspección",
            error: error.message
        });
    }
}

export async function obtenerLeonPorID(req, res) {
  try {
    const { id_inspeccion } = req.params;

    const r = await getObtenerLeonPorID(id_inspeccion);
    if (!r) {
      return res.status(404).json({ ok: false, message: "Inspección no encontrada" });
    }

    return res.json({
      ok: true,
      data: {
        datosGenerales: {
          ciudad: String(r.id_ciudad),
          departamento: String(r.id_depto),
          subdepartamento: String(r.id_subdepto),
          linea: String(r.id_linea),
          fecha: r.fecha,
          inspector: String(r.id_inspector),
          supervisor: String(r.id_supervisor),
        },
        produccion: {
          modelo: r.modelo,
          semana: r.semana,
          lote: r.lote,
          paresInspeccionados: r.pares_inspeccionados,
        },
        incidencias: [
          {
            id_categoria: r.id_categoria,
            id_defecto: r.id_defecto,
            id_severidad: r.id_severidad,
            id_operacion: r.id_operacion,
            pares_con_defecto: r.pares_con_defecto,
            operador: r.operador,
            descripcion: r.descripcion,
            nombre_categoria: r.nombre_categoria,
            nombre_defecto: r.nombre_defecto,
            nombre_severidad: r.nombre_severidad,
            nombre_operacion: r.nombre_operacion,
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: error.message });
  }
}

export async function actualizarInspeccion(req, res){
    try {
        // 1. Obtener el ID desde la URL
        const { id_inspeccion } = req.params;

        // 2. Obtener los datos enviados desde React
        const { datosGenerales, produccion, incidencia } = req.body;

        // 3. Validar el ID
        if (!id_inspeccion || !Number.isInteger(Number(id_inspeccion))) {
            return res.status(400).json({
                ok: false,
                message: "El ID de la inspección no es válido"
            });
        }

        // 4. Validar los datos obligatorios
        if (!datosGenerales || !produccion || !incidencia) {
            return res.status(400).json({
                ok: false,
                message: "Faltan datos para actualizar la inspección"
            });
        }

        // 5. Ejecutar la actualización en PostgreSQL
        const inspeccionActualizada = await putActualizarInspeccionID(
            Number(id_inspeccion),
            datosGenerales,
            produccion,
            incidencia
        );

        // 6. Comprobar si existe el registro
        if (!inspeccionActualizada) {
            return res.status(404).json({
                ok: false,
                message: "No se encontró la inspección"
            });
        }

        // 7. Responder al frontend
        return res.status(200).json({
            ok: true,
            message: "Inspección actualizada correctamente",
            data: inspeccionActualizada
        });

    } catch (error) {
        console.error("Error al actualizar inspección:", error);

        return res.status(500).json({
            ok: false,
            message: "Error al actualizar la inspección",
            error: error.message
        });
    }
}