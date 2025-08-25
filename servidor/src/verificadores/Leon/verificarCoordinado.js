import { obtenerLotes, lotesConfig } from '../../models/Leon/coordinado.model.js';

let verificadorIniciado = false;

export function iniciarVerificacionCoordinado(io) {
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

// import { obtenerLotes, lotesConfig } from '../models/Coordinado/coordinado.model.js';
// let intervalo = null;
// let clientesActivos = 0; 

// export function iniciarVerificacionCoordinado(io) {
//   const datosPrevios = {};  
//   clientesActivos++;
//   if (intervalo) return;

//   const verificar = async () => {
//     for (const config of lotesConfig) {
//       try {
//         const datos = await obtenerLotes({
//           depto: config.depto,
//           subdepto: config.subdepto,
//           origen: config.origen,
//         });

//         console.log(`consultando: ${config.nombre}`);

//         const sumaPares = datos?.reduce((acc, item) => acc + item.LC_PARLOT, 0) || 0;

//         if (datosPrevios[config.nombre] !== sumaPares) {
//           datosPrevios[config.nombre] = sumaPares;
//           io.emit(`actualizar-${config.nombre}`, datos);
//           console.log(`[SocketIO] Pares cambiaron en ${config.nombre}: ${sumaPares}`);
//         }
//       } catch (error) {
//         console.error(`[Error] Consultando ${config.nombre}:`, error);
//       }
//     }
//   };
//   verificar();
//   intervalo = setInterval(verificar, 60000);    // 300000 cada 5 minutos, 60000 cada minuto, 5000 cada 5 segundos
// }

// export function detenerVerificacionCoordinado() {
//   clientesActivos--;
//   console.log(`[SocketIO] Cliente salió del modulo Coordinado. Activooooooo: ${clientesActivos}`);

//   // Si ya no hay clientes activos se detiene la ejecución
//   if (clientesActivos <= 0 && intervalo) {
//     clearInterval(intervalo);
//     intervalo = null;
//     console.log('[SocketIO] Verificador Coordinado Detenido');
//   }
// }
