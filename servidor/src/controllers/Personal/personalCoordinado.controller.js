import { obtenerPersonalCoordinado } from "../../models/Personal/personalCoordinado.models.js";

export async function obtenerPersonalCoordinados(req, res) {
    try {
        const datos = await obtenerPersonalCoordinado();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal coordinado' });
    }
}

