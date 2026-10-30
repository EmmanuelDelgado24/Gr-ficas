import express from 'express';

import { eliminarInspeccionMontadoAdornoCuer, obtenerCueramaroMonAdor } from "../../controllers/Calidad/Inspeccion/inspecCueraMonAdor.controllers.js";

const router = express.Router();

router.get("/obtenerCueramaroMonAdor", obtenerCueramaroMonAdor);

router.delete('/eliminarInspeccionMontadoAdornoCuer/:id', eliminarInspeccionMontadoAdornoCuer);

export default router;