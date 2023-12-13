import React from 'react';
import { Multimedia } from '../componentes/Multimedia';
import { Boton } from '../componentes/Boton';
import { Imgnav } from '../componentes/Imgnav';
import Page9 from '../componentes/Page9';
import { Page10 } from '../componentes/Page10';
import { Pag11 } from '../componentes/Pag11';
import { Page12 } from '../componentes/Page12';
import { Pie } from '../componentes/Pie';

const Inicio = () => {
  return (
    <div>
      <Multimedia />
      <Boton />
      <Imgnav />
      <Page9 />
      <Page10 />
      <Pag11 />
      <Page12 />
      <Pie></Pie>
    </div>
  );
};

export default Inicio;
