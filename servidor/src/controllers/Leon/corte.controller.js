import { obtenerLotes } from "../../models/Leon/corte.model.js";

export class LotesCorteController {
  static async getByDepartamentoCustom(_req, res, config) {
    try {
      const registros = await obtenerLotes(config);

      if (!registros || registros.length === 0) {
        return res.status(200).json({ message: 'No se encontraron registros' });
      }

      return res.status(200).json(registros);
    } catch (error) {
      console.error(`Error en el controlador para ${config.nombre}`, error);
      return res.status(500).json({
        message: 'Error al obtener registros',
        error: error.message,
      });
    }
  }
}
