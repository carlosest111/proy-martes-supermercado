// Contacto.js
import React from 'react';
import { Conc } from '../componentes/Conc';
import Redes from '../componentes/Redes';
import FAQ from '../componentes/FAQ'; // Importa el componente FAQ
import { Page12 } from '../componentes/Page12';

const Contacto = () => {
  return (
    <div>
      <Conc />
      <Redes />
      <FAQ />
      <Page12></Page12>
    </div>
  );
};

export default Contacto;
