import express from 'express';
import { LotesAuditoriaController } from '../../controllers/Manuel Doblado/auditoria.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesAuditoriaController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/MDAuditoria-L1', { depto: 80, subdepto: 81, origen: '5D' });   
crearRutaLote('/MDAuditoria-L2', { depto: 80, subdepto: 82, origen: '5D' });   
crearRutaLote('/MDAuditoria-L4', { depto: 80, subdepto: 84, origen: '5D' }); 
crearRutaLote('/MDAuditoria-L5', { depto: 80, subdepto: 850, origen: '5D' });   

crearRutaLote('/4D-MDAuditoria-L1', { depto: 80, subdepto: 81, origen: '4D' });   
crearRutaLote('/4D-MDAuditoria-L2', { depto: 80, subdepto: 82, origen: '4D' });   
crearRutaLote('/4D-MDAuditoria-L4', { depto: 80, subdepto: 84, origen: '4D' });  
crearRutaLote('/4D-MDAuditoria-L5', { depto: 80, subdepto: 850, origen: '4D' });  

export default router;