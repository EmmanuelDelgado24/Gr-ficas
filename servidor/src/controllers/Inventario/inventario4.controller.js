import { inventario4 } from "../../models/Inventario/Inventario_4/inventario4.models.js";

export const getInventario = async (req, res) => {
  console.log("🔥 ENTRÓ AL CONTROLADOR getInventario");
   try {
    const data = await inventario4(req);
    console.log("📌 RESULTADO RECIBIDO DEL MODELO");
    res.status(200).json({ ok: true, data });
  } catch (error) {
     console.log("❌ ERROR EN CONTROLADOR:", error);
    res.status(500).json({
      ok: false,
      error: error.message
    });
  }
}