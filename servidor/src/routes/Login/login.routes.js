import express from 'express';
import { login } from "../../controllers/Login/login.controller.js"
import { verificarToken } from '../../middlewares/auth.middleware.js'; 
const router = express.Router();

router.post('/login', login.login);
router.get('/verificar-token', verificarToken);


export default router;