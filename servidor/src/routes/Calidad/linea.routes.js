import express from 'express';
import {obtenerLineas} from '../../controllers/Calidad/Catalogo/linea.controllers.js';

const router = express.Router();

router.get("/obtenerLineas/:id_ciudad", obtenerLineas);

export default router;