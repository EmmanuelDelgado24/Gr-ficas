import express from 'express';

import { obtenerLeon } from "../../controllers/Calidad/Inspeccion/inspeccionLeon.controllers.js";

const router = express.Router();

router.get("/obtenerLeon", obtenerLeon);

export default router;