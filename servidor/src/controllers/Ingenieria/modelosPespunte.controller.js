import { ModelosPespunte, ModelosCorte} from "../../models/Ingenieria/tiempoModelosPespunte.models.js";

export class TiempoModelosPespunteController {
  static async getByModelo(req, res) {
    const { departamento, modelo } = req.query;
    console.log(departamento);
    try {
      const tiempo = await ModelosPespunte({ departamento, modelo });
      if (tiempo === null) { 
        return res.status(404).json({ message: 'No se encontraron registros para este modelo.' });
      }
      return res.status(200).json({ tiempo_std_min: tiempo }); 
    } catch (error) {
      console.error(`Error en el controlador para ${modelo}`, error);
      return res.status(500).json({
        message: 'Error al obtener registros',
        error: error.message,
      });
    }
  }

  static async getByModeloCorte(req, res) {
    const { departamento, modelo, subdepto } = req.query;
    console.log(subdepto, "Controlador");
    try {
      const tiempo = await ModelosCorte({ departamento, modelo, subdepto });
      if (tiempo === null) { 
        return res.status(404).json({ message: 'No se encontraron registros para este modelo.' });
      }
      console.log(tiempo);
      return res.status(200).json({ tiempo_std_min: tiempo }); 
    } catch (error) {
      console.error(`Error en el controlador para ${modelo}`, error);
      return res.status(500).json({
        message: 'Error al obtener registros',
        error: error.message,
      });
    }
  }
}