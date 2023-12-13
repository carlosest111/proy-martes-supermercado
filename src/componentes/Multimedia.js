import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const containerStyle = {
  position: 'relative',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '1.5rem',
  backgroundColor: '#FFA500', // Naranja principal
  color: 'white', // Texto en color blanco para contraste
  border: 'none',
  padding: '10px 20px', // Espaciado interno del botón
};

export const Multimedia = () => {
  return (
    <div style={containerStyle}>
      <img
        src="https://thefoodtech.com/wp-content/uploads/2022/07/supermercado-online.png"
        alt="Product"
        style={imageStyle}
      />
      <Link to="/shopping">
        <Button variant="primary" style={buttonStyle}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Comprar
        </Button>
      </Link>
    </div>
  );
};
