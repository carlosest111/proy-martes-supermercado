// componentes/ListaEntradasBlog.js
import React from 'react';
import { Container, Card, Row, Col, Carousel, Button } from 'react-bootstrap';

const ListaEntradasBlog = () => {
  // Preguntas y respuestas ficticias
  const preguntasRespuestas = [
    {
      pregunta: '¿Cuál es la mejor sección para comprar productos frescos?',
      respuesta: 'La sección de productos frescos suele estar ubicada al principio del supermercado, cerca de la entrada. Aquí puedes encontrar frutas, verduras y productos recién horneados.',
    },
    {
      pregunta: '¿Cómo puedo ahorrar dinero en mi compra?',
      respuesta: 'Una forma de ahorrar dinero es aprovechar las ofertas y descuentos. También es útil hacer una lista de compras antes de ir al supermercado para evitar compras impulsivas.',
    },
    {
      pregunta: '¿Cuál es la mejor sección para comprar productos frescos?',
      respuesta: 'La sección de productos frescos suele estar ubicada al principio del supermercado, cerca de la entrada. Aquí puedes encontrar frutas, verduras y productos recién horneados.',
    },
    {
      pregunta: '¿Cómo puedo ahorrar dinero en mi compra?',
      respuesta: 'Una forma de ahorrar dinero es aprovechar las ofertas y descuentos. También es útil hacer una lista de compras antes de ir al supermercado para evitar compras impulsivas.',
    },
    {
      pregunta: '¿Cuál es la diferencia entre productos orgánicos y convencionales?',
      respuesta: 'Los productos orgánicos se cultivan sin el uso de pesticidas sintéticos u otros productos químicos. Aunque tienden a ser más caros, muchas personas los eligen por su preocupación por el medio ambiente y la salud.',
    },
    {
      pregunta: '¿Hay algún día de la semana con mejores ofertas?',
      respuesta: 'Algunos supermercados ofrecen ofertas especiales en ciertos días de la semana. Puede variar, así que es una buena idea preguntar al personal o revisar los folletos de ofertas.',
    },
    {
      pregunta: '¿Cómo elegir productos frescos de calidad?',
      respuesta: 'Al elegir frutas y verduras, busca aquellos que estén en buen estado, sin manchas ni magulladuras. En el caso de la carne y el pescado, verifica la fecha de caducidad y la apariencia fresca.',
    },
    // Puedes agregar más preguntas y respuestas según sea necesario
  ];

  return (
    <Container className="mt-4">
      {/* Entrada Especial */}
      {/* ... (Código de la entrada especial) */}

      {/* Dos Columnas debajo de la entrada especial */}
      <Row>
        <Col md={6}>
          <Card className="mb-4 p-4" style={{ backgroundColor: '#FFA500', color: '#000' }}>
            <h3>Preguntas sobre Supermercados</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {preguntasRespuestas.map((item, index) => (
                <li key={index} style={{ marginBottom: '20px' }}>
                  <strong>{item.pregunta}</strong>
                  <p>{item.respuesta}</p>
                </li>
              ))}
            </ul>
          </Card>
        </Col>
        <Col md={6}>
          {/* Otra columna con Carrusel */}
          <Card className="mb-4 p-4" style={{ backgroundColor: '#FFA500', color: '#000' }}>
            <h3>galeria</h3>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.fidalga.com/cdn/shop/products/DSC06548_600x.jpg?v=1653344476"
                  alt="Primera imagen"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.fidalga.com/cdn/shop/products/37e05eb3-ad1a-4d37-82ac-4d95428e046e_e5b89841-868d-4d12-bb38-f65ac58bac11_600x.png?v=1653345058"
                  alt="Segunda imagen"
                />
              </Carousel.Item>
              {/* Puedes agregar más imágenes según sea necesario */}
            </Carousel>
          </Card>
        </Col>
      </Row>

      {/* Otras entradas del blog */}
      {/* ... (Código para otras entradas del blog) */}
    </Container>
  );
};

export default ListaEntradasBlog;
