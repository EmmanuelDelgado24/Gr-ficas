import express from 'express';

import { obtenerInspectores } from '../../controllers/Calidad/Catalogo/inspector.controllers.js';

const router = express.Router();

router.get("/obtenerInspectores",  obtenerInspectores);

export default router;