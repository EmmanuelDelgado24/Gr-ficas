import express from 'express';

import { eliminarInspeccionCoordinado, obtenerLeonCoordinado  } from "../../controllers/Calidad/Inspeccion/inspecLeonCoordinado.controllers.js";

const router = express.Router();

router.get("/obtenerLeonCoordinado", obtenerLeonCoordinado);

router.delete('/eliminarInspeccionCoordinado/:id', eliminarInspeccionCoordinado);

export default router;