// Creditos.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Page12 } from '../componentes/Page12';

const Creditos = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Diseño y Desarrollo</h2>
          <p className="lead text-center">Carlos Esteban Condori Apaza</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">Información del Proyecto</h2>
          <p className="lead text-center">Materia: INF 122 - Paralelo D</p>
          <p className="lead text-center">Fecha: 12/12/23</p>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Creditos;
