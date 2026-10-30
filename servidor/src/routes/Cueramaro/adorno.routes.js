import express from 'express';
import { LotesAdornoController } from '../../controllers/Cueramaro/adorno.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesAdornoController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
 
crearRutaLote('/CueraAdorno-L5', { depto: 70, subdepto: 75, origen: '5D' });   
crearRutaLote('/CueraAdorno-L8', { depto: 70, subdepto: 78, origen: '5D' }); 

crearRutaLote('/4D-CueraAdorno-L5', { depto: 70, subdepto: 75, origen: '4D' });  
crearRutaLote('/4D-CueraAdorno-L8', { depto: 70, subdepto: 78, origen: '4D' });  

export default router;
