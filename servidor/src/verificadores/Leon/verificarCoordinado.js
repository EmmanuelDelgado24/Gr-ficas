import { obtenerLotes, lotesConfig } from '../../models/Leon/coordinado.model.js';

let verificadorIniciado = false;

function obtenerHoraActual() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  return `${horas}:00`;
}

export function iniciarVerificacionCoordinado(io) {
  if (verificadorIniciado) return;
  verificadorIniciado = true;

  const datosPrevios = {};
  const estadoHoraPorLinea = {};

  //Función que espera los datos de lotes config
  const verificar = async () => {
    const bloqueActual = obtenerHoraActual();
    try {
      // Iterar sobre cada info de lote
      for (const config of lotesConfig) {
        try {
          //trae los datos de la base de datos según el depto, subdepto y origen, origen es 4 o 5 digitos
          const datos = await obtenerLotes({ depto: config.depto, subdepto: config.subdepto, origen: config.origen, });
          // el nombre que se le asigna como apuntador al socket, es el nombre que se le asigna en la configuracion de lotes
          console.log(`consultando: ${config.nombre}`);

          const calcularSumaLC_PARLOT = (datos) =>
            datos?.reduce((acc, item) => acc + item.LC_PARLOT, 0) || 0;

          const sumaPares = calcularSumaLC_PARLOT(datos);

          // Inicializar estado de la línea si es la primera vez
          if (!estadoHoraPorLinea[config.nombre]) {
            estadoHoraPorLinea[config.nombre] = {
              hora: bloqueActual,
              paresAlIniciar: sumaPares
            };
          }

          const estado = estadoHoraPorLinea[config.nombre];

          //si cambia el boque de hora
          if (estado.hora !== bloqueActual) {
            const paresAhora = sumaPares - estado.paresAlIniciar;

            console.log(`[Registro] ${config.nombre} hora ${estado.hora}: ${paresAhora} pares`);

            estado.hora = bloqueActual;
            estado.paresAlIniciar = sumaPares;
          }

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
