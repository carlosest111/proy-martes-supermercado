// componentes/Product.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100px',
  height: '100px',
  marginBottom: '10px',
};

const Product = ({ product, onAddToWishlist }) => {
  const handleButtonClick = () => {
    onAddToWishlist(product);
  };

  return (
    <div style={containerStyle}>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <Button
        variant="primary"
        style={{ backgroundColor: '#FFA500', marginTop: '10px' }}
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon icon={faCoffee} className="me-2" />
        {`Comprar - $${product.price}`}
      </Button>
    </div>
  );
};

export default Product;
