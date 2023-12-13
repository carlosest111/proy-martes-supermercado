// Negocios.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Page12 } from '../componentes/Page12';

const Negocios = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Negocios Asociados</h2>
          <p className="text-center">
            Estarás al tanto de todas las promociones y novedades que tenemos en cada una de nuestras sucursales.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://hipermaxi.com/wp-content/uploads/2021/04/supermercados.jpg" />
            <Card.Body>
              <Card.Title>Negocio 1</Card.Title>
              <Card.Text>
                Descripción breve del negocio. Puedes agregar información adicional aquí.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://hipermaxi.com/wp-content/uploads/2021/05/FABRICA.jpg" />
            <Card.Body>
              <Card.Title>Negocio 2</Card.Title>
              <Card.Text>
                Descripción breve del negocio. Puedes agregar información adicional aquí.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://hipermaxi.com/wp-content/uploads/2021/04/farmacias.jpg " />
            <Card.Body>
              <Card.Title>Negocio 3</Card.Title>
              <Card.Text>
                Descripción breve del negocio. Puedes agregar información adicional aquí.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://hipermaxi.com/wp-content/uploads/2021/05/FABRICA.jpg" />
            <Card.Body>
              <Card.Title>Negocio 4</Card.Title>
              <Card.Text>
                Descripción breve del negocio. Puedes agregar información adicional aquí.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://hipermaxi.com/wp-content/uploads/2021/04/farmacias.jpg" />
            <Card.Body>
              <Card.Title>Negocio 5</Card.Title>
              <Card.Text>
                Descripción breve del negocio. Puedes agregar información adicional aquí.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://hipermaxi.com/wp-content/uploads/2021/04/supermercados.jpg" />
            <Card.Body>
              <Card.Title>Negocio 6</Card.Title>
              <Card.Text>
                Descripción breve del negocio. Puedes agregar información adicional aquí.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center mb-4">Supermercados</h3>
          <p>
            Hipermaxi es la cadena más grande de supermercados en Bolivia, con una política de precios bajos,
            ofertas, variedad y surtido en productos nacionales e importados. Son 37 salas de supermercados ubicadas
            en Santa Cruz, La Paz y Cochabamba.
          </p>
        </Col>
      </Row>
      <Page12></Page12>
    </Container>
  );
};

export default Negocios;
