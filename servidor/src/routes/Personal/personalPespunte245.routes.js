import {Router} from 'express';
import {obtenerPersonalPespun245} from '../../controllers/Personal/personalPespunte245.controller.js';

const router = Router();
router.get('/personalpespunte245', obtenerPersonalPespun245);

export default router;