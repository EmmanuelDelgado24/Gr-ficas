import { Router } from "express";
import { InformacionCorte } from "../../controllers/Ingenieria/infoCorte.controller.js";

const router = Router();
router.get("/informacionCorte", InformacionCorte.getInformacionCorte);

export default router; 