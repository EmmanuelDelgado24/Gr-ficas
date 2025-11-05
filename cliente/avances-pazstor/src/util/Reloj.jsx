import React, { useState, useEffect } from 'react';

export const Reloj = () => {
  const [tiempo, setTiempo] = useState(new Date());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);
    
    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);
  
  const dia = tiempo.getDate();
  const anio = tiempo.getFullYear();
  const mes = tiempo.toLocaleString('es-ES', { month: 'long' });
  const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
  const fechaFormateada = `${dia} / ${mesCapitalizado} / ${anio}`;
  
  return (
    <div className="p-6 rounded-2xl bg-[#202c34] h-25 text-white shadow-md w-106 mx-auto text-center">
      <div className="text-3xl font-mono">
        {tiempo.toLocaleTimeString()}
      </div>
      <div className="text-3xl text-gray-100">
        {fechaFormateada}
      </div>
    </div>
  );
};

export default Reloj;