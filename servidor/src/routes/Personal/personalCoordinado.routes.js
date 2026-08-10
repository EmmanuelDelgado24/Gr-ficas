import {Router} from 'express';
import {obtenerPersonalCoordinados} from '../../controllers/Personal/personalCoordinado.controller.js';

const router = Router();
router.get('/personalcoordinado', obtenerPersonalCoordinados);

export default router;