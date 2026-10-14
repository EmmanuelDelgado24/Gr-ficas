import {getObtenerCiudad} from "../../../models/Calidad/Catalogo/ciudad.models.js";

export async function obtenerCiudades(req, res) {
    try {
        const ciudades = await getObtenerCiudad();
        return res.status(200).json({
            ok: true,
            data: ciudades
        });
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}
