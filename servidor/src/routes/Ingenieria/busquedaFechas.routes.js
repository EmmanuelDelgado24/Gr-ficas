import { Router } from "express";
import { busquedaFechaController } from '../../controllers/Ingenieria/busquedaFechas.controller.js';
import { busquedaFecha5Controller } from '../../controllers/Ingenieria/busquedaFechas5.controller.js';

const router = Router();

router.get("/BusquedaFecha", busquedaFechaController.getLotesPorFecha);
router.get("/BusquedaFecha5", busquedaFecha5Controller.getLotesPorFecha);

export default router;