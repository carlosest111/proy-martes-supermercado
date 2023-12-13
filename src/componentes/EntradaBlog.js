// componentes/EntradaBlog.js
import React from 'react';

const EntradaBlog = ({ titulo, contenido, autor, fecha }) => {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
      <p>
        Publicado por {autor} el {fecha}
      </p>
    </article>
  );
};

export default EntradaBlog;
