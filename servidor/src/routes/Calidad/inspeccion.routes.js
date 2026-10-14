import express from 'express';

import { crearInspeccion, obtenerInspeccion, eliminarInspeccion, obtenerLeonPorID, actualizarInspeccion } from '../../controllers/Calidad/Inspeccion/inspeccion.controllers.js';

const router = express.Router();

router.post("/crearInspeccion", crearInspeccion);

router.get("/obtenerInspeccion", obtenerInspeccion);

router.delete('/eliminarInspeccion/:id', eliminarInspeccion);

router.get("/obtenerLeonPorID/:id_inspeccion", obtenerLeonPorID);

router.put("/actualizarInspeccion/:id_inspeccion", actualizarInspeccion);

export default router;