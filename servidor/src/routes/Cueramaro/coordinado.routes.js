  import express from 'express';
  import { LotesCoordinadoController } from '../../controllers/Cueramaro/coordinado.controller.js';
  
  const router = express.Router();
  
  const crearRutaLote = (ruta, config) =>
    router.get(ruta, (req, res) =>
      LotesCoordinadoController.getByDepartamentoCustom(req, res, config)
    );
  
    // Luego llamas:
  crearRutaLote('/CueraCoordinadoL2', { depto: 40, subdepto: 402, origen: "5D" });   //Linea 2
  crearRutaLote('/CueraCoordinadoL4', { depto: 40, subdepto: 404, origen: '5D' });   //Linea 4
  crearRutaLote('/CueraCoordinadoL5', { depto: 40, subdepto: 141, origen: '5D' });   //Linea 5
  crearRutaLote('/CueraCoordinadoL8', { depto: 40, subdepto: 488, origen: '5D' });   //Linea 8

  crearRutaLote('/4D-CueraCoordinadoL2', { depto: 40, subdepto: 402, origen: '4D' });   //Linea 2
  crearRutaLote('/4D-CueraCoordinadoL4', { depto: 40, subdepto: 404, origen: '4D' });   //Linea 4
  crearRutaLote('/4D-CueraCoordinadoL5', { depto: 40, subdepto: 141, origen: '4D' });   //Linea 5
  crearRutaLote('/4D-CueraCoordinadoL8', { depto: 40, subdepto: 488, origen: '4D' });   //Linea 8
  
  export default router;
