import React from 'react';

export const Page12 = () => {
  const categories = [
    'Bebidas & Licores',
    'Lácteos',
    'Panadería & Repostería',
    'Despensa & Abarrotes',
    'Cuidado Personal',
    'Bebés',
    'Limpieza del hogar',
    'Snacks & Dulces',
    'Fiambres & Embutidos',
    'Congelados',
    'Mascotas',
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 auto', maxWidth: '800px' }}>
      {/* Primera columna */}
      <div>
        <h3>CATEGORÍAS</h3>
        {categories.slice(0, 4).map((category, index) => (
          <p key={index}>{category}</p>
        ))}
      </div>

      {/* Segunda columna */}
      <div>
        <h3>Dirección</h3>
        <p>Av El Trompillo esquina Yacuiba</p>
        <p>Santa Cruz de la Sierra, Bolivia</p>
      </div>

      {/* Tercera columna */}
      <div>
        <h3>Contacto</h3>
        <p>Email: ecommerce@fidalga.com</p>
      </div>
    </div>
  );
};
