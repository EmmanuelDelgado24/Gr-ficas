import express from 'express';
import { LotesCorteController } from '../../controllers/Leon/corte.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesCorteController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/CorteL1', { depto: 20, subdepto:  21, origen: '5D' });   //Linea 1
crearRutaLote('/CorteL2', { depto: 20, subdepto: 121, origen: '5D' });   //Linea 2
crearRutaLote('/CorteL4', { depto: 20, subdepto:  25, origen: '5D' });   //Linea 4
crearRutaLote('/CorteL5', { depto: 20, subdepto: 121, origen: '5D' });   //Linea 5
crearRutaLote('/CorteL6', { depto: 20, subdepto: 225, origen: '5D' });   //Linea 6
crearRutaLote('/CorteL7', { depto: 20, subdepto:  27, origen: '5D' });   //Linea 7
crearRutaLote('/CorteL8', { depto: 20, subdepto: 208, origen: '5D' });   //Linea 8

crearRutaLote('/CorteL1-4', { depto: 20, subdepto:  21, origen: '4D' });   //Linea 1
crearRutaLote('/CorteL2-4', { depto: 20, subdepto: 121, origen: '4D' });   //Linea 2
crearRutaLote('/CorteL4-4', { depto: 20, subdepto:  25, origen: '4D' });   //Linea 4
crearRutaLote('/CorteL5-4', { depto: 20, subdepto: 121, origen: '4D' });   //Linea 5
crearRutaLote('/CorteL6-4', { depto: 20, subdepto: 225, origen: '4D' });   //Linea 6
crearRutaLote('/CorteL7-4', { depto: 20, subdepto:  27, origen: '4D' });   //Linea 7
crearRutaLote('/CorteL8-4', { depto: 20, subdepto: 208, origen: '4D' });   //Linea 8
// crearRutaLote('/Pespunte142-4', { depto: 59, subdepto: 92, origen: '4D' });

export default router;

