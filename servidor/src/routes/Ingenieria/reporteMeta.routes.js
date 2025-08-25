import { Router } from "express";
import { ReporteMetaController } from '../../controllers/Ingenieria/reporteMeta.controller.js';

const router = Router();

router.get("/ReporteMeta", ReporteMetaController.obtenerMeta);

export default router;