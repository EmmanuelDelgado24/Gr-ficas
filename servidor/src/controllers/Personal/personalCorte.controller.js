import { obtenerPersonalCorte } from "../../models/Personal/personalCorte.models.js"

export async function obtenerPersonalCortes(req, res) {
    try {
        const datos = await obtenerPersonalCorte();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal corte' });
    }
}

