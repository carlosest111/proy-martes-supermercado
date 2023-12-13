// componentes/ListaEmpleados.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ListaEmpleados = ({ empleados }) => {
  return (
    <Card.Body>
      <Card.Title>
        <strong>Equipo de Trabajo</strong>
      </Card.Title>
      <Row xs={1} md={2} lg={2} className="g-4">
        {empleados.map((empleado, index) => (
          <Col key={empleado.id}>
            <Card style={{ backgroundColor: index % 2 === 0 ? '#FFA500' : '#FFD700', color: '#000' }}>
              <Card.Body>
                <Card.Title>{empleado.nombre}</Card.Title>
                <Card.Text>Cargo: Desarrollador</Card.Text>
                <Card.Text>Correo: {empleado.correo}</Card.Text>
                <Card.Text>Teléfono: {empleado.telefono}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Card.Body>
  );
};

export default ListaEmpleados;
