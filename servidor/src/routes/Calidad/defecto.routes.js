import express from 'express';

import { obtenerDefectos } from '../../controllers/Calidad/Catalogo/defecto.controllers.js';


const router = express.Router();

router.get("/obtenerDefectos/:id_categoria", obtenerDefectos);

//router.post("/crearDefecto", crearCategoria);

//router.put("/editarDefecto", editarCategoria);

//router.delete("/eliminarDefecto", eliminarCategoria);

//router.get("/buscarDefecto", buscarCategoria)

export default router;