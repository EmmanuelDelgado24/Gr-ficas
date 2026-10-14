import express from 'express';

import { eliminarInspeccionPespunte, obtenerLeonPespunte } from "../../controllers/Calidad/Inspeccion/inspecLeonPespunte.controllers.js";

const router = express.Router();

router.get("/obtenerLeonPespunte", obtenerLeonPespunte);

router.delete('/eliminarInspeccionPespunte/:id', eliminarInspeccionPespunte);

export default router;