import { obtenerLotes, lotesConfig } from '../../models/Cueramaro/montado.models.js';

let verificadorIniciado = false;

export function iniciarVerificacionMontadoCU(io) {
  if (verificadorIniciado) return;
  verificadorIniciado = true;

  const datosPrevios = {};
  const verificar = async () => {
    try{
      for (const config of lotesConfig) {
        try {
          const datos = await obtenerLotes({ depto: config.depto, subdepto: config.subdepto, origen: config.origen,});

          console.log(`consultando: ${config.nombre}`);

          const calcularSumaLC_PARLOT = (datos) =>
            datos?.reduce((acc, item) => acc + item.LC_PARLOT, 0) || 0;

          const sumaPares = calcularSumaLC_PARLOT(datos);

          if (datosPrevios[config.nombre] !== sumaPares) {
            datosPrevios[config.nombre] = sumaPares;
            io.emit(`actualizar-${config.nombre}`, datos);
            console.log(`[SocketIO] Pares cambiaron en ${config.nombre}: ${sumaPares}`);
          }
        } catch (error) {
          console.error(`[Error] Consultando ${config.nombre}:`, error);
        }
      }
    } finally {
      verificadorIniciado = false;
    }
  };

  verificar();

  setInterval(verificar, 300000);   // 300000 cada 5 minutos, 60000 cada minuto, 5000 cada 5 segundos
}