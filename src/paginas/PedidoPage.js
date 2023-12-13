// PedidoPage.js
import React, { useState, useEffect } from 'react';

const PedidoPage = ({ pedido, onRealizarPedido }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Verifica si la lista de productos (pedido) es válida antes de mapear
    if (pedido && pedido.length > 0) {
      // Calcula el total del pedido cuando cambia el pedido
      const nuevoTotal = pedido.reduce((acc, product) => acc + product.price, 0);
      setTotal(nuevoTotal);
    }
  }, [pedido]);

  return (
    <div>
      <h2>Pedido</h2>
      {pedido && pedido.length > 0 ? (
        <ul>
          {pedido.map((product) => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el pedido.</p>
      )}
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={onRealizarPedido}>Realizar Pedido</button>
    </div>
  );
};

export default PedidoPage;
