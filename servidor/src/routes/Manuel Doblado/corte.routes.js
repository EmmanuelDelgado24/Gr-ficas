import express from 'express';
import { LotesCorteController } from '../../controllers/Manuel Doblado/corte.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesCorteController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas
crearRutaLote('/MDCorteL1', { depto: 20, subdepto: 21, origen: '5D' });   //Linea 1
crearRutaLote('/MDCorteL2', { depto: 20, subdepto: 202, origen: '5D' });   //Linea 2
crearRutaLote('/MDCorteL4', { depto: 20, subdepto: 205, origen: '5D' });   //Linea 4

crearRutaLote('/4D-MDCorteL1', { depto: 20, subdepto: 21, origen: '4D' });   //Linea 1
crearRutaLote('/4D-MDCorteL2', { depto: 20, subdepto: 202, origen: '4D' });   //Linea 2
crearRutaLote('/4D-MDCorteL4', { depto: 20, subdepto: 205, origen: '4D' });   //Linea 4

export default router;