import { obtenerLotes } from "../../models/Ingenieria/busquedaFechas5.models.js";

export class busquedaFecha5Controller {

  static async getLotesPorFecha(req, res) {
    console.log(req.query);
    const { depto, subdepto, dateStart, dateEnd } = req.query;

    if (!depto || !dateStart || !dateEnd) {
      return res.status(400).json({
        message: "Faltan parámetros: depto, subdepto, dateStart y dateEnd son requeridos.",
      });
    }

    try {
      const lotes = await obtenerLotes({
        depto: parseInt(depto),
        subdepto: parseInt(subdepto),
        dateStart: dateStart,
        dateEnd: dateEnd,
      });

      res.status(200).json(lotes);
    } catch (error) {
      console.error("Error al obtener lotes:", error);
      res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
  }
}