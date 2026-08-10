import { obtenerPersonalPespunte244 } from "../../models/Personal/personalPespunte244.models.js";

export async function obtenerPersonalPespun244(req, res) {
    try {
        const datos = await obtenerPersonalPespunte244();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal pespunte 244' });
    }
}

