import {Router} from 'express';
import {obtenerPersonalPespun242} from '../../controllers/Personal/personalPespunte242.controller.js';

const router = Router();
router.get('/personalpespunte242', obtenerPersonalPespun242);

export default router;