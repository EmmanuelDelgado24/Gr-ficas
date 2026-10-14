import {getObtenerLinea} from "../../../models/Calidad/Catalogo/linea.models.js";

export async function obtenerLineas(req, res) {
    try{
          const {id_ciudad} = req.params;
        const lineas = await getObtenerLinea(id_ciudad);
        return res.status(200).json({
            ok: true,
            data: lineas
        });
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error al obtener líneas",
            error: error.message
        });
    }
}