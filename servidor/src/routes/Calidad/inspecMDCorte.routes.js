import express from 'express';

import { eliminarInspeccionCorteMD, obtenerMDCorte } from "../../controllers/Calidad/Inspeccion/inspecMDCorte.controllers.js";

const router = express.Router();

router.get("/obtenerMDCorte", obtenerMDCorte);

router.delete('/eliminarInspeccionCorteMD/:id', eliminarInspeccionCorteMD);

export default router;