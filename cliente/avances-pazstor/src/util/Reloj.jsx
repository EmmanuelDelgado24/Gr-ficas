import React, { useState, useEffect } from 'react';

const Reloj = () => {
  const [tiempo, setTiempo] = useState(new Date());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);
    
    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);
  
  return (
    <div className="p-6 bg-gray-400 rounded-lg shadow-md max-w-sm mx-auto text-center">
      <h2 className="text-xl font-bold mb-2">Reloj en tiempo real</h2>
      <div className="text-3xl font-mono">
        {tiempo.toLocaleTimeString()}
      </div>
      <div className="mt-2 text-sm text-gray-900">
        {tiempo.toLocaleDateString()}
      </div>
    </div>
  );
};

export default Reloj;