import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faTruck, faCreditCard, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
};

const carouselStyle = {
  width: '80%', // Ajusta el ancho del carrusel según tus necesidades
  height: '60%', // Ajusta el alto del carrusel según tus necesidades
  margin: '0 auto', // Centra el carrusel en el contenedor
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const iconStyle = {
  fontSize: '2em',
  color: '#ff8800',
};

const titleStyle = {
  textAlign: 'center',
  marginTop: '10px',
  fontSize: '1.2em',
  fontWeight: 'bold',
};

const products = [
  'https://www.fidalga.com/cdn/shop/products/887961522822_360x.jpg?v=1662504630',
  'https://www.fidalga.com/cdn/shop/files/3_1024x1024_crop_center.png?v=1656613906',
  'https://www.fidalga.com/cdn/shop/products/40000015024_360x.jpg?v=1656733088',
  'https://www.fidalga.com/cdn/shop/products/ae4d50e8-6810-4cd2-b4bc-f47aa4945fc8_87dd080c-97a5-4bab-b9a2-18a47141a952_360x.png?v=1653345306',
  'https://www.fidalga.com/cdn/shop/products/7772606000021_360x.jpg?v=1656732264',
];

export const Pag11 = () => {
  return (
    <div>
      <div style={{ ...containerStyle, position: 'relative' }}>
        {/* Icono y título a la izquierda */}
        <div style={{ ...iconStyle, position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
          <FontAwesomeIcon icon={faCubes} />
        </div>
        <div style={{ ...titleStyle, position: 'absolute', left: '40px', top: '50%', transform: 'translateY(-50%)' }}>
          Oferta
        </div>

        {/* Carousel en el centro */}
        <div style={containerStyle}>
          <Carousel style={carouselStyle}>
            {products.map((imageUrl, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={imageUrl}
                  alt={`Product ${index + 1}`}
                  style={imageStyle}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Icono y título a la derecha */}
        <div style={{ ...iconStyle, position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <div style={{ ...titleStyle, position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)' }}>
          Entrega
        </div>
      </div>
    </div>
  );
};
