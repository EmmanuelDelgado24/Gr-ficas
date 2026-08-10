import {Router} from 'express';
import {obtenerPersonalCortes} from '../../controllers/Personal/personalCorte.controller.js';

const router = Router();
router.get('/personalcorte', obtenerPersonalCortes);

export default router;