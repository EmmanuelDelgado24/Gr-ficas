  import express from 'express';
  import { LotesCoordinadoController } from '../../controllers/Manuel Doblado/coordinado.controller.js';
  
  const router = express.Router();
  
  const crearRutaLote = (ruta, config) =>
    router.get(ruta, (req, res) =>
      LotesCoordinadoController.getByDepartamentoCustom(req, res, config)
    );
  
    // Luego llamas:

  crearRutaLote('/MDCoordinadoL1', { depto: 40, subdepto: 41, origen: "5D" });   //Linea 1
  crearRutaLote('/MDCoordinadoL4', { depto: 40, subdepto: 44, origen: '5D' });   //Linea 4
  crearRutaLote('/MDCoordinadoL5', { depto: 40, subdepto: 45, origen: '5D' });   //Linea 5
  crearRutaLote('/MDCoordinadoL7', { depto: 40, subdepto: 47, origen: '5D' });   //Linea 7

  crearRutaLote('/4D-MDCoordinadoL1', { depto: 40, subdepto: 41, origen: '4D' });   //Linea 1
  crearRutaLote('/4D-MDCoordinadoL4', { depto: 40, subdepto: 44, origen: '4D' });   //Linea 4
  crearRutaLote('/4D-MDCoordinadoL5', { depto: 40, subdepto: 45, origen: '4D' });   //Linea 5
  crearRutaLote('/4D-MDCoordinadoL7', { depto: 40, subdepto: 47, origen: '4D' });   //Linea 7
  
  export default router;
