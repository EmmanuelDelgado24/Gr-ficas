import express from 'express';
import { LotesAdornoController } from '../../controllers/Manuel Doblado/adorno.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesAdornoController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/MDAdorno-L1', { depto: 70, subdepto: 71, origen: '5D' });   
crearRutaLote('/MDAdorno-L2', { depto: 70, subdepto: 72, origen: '5D' });   
crearRutaLote('/MDAdorno-L4', { depto: 70, subdepto: 74, origen: '5D' }); 
crearRutaLote('/MDAdorno-L5', { depto: 70, subdepto: 750, origen: '5D' });   

crearRutaLote('/4D-MDAdorno-L1', { depto: 70, subdepto: 71, origen: '4D' });   
crearRutaLote('/4D-MDAdorno-L2', { depto: 70, subdepto: 72, origen: '4D' });   
crearRutaLote('/4D-MDAdorno-L4', { depto: 70, subdepto: 74, origen: '4D' }); 
crearRutaLote('/4D-MDAdorno-L5', { depto: 70, subdepto: 750, origen: '4D' });  

export default router;
