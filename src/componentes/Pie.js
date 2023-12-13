import React from 'react';

export const Pie = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        ¡Gracias por visitarnos! 🌟 Esperamos que encuentres lo que buscas.
        <br />
        Si tienes alguna pregunta, ¡no dudes en contactarnos!
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#FFA500', // Naranja principal
  color: 'white',
  textAlign: 'center',
  padding: '1rem',
  width: '100%',
  borderTop: '1px solid #fff', // Línea superior para separar el pie de página
};

const textStyle = {
  margin: 0,
  fontSize: '1rem',
};
