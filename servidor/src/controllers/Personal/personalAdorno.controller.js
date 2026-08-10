import { obtenerPersonalAdorno } from "../../models/Personal/personalAdorno.models.js";

export async function obtenerPersonalAdornos(req, res) {
    try {
        const datos = await obtenerPersonalAdorno();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal adorno' });
    }
}

