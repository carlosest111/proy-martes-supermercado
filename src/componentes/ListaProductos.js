// ListaProductos.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './ListaProductos.css'; // Importamos el archivo de estilos

const ListaProductos = ({ productos }) => {
  return (
    <div className="lista-productos">
      <h2>Descubre Nuestros Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id} className="producto-item">
            <div className="producto-info">
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <div className="iconos">
                <FontAwesomeIcon icon={faStar} className="icono" />
                <FontAwesomeIcon icon={faHeart} className="icono corazon" />
                <button>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Añadir al Carrito
                </button>
              </div>
            </div>
            <img src={producto.imagen} alt={producto.nombre} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
