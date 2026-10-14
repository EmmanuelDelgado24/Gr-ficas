import express from 'express';
import {obtenerSeveridades} from '../../controllers/Calidad/Catalogo/severidad.controllers.js';

const router = express.Router();

router.get("/obtenerSeveridades", obtenerSeveridades);

export default router;