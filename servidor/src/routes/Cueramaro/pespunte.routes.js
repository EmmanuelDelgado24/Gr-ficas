import express from 'express';
import { LotesPespunteController } from '../../controllers/Cueramaro/pespunte.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesPespunteController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/CueraPespunteL2', { depto: 50, subdepto: 520, origen: '5D' });   //Linea 2
crearRutaLote('/CueraPespunteL4', { depto: 50, subdepto: 540, origen: '5D' });   //Linea 4
crearRutaLote('/CueraPespunteL5', { depto: 50, subdepto: 505, origen: '5D' });   //Linea 5
crearRutaLote('/CueraPespunteL8', { depto: 50, subdepto: 508, origen: '5D' });   //Linea 8

crearRutaLote('/4D-CueraPespunteL2', { depto: 50, subdepto: 520, origen: '4D' });  //Linea 2
crearRutaLote('/4D-CueraPespunteL4', { depto: 50, subdepto: 540, origen: '4D' });  //Linea 4
crearRutaLote('/4D-CueraPespunteL5', { depto: 50, subdepto: 505, origen: '4D' });  //Linea 5
crearRutaLote('/4D-CueraPespunteL8', { depto: 50, subdepto: 508, origen: '4D' });  //Linea 8

export default router;