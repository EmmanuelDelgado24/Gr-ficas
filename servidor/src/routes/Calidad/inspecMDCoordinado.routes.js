import express from 'express';

import { eliminarInspeccionCoordinadoMD, obtenerMDCoordinado  } from "../../controllers/Calidad/Inspeccion/inspecMDCoordinado.controllers.js";

const router = express.Router();

router.get("/obtenerMDCoordinado", obtenerMDCoordinado);

router.delete('/eliminarInspeccionCoordinadoMD/:id', eliminarInspeccionCoordinadoMD);

export default router;