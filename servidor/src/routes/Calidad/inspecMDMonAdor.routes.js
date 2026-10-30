import express from 'express';

import { eliminarInspeccionMontadoAdornoMD, obtenerMDMonAdor } from "../../controllers/Calidad/Inspeccion/inspecMDMonAdor.controllers.js";

const router = express.Router();

router.get("/obtenerMDMonAdor", obtenerMDMonAdor);

router.delete('/eliminarInspeccionMontadoAdornoMD/:id', eliminarInspeccionMontadoAdornoMD);

export default router;