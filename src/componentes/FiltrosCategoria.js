// FiltrosCategoria.js
import React, { useState } from 'react';

const FiltrosCategoria = ({ onFiltrar }) => {
  const [orden, setOrden] = useState('asc'); // Estado para el orden
  const [rangoPrecio, setRangoPrecio] = useState({ min: '', max: '' }); // Estado para el rango de precios

  const handleOrdenChange = (event) => {
    const nuevoOrden = event.target.value;
    setOrden(nuevoOrden);
    // Puedes agregar más lógica aquí según tus necesidades
    // Por ejemplo, puedes ordenar la lista de productos y llamar a la función onFiltrar con la nueva lista.
    onFiltrar({ orden: nuevoOrden, rangoPrecio });
  };

  const handlePrecioChange = (event, tipo) => {
    const nuevoValor = event.target.value;
    setRangoPrecio((prev) => ({ ...prev, [tipo]: nuevoValor }));
  };

  const aplicarFiltros = () => {
    // Puedes agregar más lógica aquí según tus necesidades
    // Por ejemplo, puedes filtrar la lista de productos y llamar a la función onFiltrar con la nueva lista.
    onFiltrar({ orden, rangoPrecio });
  };

  return (
    <div className="filtros-container">
      <h3>Filtros</h3>
      <div>
        <label>Ordenar por:</label>
        <select value={orden} onChange={handleOrdenChange}>
          <option value="asc">Precio ascendente</option>
          <option value="desc">Precio descendente</option>
        </select>
      </div>
      <div>
        <label>Filtrar por precio:</label>
        <input
          type="number"
          placeholder="Mínimo"
          value={rangoPrecio.min}
          onChange={(e) => handlePrecioChange(e, 'min')}
        />
        <input
          type="number"
          placeholder="Máximo"
          value={rangoPrecio.max}
          onChange={(e) => handlePrecioChange(e, 'max')}
        />
      </div>
      <button onClick={aplicarFiltros}>Aplicar Filtros</button>
    </div>
  );
};

export default FiltrosCategoria;
