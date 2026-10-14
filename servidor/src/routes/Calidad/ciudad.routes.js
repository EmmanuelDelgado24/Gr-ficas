import express from 'express';
import {obtenerCiudades} from '../../controllers/Calidad/Catalogo/ciudad.controllers.js';

const router = express.Router();

router.get("/obtenerCiudades", obtenerCiudades);

export default router;