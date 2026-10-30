import express from 'express';
import { LotesCorteController } from '../../controllers/Cueramaro/corte.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesCorteController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas
crearRutaLote('/CueraCorteL2', { depto: 20, subdepto: 220, origen: '5D' });   //Linea 2
crearRutaLote('/CueraCorteL4', { depto: 20, subdepto: 204, origen: '5D' });   //Linea 4
crearRutaLote('/CueraCorteL5', { depto: 20, subdepto: 221, origen: '5D' });   //Linea 5
crearRutaLote('/CueraCorteL8', { depto: 20, subdepto: 288, origen: '5D' });   //Linea 8

crearRutaLote('/4D-CueraCorteL2', { depto: 20, subdepto: 220, origen: '4D' });  //Linea 2
crearRutaLote('/4D-CueraCorteL4', { depto: 20, subdepto: 204, origen: '4D' });  //Linea 4
crearRutaLote('/4D-CueraCorteL5', { depto: 20, subdepto: 221, origen: '4D' });  //Linea 5
crearRutaLote('/4D-CueraCorteL8', { depto: 20, subdepto: 288, origen: '4D' });  //Linea 8

export default router;