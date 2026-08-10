import { obtenerPersonalPespunte246 } from "../../models/Personal/personalPespunte246.models.js";

export async function obtenerPersonalPespun246(req, res) {
    try {
        const datos = await obtenerPersonalPespunte246();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal pespunte 246' });
    }
}

