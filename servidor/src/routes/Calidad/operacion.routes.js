import express from 'express';
import {obtenerOperaciones} from '../../controllers/Calidad/Catalogo/operacion.controllers.js';

const router = express.Router();

router.get("/obtenerOperaciones", obtenerOperaciones);

export default router;