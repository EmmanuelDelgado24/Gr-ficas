import {Router} from 'express';
import {obtenerPersonalPorDepartamento} from '../../controllers/Personal/personal.controller.js';

const router = Router();
router.get('/personaldepto', obtenerPersonalPorDepartamento);

export default router;