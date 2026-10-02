import express from 'express';

import { crearInspeccion } from '../../controllers/Calidad/Inspeccion/inspeccion.controllers.js';

const router = express.Router();

router.post("/crearInspeccion", crearInspeccion);

export default router;