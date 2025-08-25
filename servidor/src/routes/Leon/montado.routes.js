import express from 'express';
import { LotesMontadoController } from '../../controllers/Leon/montado.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesMontadoController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/AuditoriaL6', { depto: 80, subdepto: 86, origen: '5D' });   
crearRutaLote('/AdornoL6', { depto: 70, subdepto:  276, origen: '5D' });   
crearRutaLote('/MontadoL6', { depto: 60, subdepto:  266, origen: '5D' });   

export default router;

