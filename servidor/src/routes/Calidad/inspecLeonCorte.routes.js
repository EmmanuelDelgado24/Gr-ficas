import express from 'express';

import { eliminarInspeccionCorte, obtenerLeonCorte } from "../../controllers/Calidad/Inspeccion/inspecLeonCorte.controllers.js";

const router = express.Router();

router.get("/obtenerLeonCorte", obtenerLeonCorte);

router.delete('/eliminarInspeccionCorte/:id', eliminarInspeccionCorte);

export default router;