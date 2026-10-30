import express from 'express';
import { LotesMontadoController } from '../../controllers/Cueramaro/montado.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesMontadoController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/CueraMontado-L5', { depto: 60, subdepto: 65, origen: '5D' });   
crearRutaLote('/CueraMontado-L8', { depto: 60, subdepto: 68, origen: '5D' });     

crearRutaLote('/4D-CueraMontado-L5', { depto: 60, subdepto: 65, origen: '4D' });   
crearRutaLote('/4D-CueraMontado-L8', { depto: 60, subdepto: 68, origen: '4D' });   
 

export default router;