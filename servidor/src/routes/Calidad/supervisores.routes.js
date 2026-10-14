import express from 'express';

import { obtenerSupervisores } from '../../controllers/Calidad/Catalogo/supervisores.controllers.js';

const router = express.Router();

router.get("/obtenerSupervisores/:id_depto", obtenerSupervisores);

export default router;