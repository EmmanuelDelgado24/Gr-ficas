import express from 'express';

import { eliminarInspeccionPespunteMD, obtenerMDPespunte } from "../../controllers/Calidad/Inspeccion/inspecMDPespunte.controllers.js";

const router = express.Router();

router.get("/obtenerMDPespunte", obtenerMDPespunte);

router.delete('/eliminarInspeccionPespunteMD/:id', eliminarInspeccionPespunteMD);

export default router;