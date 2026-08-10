import { obtenerPersonalMontado } from "../../models/Personal/personalMontado.models.js";

export async function obtenerPersonalMontados(req, res) {
    try {
        const datos = await obtenerPersonalMontado();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal montado' });
    }
}

