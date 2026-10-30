import express from 'express';

import { eliminarInspeccionCorteCuer, obtenerCueramaroCorte } from "../../controllers/Calidad/Inspeccion/inspecCueraCorte.controllers.js";

const router = express.Router();

router.get("/obtenerCueramaroCorte", obtenerCueramaroCorte);

router.delete('/eliminarInspeccionCorteCuer/:id', eliminarInspeccionCorteCuer);

export default router;