import { buscarUsuario } from "../../models/Login/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class login {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ error: "Faltan campos" });

      const user = await buscarUsuario({ email });
      if (!user)
        return res.status(401).json({ error: "Usuario no existe" });

      const passValida = await bcrypt.compare(password, user.password_hash);
      if (!passValida)
        return res.status(401).json({ error: "Contraseña incorrecta" });

      const token = jwt.sign(
        { id: user.id, rol: user.rol },
        process.env.JWT_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRES || "1d" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return res.json({
        message: "Login exitoso",
        token,
        user: {
          id: user.id,
          email: user.email,
          rol: user.rol,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });

    } catch (error) {
      console.error("Error en login:", error.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  static async logout(req, res) {
    try {
      // Elimina la cookie 'token' estableciendo una fecha de expiración en el pasado
      res.cookie("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(0), // Esto elimina la cookie
      });

      return res.status(200).json({ message: "Logout exitoso" });
    } catch (error) {
      console.error("Error en logout:", error.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}


