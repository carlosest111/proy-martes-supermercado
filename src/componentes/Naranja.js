// Componente Naranja.js
import React from 'react';

const Naranja = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#FFA500', padding: '20px', color: 'white' }}>
      {children}
    </div>
  );
};

export default Naranja;
