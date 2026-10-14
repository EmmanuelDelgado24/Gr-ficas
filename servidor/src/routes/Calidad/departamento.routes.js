import express from 'express';
import {obtenerDepartamentos} from '../../controllers/Calidad/Catalogo/departamento.controllers.js';

const router = express.Router();

router.get("/obtenerDepartamentos/:id_ciudad", obtenerDepartamentos);

export default router;