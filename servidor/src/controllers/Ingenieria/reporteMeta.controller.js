import { obtenerLotes } from "../../models/Ingenieria/reporteMeta.models.js"; 

export class ReporteMetaController {

  static async obtenerMeta(req, res) {
    const { depto, ciudad, fechaInicio, fechaFin } = req.query;
    
    try {
        const meta = await obtenerLotes({depto, ciudad, fechaInicio, fechaFin});
        if (!meta) {
        return res.status(404).json({ mensaje: 'Meta no encontrada para los criterios especificados.' });
        }

        res.json(meta.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor al obtener la meta.' });
    }
  }
}

