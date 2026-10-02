import { postCrearInspeccion } from "../../../models/Calidad/Inspeccion/inspeccion.models.js";

// POST /categorias
export async function crearInspeccion(req, res) {

    try {
        const { ciudad, departamento, subdepartamento, linea, fecha, inspector,
            modelo, semana, lote, paresInspeccionados, incidencias } = req.body;

        if (!ciudad || !departamento || !subdepartamento || !linea || !fecha || !inspector || 
            !modelo || !semana || !lote || !paresInspeccionados) {
            return res.status(400).json({
                ok: false,
                message: "Faltan datos generales o de producción"
            });
        }

        if(!Array.isArray(incidencias || incidencias.length === 0)){
            return res.status(400).json({
                ok: false,
                message: "Faltan datos generales o de producción"
            });
        }

        const nuevaInspeccion = await postCrearInspeccion(req.body);

        return res.status(201).json({
            ok: true,
            message: "Inspección registrada correctamente",
            data: nuevaInspeccion
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al crear la inspección",
            error: error.message
        });
    }
}