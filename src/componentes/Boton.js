import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#ff8c00',  // Ajusta el color para que combine con el naranja
};

const buttonStyle = {
  margin: '0 10px',
};

export const Boton = () => {
  return (
    <div style={buttonContainerStyle}>
      <Button variant="primary" style={{ ...buttonStyle, backgroundColor: '#FFA500' }}>
        <FontAwesomeIcon icon={faCoffee} className="me-2" />
        Primary
      </Button>
      <Button variant="secondary" style={{ ...buttonStyle, backgroundColor: '#003366' }}>
        <FontAwesomeIcon icon={faStar} className="me-2" />
        Secondary
      </Button>
      <Button variant="success" style={{ ...buttonStyle, backgroundColor: '#006400' }}>
        <FontAwesomeIcon icon={faCheck} className="me-2" />
        Success
      </Button>
    </div>
  );
};
