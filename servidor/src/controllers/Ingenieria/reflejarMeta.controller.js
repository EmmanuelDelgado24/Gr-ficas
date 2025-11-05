import { createMeta, getMeta } from "../../models/Ingenieria/reflejarMeta.models.js"; 

export class ReflejarMetaController {
static async createMeta(req, res) {
    const datosMetaNueva = req.body; 
    console.log(datosMetaNueva);
    if (!datosMetaNueva.meta_diaria || !datosMetaNueva.departamento || !datosMetaNueva.subdepto || !datosMetaNueva.ciudad) {
      return res.status(400).json({ message: 'Faltan campos requeridos para crear la Meta.' });
    }
    try {
      const nuevoModelo = await createMeta(datosMetaNueva);
      if (!nuevoModelo) {
        return res.status(400).json({ message: 'No se pudo reflejar la meta, la operación no retornó el registro.' });
      }

      return res.status(201).json({
        message: 'Meta reflejada exitosamente',
        modelo: nuevoModelo 
      });

    } catch (error) {
      console.error(`Error en el controlador al reflejar meta:`, error.message, error.stack);
      return res.status(500).json({
        message: 'Error interno del servidor al reflejar meta',
        error: error.message,
      });
    }
  }

static async obtenerMeta(req, res) {
  const { departamento, subdepto, ciudad } = req.query;

  if (!departamento || !subdepto || !ciudad) {
    return res.status(400).json({ error: 'Faltan parámetros requeridos.' });
  }

  try {
    const meta = await getMeta({ datos: { departamento, subdepto, ciudad } });

    if (!meta) {
      return res.status(404).json({ mensaje: 'Meta no encontrada para los criterios especificados.' });
    }

    res.status(200).json(meta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor al obtener la meta.' });
  }
}

}

