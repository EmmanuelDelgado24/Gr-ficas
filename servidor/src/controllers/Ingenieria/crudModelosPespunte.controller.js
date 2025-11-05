import { getModeloCompleto } from "../../models/Ingenieria/modelosPespunte.models.js";
import { createModelo } from "../../models/Ingenieria/modelosPespunte.models.js"; 
import { updateModelo } from "../../models/Ingenieria/modelosPespunte.models.js";
import { deleteModelo } from "../../models/Ingenieria/modelosPespunte.models.js";

export class ModelosPespunteController {
  
  static async getModelosCompleto(req, res) {
    const { departamento, modelo } = req.query;
    try {
      const modeloCompleto = await getModeloCompleto({departamento, modelo });
      console.log(modeloCompleto)
      if (modeloCompleto === null) { 
        return res.status(404).json({ message: 'No se encontraron registros para este modelo.' });
      }
      return res.status(200).json(modeloCompleto); 
    } catch (error) {
      console.error(`Error en el controlador para ${modelo}`, error);
      return res.status(500).json({
        message: 'Error al obtener registros',
        error: error.message,
      });
    }
  }

  static async updateModelo(req, res) {
    const modelo = req.params.modelo; 
    const datosActualizados = req.body; 

    try {
      const modeloActualizado = await updateModelo(modelo, datosActualizados);
      if (!modeloActualizado) {
        return res.status(404).json({ message: 'Modelo no encontrado para actualizar.' });
      }
      
      return res.status(200).json({ 
        message: 'Modelo actualizado exitosamente', 
        modelo: modeloActualizado 
      });

    } catch (error) {
      console.error(`Error en el controlador de actualización para ${modelo}:`, error);
      return res.status(500).json({
        message: 'Error al actualizar el modelo',
        error: error.message,
      });
    }
  }

  static async createModelo(req, res) {
    const datosModeloNuevo = req.body; 
    console.log(datosModeloNuevo);
    if (!datosModeloNuevo.linea || !datosModeloNuevo.modelo || !datosModeloNuevo.estilo || !datosModeloNuevo.proceso || datosModeloNuevo.tiempo_std_min === undefined) {
      return res.status(400).json({ message: 'Faltan campos requeridos para crear el modelo.' });
    }
    try {
      const nuevoModelo = await createModelo(datosModeloNuevo);
      console.log(nuevoModelo.tiempo_std_min);
      if (!nuevoModelo) {
        return res.status(400).json({ message: 'No se pudo crear el modelo, la operación no retornó el registro.' });
      }

      return res.status(201).json({
        message: 'Modelo creado exitosamente',
        modelo: nuevoModelo 
      });

    } catch (error) {
      console.error(`Error en el controlador al crear modelo:`, error.message, error.stack);
      if (error.message.includes('duplicate key value violates unique constraint') && error.message.includes('modelo')) {
          return res.status(409).json({ 
              message: 'El modelo con ese identificador ya existe.',
              error: error.message
          });
      }

      return res.status(500).json({
        message: 'Error interno del servidor al crear el modelo',
        error: error.message,
      });
    }
  }

  static async deleteModelo(req, res) {
    const {modelo, departamento} = req.params;
    try {
        const deleteResult = await deleteModelo(modelo, departamento); 
        if (deleteResult === null) {            
            return res.status(404).json({ message: `Modelo ${modelo} no encontrado para eliminar.` });
        }
        return res.status(200).json({ message: `Modelo ${modelo} eliminado exitosamente.`, details: deleteResult });
    } catch (error) {
        console.error(`Error en el controlador para eliminar modelo ${modelo}:`, error);
        return res.status(500).json({
            message: 'Error al eliminar registro',
            error: error.message,
        });
    }
  }
}
