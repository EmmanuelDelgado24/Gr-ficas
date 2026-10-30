import express from 'express';
import { LotesMontadoController } from '../../controllers/Manuel Doblado/montado.controller.js';

const router = express.Router();

const crearRutaLote = (ruta, config) =>
  router.get(ruta, (req, res) =>
    LotesMontadoController.getByDepartamentoCustom(req, res, config)
  );

// Luego llamas:
crearRutaLote('/MDMontado-L1', { depto: 60, subdepto: 61, origen: '5D' });   
crearRutaLote('/MDMontado-L2', { depto: 60, subdepto: 62, origen: '5D' });   
crearRutaLote('/MDMontado-L4', { depto: 60, subdepto: 64, origen: '5D' });   

crearRutaLote('/4D-MDMontado-L1', { depto: 60, subdepto: 61, origen: '4D' });   
crearRutaLote('/4D-MDMontado-L2', { depto: 60, subdepto: 62, origen: '4D' });   
crearRutaLote('/4D-MDMontado-L4', { depto: 60, subdepto: 64, origen: '4D' });  

export default router;
