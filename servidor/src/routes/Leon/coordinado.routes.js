import express from 'express';
import { LotesCoordinadoController } from '../../controllers/Leon/coordinado.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesCoordinadoController.getByDepartamentoCustom(req, res, config)
  );

  // Luego llamas:
crearRutaLote('/CoordinadoL1', { depto: 40, subdepto: 242, origen: "5D" });   //Linea 1
crearRutaLote('/CoordinadoL2', { depto: 40, subdepto: 142, origen: "5D" });   //Linea 2
crearRutaLote('/CoordinadoL4', { depto: 40, subdepto: 243, origen: '5D' });   //Linea 4
crearRutaLote('/CoordinadoL5', { depto: 40, subdepto: 241, origen: '5D' });   //Linea 5
crearRutaLote('/CoordinadoL6', { depto: 40, subdepto: 244, origen: '5D' });   //Linea 6
crearRutaLote('/CoordinadoL7', { depto: 40, subdepto:  27, origen: '5D' });   //Linea 7
crearRutaLote('/CoordinadoL8', { depto: 40, subdepto: 208, origen: '5D' });   //Linea 8

crearRutaLote('/CoordinadoL1-4', { depto: 40, subdepto: 242, origen: '4D' });   //Linea 1
crearRutaLote('/CoordinadoL2-4', { depto: 40, subdepto: 142, origen: '4D' });   //Linea 2
crearRutaLote('/CoordinadoL4-4', { depto: 40, subdepto: 243, origen: '4D' });   //Linea 4
crearRutaLote('/CoordinadoL5-4', { depto: 40, subdepto: 241, origen: '4D' });   //Linea 5
crearRutaLote('/CoordinadoL6-4', { depto: 40, subdepto: 244, origen: '4D' });   //Linea 6
crearRutaLote('/CoordinadoL7-4', { depto: 40, subdepto:  27, origen: '4D' });   //Linea 7
crearRutaLote('/CoordinadoL8-4', { depto: 40, subdepto: 208, origen: '4D' });   //Linea 8
// crearRutaLote('/Pespunte142-4', { depto: 59, subdepto: 92, origen: '4D' });

export default router;

