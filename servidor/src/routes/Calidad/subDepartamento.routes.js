import express from 'express';
import {obtenerSubDepartamentos} from '../../controllers/Calidad/Catalogo/subDepartamento.controllers.js';

const router = express.Router();

router.get("/obtenerSubDepartamentos/:id_depto", obtenerSubDepartamentos);

export default router;