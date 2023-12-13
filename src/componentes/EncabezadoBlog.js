// componentes/EncabezadoBlog.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const EncabezadoBlog = () => {
  return (
    <header className="my-5">
      <Container>
        <Row>
          {/* Columna de la izquierda con secciones */}
          <Col md={3}>
            <section className="mb-4">
              <h4 className="text-warning">NOTICIAS</h4>
              <p>Descubre las últimas noticias</p>
            </section>
            <section className="mb-4">
              <h4 className="text-warning">ARTÍCULOS RECIENTES</h4>
              <p>Explora nuestros artículos más recientes</p>
            </section>
            <section>
              <h4 className="text-warning">FEATURED PRODUCTS</h4>
              <p>Descubre nuestros productos destacados</p>
              {/* Aquí puedes colocar la imagen, el nombre y el precio de un producto */}
              <img src="https://www.fidalga.com/cdn/shop/products/bebida-vino-trumpeter-cabsauv-750ml----7790577002141.jpg?v=1653344952" alt="Producto destacado" className="img-fluid" />
              <p className="mt-2 mb-1">Vino de jamaica con sabor a tamarindo</p>
              <p className="text-warning">Precio: $19.99</p>
            </section>
          </Col>

          {/* Sección central con mensaje y otra imagen */}
          <Col md={6}>
            <div className="text-center">
              <h1 className="text-warning">¡Fidalga es una gran familia que trabaja día a día para hacerte sentir parte de ella!</h1>
            </div>
            <div className="mt-4">
              {/* Aquí puedes colocar otra imagen */}
              <img src="https://www.fidalga.com/cdn/shop/articles/186506520_3942859012475437_2641292073814055997_n_1024x1024.jpg?v=1621016749" alt="Producto destacado" className="img-fluid" />
              
               </div>
          </Col>

          {/* Columna de la derecha con secciones */}
          <Col md={3}>
            <section className="mb-4">
              <h4 className="text-warning">LookBook Gallery</h4>
              <p>Explora nuestra galería de LookBook</p>
              {/* Aquí puedes colocar otra historia o contenido relacionado */}
            </section>
            <section>
              <h4 className="text-warning">Best Sellers</h4>
              <p>Descubre nuestros productos más populares</p>
              {/* Aquí puedes colocar un carrusel con imágenes de los best sellers */}
              <Carousel>
                <Carousel.Item>
                  <img src="https://www.fidalga.com/cdn/shop/products/37e05eb3-ad1a-4d37-82ac-4d95428e046e_e5b89841-868d-4d12-bb38-f65ac58bac11_600x.png?v=1653345058" alt="Best Seller 1" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://www.fidalga.com/cdn/shop/products/770213317278_600x.jpg?v=1656732936" alt="Best Seller 2" className="img-fluid" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="https://www.fidalga.com/cdn/shop/products/7771901000194_600x.jpg?v=1656732788" alt="Best Seller 2" className="img-fluid" />
                </Carousel.Item>
                {/* Agrega más elementos según sea necesario */}
              </Carousel>
            </section>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default EncabezadoBlog;
