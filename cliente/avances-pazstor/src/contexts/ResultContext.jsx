// src/context/ResultContext.jsx (o donde te parezca mejor organizar tus contextos)
import React, { createContext, useState, useContext, useCallback } from 'react';

// 1. Crear el contexto
const ResultContext = createContext(null);

// 2. Crear el Proveedor (Provider)
export const ResultProvider = ({ children }) => {
  // Estado para almacenar todas las metas que se calcularán
  // Usaremos un objeto para poder almacenar múltiples metas por "tipo" o "id de gráfica"
  const [calculatedMetas, setCalculatedMetas] = useState({});

  // Función para actualizar una meta específica
  const setMeta = useCallback((key, value) => {
    setCalculatedMetas(prevMetas => ({
      ...prevMetas,
      [key]: value,
    }));
  }, []);

  // Función para obtener una meta específica
  const getMeta = useCallback((key) => {
    return calculatedMetas[key];
  }, [calculatedMetas]);

  // Proveemos las funciones y el estado
  const contextValue = {
    calculatedMetas,
    setMeta,
    getMeta,
  };

  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
};

// 3. Crear un hook personalizado para consumir el contexto
export const useResultContext = () => {
  const context = useContext(ResultContext);
  if (!context) {
    throw new Error('useResultContext must be used within a ResultProvider');
  }
  return context;
};