// Importa otros componentes y estilos según sea necesario
import React from 'react';
import EncabezadoBlog from '../componentes/EncabezadoBlog';
import ListaEntradasBlog from '../componentes/ListaEntradasBlog';
import Seccion3 from '../componentes/Seccion3';

// Datos de ejemplo para las entradas del blog
const entradasEjemplo = [
  {
    id: 1,
    titulo: 'Descubriendo React',
    contenido: 'Hoy exploraremos los conceptos básicos de React y cómo comenzar un nuevo proyecto.',
    autor: 'John Doe',
    fecha: '2023-01-15',
  },
  {
    id: 2,
    titulo: 'State y Props en React',
    contenido: 'Aprenderemos sobre el manejo del estado y las propiedades en React para construir aplicaciones dinámicas.',
    autor: 'Jane Smith',
    fecha: '2023-02-02',
  },
  // Agrega más entradas según sea necesario
];

const Blog = () => {
  return (
    <div>
      <EncabezadoBlog />
      <ListaEntradasBlog entradas={entradasEjemplo} />
      <Seccion3 /> {/* Agrega esta línea para incluir la Sección 3 */}
    </div>
  );
};

export default Blog;
