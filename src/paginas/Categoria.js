// Categoria.js
import React, { useState } from 'react';
import ListaProductos from '../componentes/ListaProductos';
import FiltrosCategoria from '../componentes/FiltrosCategoria';

const Categoria = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Toallas Perla Full Absorb', precio: 20.99, imagen: 'https://www.fidalga.com/cdn/shop/products/TOALLAS-PERLA-FULL-ABSORB-2ROLLOS_376ebf6c-ccc9-49e6-9fd0-390ee763dd40_360x.png?v=1653344816' },
    { id: 2, nombre: 'Servilleta Perlita 50 Unidades', precio: 30.99, imagen: 'https://www.fidalga.com/cdn/shop/products/SERVILLETA-PERLITA-50UNIDADES_360x.png?v=1653344783' },
    { id: 3, nombre: 'Ola Futuro Detergente Futuro 5L', precio: 15.99, imagen: 'https://www.fidalga.com/cdn/shop/products/OLA-FUTURO-DETERGENTE-FUTURO-5L_360x.png?v=1653344450' },
    { id: 4, nombre: 'Producto 4', precio: 25.99, imagen: 'https://www.fidalga.com/cdn/shop/products/67339553-500x500_360x.jpg?v=1653343899' },
    { id: 5, nombre: 'Producto 5', precio: 18.99, imagen: 'https://www.fidalga.com/cdn/shop/products/1ab26db2-b4a3-43ee-a47f-0f8dd6e189d7_8b5aca3c-c042-4b27-804a-4e4af60f8bf1_360x.png?v=1653345377' },
    { id: 6, nombre: 'Producto 6', precio: 22.99, imagen: 'https://www.fidalga.com/cdn/shop/products/67238891190_360x.jpg?v=1656732512' },
    { id: 7, nombre: 'Producto 7', precio: 35.99, imagen: 'https://www.fidalga.com/cdn/shop/products/29cb03ff-8af3-4853-a5e5-811d5272d663_b3099c42-e8ef-4515-b2ae-2a6b4fb12761_360x.png?v=1653345063' },
    // Agrega más productos según sea necesario
  ]);

  // Crear 3 productos adicionales para tener un total de 10
  const productosExtras = Array.from({ length: 3 }, (_, index) => ({
    id: index + 8, // Asegúrate de asignar IDs únicos
    nombre: `Producto ${index + 8}`,
    precio: Math.floor(Math.random() * 50) + 10, // Precio aleatorio entre 10 y 60
    imagen: 'https://www.fidalga.com/cdn/shop/products/67339553-500x500_360x.jpg?v=1653343899', // Seleccioné una URL de imagen de la lista proporcionada
  }));

  // Asegurémonos de tener exactamente 10 productos en total
  const productosTotales = [...productos, ...productosExtras];

  const [productosFiltrados, setProductosFiltrados] = useState([...productosTotales]);

  const handleFiltrar = (filtros) => {
    // Lógica para aplicar los filtros a la lista de productos y actualizar productosFiltrados
    console.log('Filtros aplicados:', filtros);
    // Ejemplo: Filtrar la lista de productos según los filtros y actualizar productosFiltrados
    // setProductosFiltrados(nuevaListaFiltrada);
  };

  return (
    <div>
      <h2>Categoría</h2>
      <FiltrosCategoria onFiltrar={handleFiltrar} />
      <ListaProductos productos={productosFiltrados} />
    </div>
  );
};

export default Categoria;
