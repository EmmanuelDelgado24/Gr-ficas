import express from 'express';

import { eliminarInspeccionMontadoAdorno, obtenerLeonMonAdor } from "../../controllers/Calidad/Inspeccion/inspecLeonMonAdor.controllers.js";

const router = express.Router();

router.get("/obtenerLeonMonAdor", obtenerLeonMonAdor);

router.delete('/eliminarInspeccionMontadoAdorno/:id', eliminarInspeccionMontadoAdorno);

export default router;