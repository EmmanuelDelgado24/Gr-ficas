import express from 'express';
import { getInventario } from '../../controllers/Inventario/inventario4.controller.js';

const router = express.Router();

router.get("/inventario4", getInventario);

export default router;