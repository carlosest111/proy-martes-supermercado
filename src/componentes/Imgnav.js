import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Imgnav = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', backgroundColor: '#ffebcd' }}>
      <h2 style={{ textAlign: 'center', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Ofertas</h2>
      <CardGroup>
        <Card style={{ backgroundColor: '#ffe4b5' }}>
          <Card.Img variant="top" src="https://www.fidalga.com/cdn/shop/products/Pil-blanca-946ml.png?v=1653344258" />
          <Card.Body>
            <Card.Title>Lacteos</Card.Title>
            <Card.Text>
            Descubre las increíbles ofertas en productos lácteos de nuestro supermercado. Desde quesos exquisitos hasta yogures cremosos, tenemos todo lo que necesitas para satisfacer tus antojos lácteos. Sumérgete en la calidad y el sabor inigualables de nuestra selección.
            Queso Cheddar:
Disfruta de la riqueza y la suavidad de nuestro queso cheddar premium. Perfecto para acompañar tus comidas o simplemente como tentempié. ¡No te pierdas esta oferta especial!

Yogur Natural:
Nuestro yogur natural te brinda la frescura y la pureza que buscas. Ya sea para el desayuno o como ingrediente en tus recetas favoritas, este yogur es siempre una elección acertada. Aprovecha el descuento por tiempo limitado.

Leche Fresca:
La leche fresca, directamente de nuestros productores locales, es la opción ideal para mantener una dieta equilibrada. Rica en nutrientes y sabor, esta leche es un básico que no puede faltar en tu hogar.

Explora estas ofertas y muchas más en nuestra sección de lácteos. ¡No dejes pasar la oportunidad de disfrutar de productos de alta calidad a precios increíbles!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: '#ffe4b5' }}>
          <Card.Img variant="top" src="https://www.fidalga.com/cdn/shop/products/67339553-500x500_360x.jpg?v=1653343899" />
          <Card.Body>
            <Card.Title>Limpieza</Card.Title>
            <Card.Text>Descubre la Frescura en Nuestra Sección de Lácteos

Sumérgete en el mundo de los lácteos con nuestras irresistibles ofertas en Supermercado XYZ. Te invitamos a explorar nuestra exclusiva selección de productos lácteos que deleitarán tu paladar y nutrirán tu cuerpo. Desde la leche más cremosa hasta los yogures más exquisitos, encontrarás todo lo que necesitas para satisfacer tus antojos lácteos.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: '#ffe4b5' }}>
          <Card.Img variant="top" src="https://www.fidalga.com/cdn/shop/products/ee162bec-7522-4cd0-b31a-909072d04632_47854444-2ff7-45b7-82d2-37df726d142d_360x.png?v=1653345291" />
          <Card.Body>
            <Card.Title>Bebidas</Card.Title>
            <Card.Text>
Explora el Sabor en Nuestra Sección de Bebidas

Embárcate en un viaje de sabores refrescantes con las increíbles ofertas en bebidas de Supermercado XYZ. Descubre una amplia variedad de opciones que satisfarán tus sed, ya sea que estés buscando algo para acompañar tus comidas o simplemente disfrutar en cualquier momento del día.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Repite el mismo patrón para las tarjetas restantes */}
      </CardGroup>
    </div>
  );
};
