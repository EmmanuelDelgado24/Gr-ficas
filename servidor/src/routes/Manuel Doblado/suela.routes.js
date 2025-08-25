import express from 'express';
import { SuelaController } from "../../controllers/Manuel Doblado/suela.controller.js"

const router = express.Router();

router.get('/Suela', SuelaController.getAll);

export default router;

