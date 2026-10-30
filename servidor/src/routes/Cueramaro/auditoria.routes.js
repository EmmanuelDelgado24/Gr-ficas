import express from 'express';
import { LotesAuditoriaController } from '../../controllers/Cueramaro/auditoria.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesAuditoriaController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/CueraAuditoria-L5', { depto: 80, subdepto: 85, origen: '5D' });   
crearRutaLote('/CueraAuditoria-L8', { depto: 80, subdepto: 88, origen: '5D' });   


crearRutaLote('/4D-CueraAuditoria-L5', { depto: 80, subdepto: 85, origen: '4D' });  
crearRutaLote('/4D-CueraAuditoria-L8', { depto: 80, subdepto: 88, origen: '4D' });  

export default router;