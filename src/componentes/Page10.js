import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faTruck, faCreditCard, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const iconStyle = {
  fontSize: '3rem',
  marginBottom: '10px',
};

export const Page10 = () => {
  return (
    <Container>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>CALIDAD EN PRODUCTOS</h2>
      <Row className="justify-content-center">
        <Col xs={6} md={3} className="text-center">
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <FontAwesomeIcon icon={faCubes} style={iconStyle} />
              <Card.Title>Los Mejores Productos</Card.Title>
              <Card.Text>
                Para tu hogar.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="text-center">
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <FontAwesomeIcon icon={faTruck} style={iconStyle} />
              <Card.Title>Envío Garantizado</Card.Title>
              <Card.Text>
                Disfruta tus productos sin salir de casa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="text-center">
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <FontAwesomeIcon icon={faCreditCard} style={iconStyle} />
              <Card.Title>Pago Seguro</Card.Title>
              <Card.Text>
                Elige el método de pago que más te guste.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className="text-center">
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <FontAwesomeIcon icon={faQuestion} style={iconStyle} />
              <Card.Title>¿Preguntas?</Card.Title>
              <Card.Text>
                Estamos felices de poder ayudarte.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
