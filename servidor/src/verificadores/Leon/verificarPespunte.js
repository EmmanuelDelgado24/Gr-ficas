import { obtenerLotes, lotesConfig } from '../../models/Leon/pespunte.model.js';

let verificadorIniciado = false;
let intervaloPespunte = null;


export function iniciarVerificacionPespunte(io) {
  if (verificadorIniciado) {
    console.log("[Pespunte] El verificador ya está iniciado");
    return;
  }

  verificadorIniciado = true;

  const datosPrevios = {};

  const verificar = async () => {

    console.log("========================================");
    console.log("[Pespunte] Iniciando verificación");

    for (const config of lotesConfig) {

      try {

        console.log("----------------------------------------");

        console.log("CONFIGURACIÓN:");
        console.log({
          nombre: config.nombre,
          depto: config.depto,
          subdepto: config.subdepto,
          origen: config.origen
        });

        const datos = await obtenerLotes({
          depto: config.depto,
          subdepto: config.subdepto,
          origen: config.origen,
        });

        const subdeptosRecibidos = [
          ...new Set(
            datos.map(item =>
              String(item.AV_SUBDEPTO).trim()
            )
          )
        ];

        console.log(
          "Evento:",
          `actualizar-${config.nombre}`
        );

        console.log(
          "Registros:",
          datos.length
        );


        const calcularSumaLC_PARLOT = (datos) =>
          datos?.reduce((acc, item) => acc + item.LC_PARLOT, 0) || 0;

        const sumaPares = calcularSumaLC_PARLOT(datos);

        if (datosPrevios[config.nombre] !== sumaPares) {
          datosPrevios[config.nombre] = sumaPares;
          console.log(`[SocketIO] Emitiendo actualizar-${config.nombre}`);
          io.emit(`actualizar-${config.nombre}`, datos);
          console.log(`[SocketIO] Pares cambiaron en ${config.nombre}: ${sumaPares}`);
        }
      } catch (error) {
        console.error(`[Error] Consultando ${config.nombre}:`, error);
      }
    }
  }

  verificar();
  // Después cada 5 minutos
  intervaloPespunte = setInterval(
    verificar,
    300000
  );
}