import express from 'express';
import { LotesPespunteController } from '../../controllers/Leon/pespunte.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesPespunteController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
//crearRutaLote('/Pespunte242', { depto: 59, subdepto: 91, origen: '5D' });   //Linea 1
crearRutaLote('/Pespunte244', { depto: 59, subdepto: 92, origen: '5D' });   //Linea 2
crearRutaLote('/Pespunte241', { depto: 59, subdepto: 94, origen: '5D' });   //Linea 4
crearRutaLote('/Pespunte141', { depto: 59, subdepto: 95, origen: '5D' });   //Linea 5
crearRutaLote('/Pespunte245', { depto: 59, subdepto: 96, origen: '5D' });   //Linea 6
crearRutaLote('/Pespunte408', { depto: 59, subdepto: 98, origen: '5D' });   //Linea 8


//crearRutaLote('/Pespunte242-4', { depto: 59, subdepto: 91, origen: '4D' });  //Linea 1
crearRutaLote('/Pespunte244-4', { depto: 59, subdepto: 92, origen: '4D' });  //Linea 2
crearRutaLote('/Pespunte241-4', { depto: 59, subdepto: 94, origen: '4D' });  //Linea 4
crearRutaLote('/Pespunte141-4', { depto: 59, subdepto: 95, origen: '4D' });  //Linea 5
crearRutaLote('/Pespunte245-4', { depto: 59, subdepto: 96, origen: '4D' });  //Linea 6
crearRutaLote('/Pespunte408-4', { depto: 59, subdepto: 98, origen: '4D' });  //Linea 8
// crearRutaLote('/Pespunte142-4', { depto: 59, subdepto: 92, origen: '4D' });

export default router;

