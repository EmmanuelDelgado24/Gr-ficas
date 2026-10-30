import express from 'express';

import { eliminarInspeccionCoordinadoCuer, obtenerCueramaroCoordinado  } from "../../controllers/Calidad/Inspeccion/inspecCueraCoordinado.controllers.js";

const router = express.Router();

router.get("/obtenerCueramaroCoordinado", obtenerCueramaroCoordinado);

router.delete('/eliminarInspeccionCoordinadoCuer/:id', eliminarInspeccionCoordinadoCuer);

export default router;