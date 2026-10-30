import express from 'express';

import { eliminarInspeccionPespunteCuer, obtenerCueramaroPespunte } from "../../controllers/Calidad/Inspeccion/inspecCueraPespunte.controllers.js";

const router = express.Router();

router.get("/obtenerCueramaroPespunte", obtenerCueramaroPespunte);

router.delete('/eliminarInspeccionPespunteCuer/:id', eliminarInspeccionPespunteCuer);

export default router;