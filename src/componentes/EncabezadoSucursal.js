// componentes/EncabezadoSucursal.js
import React from 'react';

const EncabezadoSucursal = ({ nombreSucursal, colorFondo }) => {
  const estiloEncabezado = {
    backgroundColor: colorFondo || '#ff8c00', // Naranja por defecto
    color: '#fff', // Texto blanco
    padding: '20px',
    textAlign: 'center',
    // Otros estilos según necesidades
  };

  return (
    <header style={estiloEncabezado}>
      <h1>{nombreSucursal} Sucursal</h1>
      {/* Otros elementos del encabezado */}
    </header>
  );
};

export default EncabezadoSucursal;
