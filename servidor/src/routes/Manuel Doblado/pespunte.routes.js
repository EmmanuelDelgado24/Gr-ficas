import express from 'express';
import { LotesPespunteController } from '../../controllers/Manuel Doblado/pespunte.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesPespunteController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/MDPespunteL1', { depto: 50, subdepto: 501, origen: '5D' });   //Linea 1
crearRutaLote('/MDPespunteL2', { depto: 50, subdepto: 522, origen: '5D' });   //Linea 2
crearRutaLote('/MDPespunteL4', { depto: 50, subdepto: 544, origen: '5D' });   //Linea 4

crearRutaLote('/4D-MDPespunteL1', { depto: 50, subdepto: 501, origen: '4D' });  //Linea 1
crearRutaLote('/4D-MDPespunteL2', { depto: 50, subdepto: 522, origen: '4D' });  //Linea 2
crearRutaLote('/4D-MDPespunteL4', { depto: 50, subdepto: 544, origen: '4D' });  //Linea 4

export default router;