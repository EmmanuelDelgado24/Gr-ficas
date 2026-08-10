import {Router} from 'express';
import {obtenerPersonalAdornos} from '../../controllers/Personal/personalAdorno.controller.js';

const router = Router();
router.get('/personaladorno', obtenerPersonalAdornos);

export default router;