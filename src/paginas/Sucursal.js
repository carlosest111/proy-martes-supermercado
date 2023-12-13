// paginas/Sucursal.js
import React from 'react';
import EncabezadoSucursal from '../componentes/EncabezadoSucursal';
import ListaEmpleados from '../componentes/ListaEmpleados';
import MapaUbicacion from '../componentes/MapaUbicacion';
import { Card, Col, Row } from 'react-bootstrap';

// Definición de datosSucursales
const datosSucursales = [
  {
    nombre: 'Supermercado Patico Central',
    empleados: [
      { id: 1, nombre: 'Juan Pérez', correo: 'juan.perez@superpatico.com', telefono: '555-1234' },
      { id: 2, nombre: 'Ana Rodríguez', correo: 'ana.rodriguez@superpatico.com', telefono: '555-5678' },
    ],
    ubicacion: { latitud: 40.7128, longitud: -74.006 },
    categoriasProductos: ['Alimentos', 'Electrónicos', 'Hogar', 'Ropa', 'Juguetes', 'Deportes'],
    promociones: ['Descuento del 10% en productos electrónicos hoy', '2x1 en libros este mes'],
  },
  {
    nombre: 'Supermercado Patico Norte',
    empleados: [
      { id: 3, nombre: 'Carlos Gómez', correo: 'carlos.gomez@superpatico.com', telefono: '555-9876' },
      { id: 4, nombre: 'Laura Martínez', correo: 'laura.martinez@superpatico.com', telefono: '555-4321' },
    ],
    ubicacion: { latitud: 41.8781, longitud: -87.6298 },
    categoriasProductos: ['Electrodomésticos', 'Libros', 'Belleza', 'Hogar', 'Deportes', 'Jardín'],
    promociones: ['2x1 en libros este mes', 'Descuento en electrodomésticos esta semana'],
  },
  {
    nombre: 'Supermercado Patico Sur',
    empleados: [
      { id: 5, nombre: 'María González', correo: 'maria.gonzalez@superpatico.com', telefono: '555-1111' },
      { id: 6, nombre: 'Pedro Jiménez', correo: 'pedro.jimenez@superpatico.com', telefono: '555-2222' },
    ],
    ubicacion: { latitud: -34.6037, longitud: -58.3816 }, // Latitud y longitud de Buenos Aires, Argentina (ejemplo)
    categoriasProductos: ['Electrónicos', 'Ropa', 'Juguetes', 'Belleza'],
    promociones: ['Ofertas en ropa esta semana', 'Descuento especial en juguetes'],
  },
  // ... Otras sucursales
];

const Sucursal = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {datosSucursales.map((sucursal) => (
        <Col key={sucursal.nombre}>
          <Card style={{ backgroundColor: '#FFA500', color: '#000' }}>
            <EncabezadoSucursal nombreSucursal={sucursal.nombre} />
            <Card.Body>
              <ListaEmpleados empleados={sucursal.empleados} />
              <MapaUbicacion ubicacion={sucursal.ubicacion} />
              <div>
                <h3>Categorías de Productos</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {sucursal.categoriasProductos.map((categoria, index) => (
                    <Col key={index}>
                      <Card style={{ backgroundColor: index % 2 === 0 ? '#FFA500' : '#FFD700', color: '#000' }} className="mb-2">
                        <Card.Body>
                          <strong>{categoria}</strong>
                          {/* Agrega más detalles si es necesario */}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              <div>
                <h3>Promociones</h3>
                <ul>
                  {sucursal.promociones.map((promocion, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#FFA500' : '#FFD700',
                        color: '#000',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        padding: '10px',
                      }}
                    >
                      {promocion}
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Sucursal;
